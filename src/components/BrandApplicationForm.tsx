"use client";

import { useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

type SubmitState = "idle" | "success" | "error";

export default function BrandApplicationForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState("idle");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload: Record<string, unknown> = {};
    formData.forEach((value, key) => {
      if (value instanceof File) {
        if (value.name) {
          payload[key] = value.name;
        }
      } else {
        payload[key] = value;
      }
    });

    const fullName = (formData.get("applicantName") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();

    if (!fullName || !email) {
      setErrorMessage("Please complete the required fields before submitting.");
      setSubmitState("error");
      setIsSubmitting(false);
      return;
    }

    const city = (formData.get("city") as string)?.trim();
    const monthlyVolume = (formData.get("monthlyVolume") as string)?.trim();

    const summaryParts = [];
    if (city) summaryParts.push(`City: ${city}`);
    if (monthlyVolume) summaryParts.push(`Volume: ${monthlyVolume}`);
    const message = summaryParts.length ? summaryParts.join(" • ") : "Brand application submission";

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone: (formData.get("phone") as string) || "",
          company: (formData.get("company") as string) || "",
          formType: "brand_application",
          message,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : undefined,
          payload,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        const errorMessage = errorBody.error || errorBody.message || "Something went wrong. Please try again.";
        const errorHint = errorBody.hint ? ` ${errorBody.hint}` : "";
        const errorDetails = errorBody.details ? ` Details: ${errorBody.details}` : "";
        const fullError = errorBody.fullError ? `\n\nFull error: ${errorBody.fullError}` : "";
        throw new Error(errorMessage + errorHint + errorDetails + fullError);
      }

      setSubmitState("success");
      form.reset();
      setFileName(null);
    } catch (error) {
      console.error("Brand application submission failed", error);
      setSubmitState("error");
      setErrorMessage((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] leading-none text-[#101828] mb-4 animate-rise-text">Brand Application Form</h1>
        <p className="text-lg md:text-xl text-gray-600">Apply to become a LaMa Fuel partner. Please fill out all required fields.</p>
      </div>

      {submitState === "success" && (
        <div className="mb-6 rounded-md border border-green-200 bg-green-50 px-5 py-4 text-base text-green-800">
          Thank you! Your application has been submitted. Our team will reach out shortly.
        </div>
      )}
      {submitState === "error" && (
        <div className="mb-6 rounded-md border border-red-200 bg-red-50 px-5 py-4 text-base text-red-800">
          {errorMessage || "We couldn't submit your form. Please try again."}
        </div>
      )}

      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="space-y-6 p-8 md:p-10 border border-gray-200 rounded-lg bg-white">
          <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-wider text-[#101828] border-b pb-4">Applicant & Business Information</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Name *</label>
              <input name="applicantName" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required />
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Phone *</label>
              <input name="phone" type="tel" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required />
            </div>
          </div>
          <div>
            <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Company Name</label>
            <input name="company" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" />
          </div>
          <div>
            <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Email *</label>
            <input name="email" type="email" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required />
          </div>
          <div>
            <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Country/Region *</label>
            <select name="country" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option value="united_states">United States</option>
              <option value="canada">Canada</option>
              <option value="mexico">Mexico</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Address *</label>
            <input name="address" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required />
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">City *</label>
              <input name="city" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required />
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Zip / Postal Code *</label>
              <input name="postalCode" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required />
            </div>
          </div>
        </div>

        <div className="space-y-6 p-8 md:p-10 border border-gray-200 rounded-lg bg-white">
          <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-wider text-[#101828] border-b pb-4">Site, Partnership & Operations</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Does dealer own property & business?</label>
              <select name="ownsProperty" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" defaultValue="">
                <option value="">Choose one</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Business Partnership in Site</label>
              <select name="partnershipInSite" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" defaultValue="">
                <option value="">Choose one</option>
                <option value="sole_proprietor">Sole Proprietor</option>
                <option value="llc">LLC</option>
                <option value="corporation">Corporation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Operating Agreement in place</label>
              <select name="operatingAgreement" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" defaultValue="">
                <option value="">Choose one</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Ownership Percentage in Site</label>
              <input name="ownershipPercentage" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" />
            </div>
          </div>
          <div>
            <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">If leasing site, what is the lease term?</label>
            <input name="leaseTerm" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Partner's Name</label>
              <input name="partnerName" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" />
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Partner's Cell Phone</label>
              <input name="partnerPhone" type="tel" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" />
            </div>
          </div>
          <div>
            <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Partner's Email Address</label>
            <input name="partnerEmail" type="email" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" />
          </div>
          <div>
            <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Recommended Brand</label>
            <input name="recommendedBrand" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Terminal</label>
              <input name="terminal" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" />
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Is the Site RFG or Conventional?</label>
              <select name="siteFuelType" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" defaultValue="">
                <option value="">Choose one</option>
                <option value="rfg">RFG</option>
                <option value="conventional">Conventional</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-8 md:p-10 border border-gray-200 rounded-lg bg-white">
          <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-wider text-[#101828] border-b pb-4">Fuel & Tank Details</h2>
          <div>
            <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Current Monthly Gas/DSL Volume *</label>
            <input name="monthlyVolume" type="number" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required />
          </div>
          <div>
            <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Attach POS Reports to Verify Volume</label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-12">
              <div className="text-center">
                <ArrowUpTrayIcon className="mx-auto h-14 w-14 text-gray-400" aria-hidden="true" />
                <div className="mt-4 flex text-base leading-6 text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-primary-gradient focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-gradient focus-within:ring-offset-2 hover:text-primary-gradient">
                    <span>Upload a file</span>
                    <input id="file-upload" name="volumeAttachment" type="file" className="sr-only" onChange={handleFileChange} />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-sm leading-5 text-gray-500 mt-2">PDF, PNG, JPG up to 10MB</p>
                {fileName && <p className="mt-2 text-base font-medium text-green-600">Selected: {fileName}</p>}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Tank Sizes (Reg Gas) *</label>
              <input name="tankReg" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required />
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Tank Sizes (Premium Gas) *</label>
              <input name="tankPremium" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required />
            </div>
          </div>
          <div>
            <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Tank Sizes (Diesel) *</label>
            <input name="tankDiesel" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required />
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Blending</label>
              <select name="blending" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" defaultValue="">
                <option value="">Choose one</option>
                <option value="blended">Blended</option>
                <option value="unblended">Unblended</option>
              </select>
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">If No, Midgrade Gas Tank Size</label>
              <input name="midgradeTankSize" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" />
            </div>
          </div>
          <div>
            <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">If no diesel and a midgrade tank is present, do you want to add Diesel? *</label>
            <select name="addDiesel" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required defaultValue="">
              <option value="">Choose one</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Automatic Tank Gauging</label>
              <input name="automaticTankGauging" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" />
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Type of ATG</label>
              <input name="atgType" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" />
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Replace ATG</label>
              <select name="replaceAtg" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" defaultValue="">
                <option value="">Choose one</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">If no ATG present, will one be installed?</label>
              <select name="installAtg" className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" defaultValue="">
                <option value="">Choose one</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-8 md:p-10 border border-gray-200 rounded-lg bg-white">
          <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-wider text-[#101828] border-b pb-4">Agreement</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Please accept this letter as an initial follow-up to our discussion concerning the possibility of your company entering into a fuel supply agreement with LaMa Fuel. By signing this letter, you are confirming that you will not be breaching any current contracts with other suppliers and are legally able to negotiate and enter into a fuel supply agreement with LaMa Fuel.
          </p>
          <div>
            <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">Signature *</label>
            <textarea name="signature" rows={4} className="mt-1 w-full border border-gray-300 rounded-md px-5 py-4 text-base focus:outline-none focus:border-primary-gradient" required></textarea>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary-gradient text-white font-semibold px-12 py-4 text-lg rounded-md hover:opacity-90 active:scale-95 transition disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span>{isSubmitting ? "Submitting..." : "Submit Application"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
