'use client'

import Image from "next/image";

export default function PerfectFitForm() {
  return (
    <form
      action="https://formspree.io/xgenyyzk"
      method="POST"
      className="max-w-4xl mx-auto space-y-12 bg-white rounded-xl shadow-lg p-8"
    >
      <div className="border-b border-gray-200 pb-12">
        <h1 className="text-2xl font-bold text-gray-800">Perfect Fit Order Form</h1>
        <p className="mt-2 text-base text-gray-700">
          To place an order please fill out the form below, or contact us by phone on{' '}
          <a href="tel:01470572707" className="text-indigo-600 underline">01470 572707</a>.
        </p>
        <p className="mt-1 text-sm text-gray-700">
          Once your order is ready, we will send you an email from our store email address order.cioch@gmail.com
        </p>
        <p className="mt-1 text-sm text-gray-700">
          If you have not heard from us within 5 days, please check your spam folder or otherwise contact us directly.
        </p>
        <p className="mt-1 text-sm text-gray-700">
          Boxes marked (<span className="text-red-600">*</span>) must be completed. Please only submit 1 form per person.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
        {/* Measurements */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Measurements</h2>
          <div className="space-y-4">
            {[
              ["A - Height", "Height"],
              ["B - Arm Length", "Arm length"],
              ["C - Inside Leg", "Inside leg"],
              ["D - Body Rise", "Body rise"],
              ["E - Back Length of Jacket", "Back length of jacket"],
              ["F - Nape to waist", "Nape to waist"],
              ["G - Chest / Bust", "Chest / Bust"],
              ["H - Waist", "Waist"],
              ["I - Seat / Hips", "Seat / Hips"],
              ["J - Collar", "Collar"],
            ].map(([name, label], idx) => (
              <div key={name} className="flex items-center gap-x-3">
                <span className="w-6 text-gray-400 font-semibold">{String.fromCharCode(65 + idx)}</span>
                <label htmlFor={name} className="flex-1 text-sm font-medium text-gray-800">
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  type="text"
                  className="block w-40 rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            ))}
          </div>
          <Image
            src="/outlinepeople.gif"
            alt="How to take measurements"
            className="mt-6 rounded-md border border-gray-200"
            width={312}
            height={218}
          />
        </div>

        {/* Order & Details */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Order</h2>
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <span className="font-medium text-sm text-gray-700">Products/Colours</span>
              <span className="font-medium text-sm text-gray-700">No.</span>
            </div>
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="grid grid-cols-2 gap-2">
                <input
                  id={`Product${n}`}
                  name={`Product${n}`}
                  type="text"
                  placeholder="Product/Colour"
                  className="rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                />
                <input
                  id={`Quantity${n}`}
                  name={`Quantity${n}`}
                  type="text"
                  placeholder="Qty"
                  className="rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            ))}
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Your Details</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-x-3">
              <label htmlFor="Title" className="w-32 text-sm font-medium text-gray-800">
                Title
              </label>
              <select
                id="Title"
                name="Title"
                className="rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              >
                <option></option>
                <option>Mr</option>
                <option>Miss</option>
                <option>Ms</option>
                <option>Mrs</option>
              </select>
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="realname" className="w-32 text-sm font-medium text-gray-800">
                Name<span className="text-red-600">*</span>
              </label>
              <input
                id="realname"
                name="realname"
                type="text"
                required
                className="flex-1 rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Address1" className="w-32 text-sm font-medium text-gray-800">
                Address 1<span className="text-red-600">*</span>
              </label>
              <input
                id="Address1"
                name="Address1"
                type="text"
                required
                className="flex-1 rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Address2" className="w-32 text-sm font-medium text-gray-800">
                Address 2
              </label>
              <input
                id="Address2"
                name="Address2"
                type="text"
                className="flex-1 rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Town/City" className="w-32 text-sm font-medium text-gray-800">
                Town/City<span className="text-red-600">*</span>
              </label>
              <input
                id="Town/City"
                name="Town/City"
                type="text"
                required
                className="flex-1 rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Area/State" className="w-32 text-sm font-medium text-gray-800">
                Area/State
              </label>
              <input
                id="Area/State"
                name="Area/State"
                type="text"
                className="flex-1 rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Postcode" className="w-32 text-sm font-medium text-gray-800">
                Postcode/Zip<span className="text-red-600">*</span>
              </label>
              <input
                id="Postcode"
                name="Postcode"
                type="text"
                required
                className="flex-1 rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Country" className="w-32 text-sm font-medium text-gray-800">
                Country<span className="text-red-600">*</span>
              </label>
              <select
                id="Country"
                name="Country"
                required
                className="flex-1 rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                defaultValue="United Kingdom"
              >
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="email" className="w-32 text-sm font-medium text-gray-800">
                E-mail<span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="flex-1 rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Telephone" className="w-32 text-sm font-medium text-gray-800">
                Telephone
              </label>
              <input
                id="Telephone"
                name="Telephone"
                type="text"
                className="flex-1 rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-end gap-x-6">
        <button type="reset" className="text-sm font-semibold text-gray-700 hover:text-indigo-600">
          Reset
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
    </form>
  );
}