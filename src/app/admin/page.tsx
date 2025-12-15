"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";
import Breadcrumbs from "@/components/admin/Breadcrumbs";
import { isAuthenticated } from "@/lib/admin-auth";
import type { FormSubmission } from "@/types/admin";
import { formatDate } from "@/lib/admin-utils";
import { EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | FormSubmission["formType"]>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | FormSubmission["status"]>("all");
  const [selectedForm, setSelectedForm] = useState<FormSubmission | null>(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/admin/login");
      return;
    }

    const loadForms = async () => {
      try {
        const response = await fetch("/api/forms");
        if (!response.ok) throw new Error("Failed to fetch form submissions");
        const json = await response.json();
        setFormSubmissions(json.data ?? []);
      } catch (error) {
        console.error("Unable to load form submissions", error);
        setFormSubmissions([]); // Set to empty array on error
      }
    };

    loadForms();
  }, [router]);

  const filteredForms = useMemo(() => {
    return formSubmissions.filter((submission) => {
      const lowerSearch = searchTerm.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        submission.fullName.toLowerCase().includes(lowerSearch) ||
        submission.email.toLowerCase().includes(lowerSearch) ||
        (submission.message?.toLowerCase().includes(lowerSearch) ?? false);

      const matchesType = typeFilter === "all" || submission.formType === typeFilter;
      const matchesStatus = statusFilter === "all" || submission.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [formSubmissions, searchTerm, typeFilter, statusFilter]);

  const handleExportCsv = () => {
    if (!filteredForms.length) return;
    const headers = ["Full Name", "Email", "Phone", "Company", "Form Type", "Status", "Submitted At", "Message"];
    const rows = filteredForms.map((submission) => [
      submission.fullName,
      submission.email,
      submission.phone || "",
      submission.company || "",
      submission.formType,
      submission.status,
      new Date(submission.submittedAt).toLocaleString(),
      (submission.message || "").replace(/\r?\n|\r/g, " "),
    ]);

    const csvContent = [headers, ...rows]
      .map((row) =>
        row
          .map((value) => {
            const safeValue = value?.toString().replace(/"/g, '""') || "";
            return `"${safeValue}"`;
          })
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `lama-fuel-form-submissions-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const summarize = (status: FormSubmission["status"]) =>
    filteredForms.filter((submission) => submission.status === status).length;

  const badgeClass = (status: FormSubmission["status"]) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "in_progress":
        return "bg-yellow-100 text-yellow-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatFormType = (type: FormSubmission["formType"]) => {
    switch (type) {
      case "contact":
        return "Contact";
      case "partnership":
        return "Partnership";
      case "support":
        return "Support";
      case "brand_application":
        return "Brand Application";
      default:
        return "Other";
    }
  };

  return (
    <AdminLayout>
      <Breadcrumbs items={[{ label: "Forms" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 animate-slide-text">Forms</h1>
        <p className="text-gray-600 mt-2">Review and triage inbound submissions from lama fuel.com.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow px-6 py-4">
          <p className="text-sm text-gray-500">Total Forms</p>
          <p className="text-3xl font-semibold text-gray-900 mt-1">{formSubmissions.length}</p>
        </div>
      </div>

      {/* Website Form Submissions */}
      <div className="mt-8 bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Website Form Submissions</h2>
            <p className="text-sm text-gray-500">Review, triage, and export inbound requests from lama fuel.com forms.</p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search name, email, message..."
              className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as typeof typeFilter)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All form types</option>
              <option value="contact">Contact</option>
              <option value="partnership">Partnership</option>
              <option value="support">Support</option>
              <option value="brand_application">Brand Application</option>
              <option value="other">Other</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All statuses</option>
              <option value="new">New</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
            <button
              type="button"
              onClick={handleExportCsv}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 active:scale-95"
            >
              Download CSV
            </button>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600">
          <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
            <span>New</span>
            <span className="text-lg font-semibold text-gray-900">{summarize("new")}</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
            <span>In Progress</span>
            <span className="text-lg font-semibold text-gray-900">{summarize("in_progress")}</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
            <span>Resolved</span>
            <span className="text-lg font-semibold text-gray-900">{summarize("resolved")}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          {filteredForms.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">View</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredForms.map((submission) => (
                  <tr key={submission.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{submission.fullName}</div>
                      <div className="text-sm text-gray-500">{submission.email}</div>
                      {submission.phone && <div className="text-xs text-gray-400">{submission.phone}</div>}
                      {submission.company && <div className="text-xs text-gray-400">{submission.company}</div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatFormType(submission.formType)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeClass(submission.status)}`}>
                        {submission.status === "in_progress" ? "In Progress" : submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(submission.submittedAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {submission.message && submission.message.length > 140
                        ? `${submission.message.slice(0, 140)}…`
                        : submission.message || "—"}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        type="button"
                        onClick={() => setSelectedForm(submission)}
                        className="inline-flex items-center justify-center rounded-full p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                        aria-label="View submission"
                      >
                        <EyeIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="px-6 py-12 text-center text-sm text-gray-500">No form submissions match your filters.</div>
          )}
        </div>
      </div>

      {/* View Modal */}
      {selectedForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b px-6 py-4">
              <div>
                <p className="text-sm text-indigo-600 font-medium">Submission Detail</p>
                <h3 className="text-xl font-semibold text-gray-900">{selectedForm.fullName}</h3>
              </div>
              <button
                onClick={() => setSelectedForm(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DetailField label="Full Name" value={selectedForm.fullName} />
                <DetailField label="Email" value={selectedForm.email} />
                <DetailField label="Phone" value={selectedForm.phone || "—"} />
                <DetailField label="Company" value={selectedForm.company || "—"} />
                <DetailField label="Form Type" value={formatFormType(selectedForm.formType)} />
                <DetailField label="Status" value={selectedForm.status} />
                <DetailField label="Submitted At" value={new Date(selectedForm.submittedAt).toLocaleString()} />
                <DetailField label="Source Page" value={selectedForm.sourcePage || "—"} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Message</p>
                <p className="text-gray-800 whitespace-pre-wrap bg-gray-50 border border-gray-100 rounded-lg p-3">
                  {selectedForm.message || "—"}
                </p>
              </div>
              {selectedForm.payload && (
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-3">Payload Details</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(selectedForm.payload).map(([key, value]) => (
                      <div key={key} className="border border-gray-100 rounded-lg px-3 py-2 bg-gray-50">
                        <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                          {formatPayloadKey(key)}
                        </p>
                        <p className="text-sm text-gray-900 whitespace-pre-line">
                          {formatPayloadValue(value)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="border-t bg-gray-50 px-6 py-4 flex justify-end">
              <button
                onClick={() => setSelectedForm(null)}
                className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
      <p className="text-gray-900 border border-gray-100 rounded-lg px-3 py-2 bg-gray-50">{value || "—"}</p>
    </div>
  );
}

function formatPayloadKey(key: string) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
}

function formatPayloadValue(value: unknown) {
  if (value === null || value === undefined) return "—";
  if (typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }
  return String(value);
}

