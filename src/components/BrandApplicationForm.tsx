"use client";
import { useState } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

export default function BrandApplicationForm() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">Brand Application Form</h1>
        <p className="text-base text-gray-600">Apply to become a LaMa Fuel partner. Please fill out all required fields.</p>
      </div>

      <form className="space-y-8">
        <div className="space-y-6 p-6 border border-gray-200 rounded-lg bg-white">
          <h2 className="text-xl font-semibold text-dark border-b pb-3">Applicant & Business Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name *</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone *</label>
              <input type="tel" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email *</label>
            <input type="email" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country/Region *</label>
            <select className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required><option>Choose one</option></select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address *</label>
            <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">City *</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Zip / Postal Code *</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required />
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6 border border-gray-200 rounded-lg bg-white">
          <h2 className="text-xl font-semibold text-dark border-b pb-3">Site, Partnership & Operations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Does dealer own property & business?</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient"><option>Choose one</option></select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Partnership in Site</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient"><option>Choose one</option></select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Operating Agreement in place</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient"><option>Choose one</option></select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Ownership Percentage in Site</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">If leasing site, what is the lease term?</label>
            <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Partner's Name</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Partner's Cell Phones</label>
              <input type="tel" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Partner's Email Address</label>
            <input type="email" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Recommended Brand</label>
            <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Terminal</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Is the Site RFG or Conventional?</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" />
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6 border border-gray-200 rounded-lg bg-white">
          <h2 className="text-xl font-semibold text-dark border-b pb-3">Fuel & Tank Details</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Monthly Gas/DSL Volume *</label>
            <input type="number" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Attach POS Reports to Verify Volume</label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-primary-gradient focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-gradient focus-within:ring-offset-2 hover:text-primary-gradient">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-500">PDF, PNG, JPG up to 10MB</p>
                {fileName && <p className="mt-2 text-sm font-medium text-green-600">Selected: {fileName}</p>}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Tank Sizes (Reg Gas) *</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tank Sizes (Premium Gas) *</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tank Sizes (Diesel) *</label>
            <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Blending</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient"><option>Choose one</option></select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">If No, Midgrade Gas Tank Size</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">If no diesel and a midgrade tank is present, do you want to add Diesel? *</label>
            <select className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required><option>Choose one</option></select>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Automatic Tank Gauging</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Type of ATG</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Replace ATG</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient"><option>Choose one</option></select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">If no ATG present, will one be installed?</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient"><option>Choose one</option></select>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6 border border-gray-200 rounded-lg bg-white">
          <h2 className="text-xl font-semibold text-dark border-b pb-3">Agreement</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Please accept this letter as an initial follow-up to our discussion concerning the possibility of your company entering into a fuel supply agreement with LaMa Fuel. By signing this letter, you are confirming that you will not be breaching any current contracts with other suppliers and are legally able to negotiate and enter into a fuel supply agreement with LaMa Fuel.
          </p>
          <div>
            <label className="block text-sm font-medium text-gray-700">Signature *</label>
            <textarea rows={4} className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required></textarea>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <button type="submit" className="bg-primary-gradient text-white font-semibold px-10 py-3 rounded-md hover:opacity-90 active:scale-95 transition">
            <span>Submit Application</span>
          </button>
        </div>
      </form>
    </div>
  );
}


