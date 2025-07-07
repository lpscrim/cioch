'use client'

export default function OffThePegForm() {
  const sizeOptions = [
    "Select from list:",
    "Gents S", "Gents M", "Gents L", "Gents XL", "Gents XXL",
    "----------",
    "Ladies 8", "Ladies 10", "Ladies 12", "Ladies 14", "Ladies 16", "Ladies 18", "Ladies 20", "Ladies 22", "Ladies 24", "Ladies 26",
    "----------",
    "Kids 3 Months", "Kids 6 Months", "Kids 12 Months", "Kids 18 Months", "Kids 3-4 Years", "Kids 5-6 Years", "Kids 7-8 Years", "Kids 9-10 Years", "Kids 10-12 Years"
  ];

  const countryOptions = [
    "Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia/Herzegovina","Botswana","Bouvet Island","Brazil","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Ivory Coast","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea (North)","Korea (South)","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Neutral Zone","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent","Samoa","San Marino","Saudi Arabia","Serbia & Montenegro","Senegal","Seychelles","Sierra Leone","Singapore","Slovak Republic","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","St. Helena","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","USSR (former)","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City State","Venezuela","Vietnam","Virgin Islands (UK)","Virgin Islands (US)","Western Sahara","Yemen","Zaire","Zambia","Zimbabwe","Other"
  ];

  return (
    <form
      action="https://formspree.io/xyynjjpy"
      method="POST"
      className="max-w-4xl mx-auto space-y-12 bg-text rounded-xl shadow-lg p-8"
    >
      <div className="border-b border-text pb-12">
        <h1 className="text-2xl font-bold text-secondary">Off the Peg Order Form</h1>
        <p className="mt-4 text-base text-text-secondary/80">
          To place an order please fill out the form below, or contact us by phone on{' '}
          <a href="tel:01470572707" className="text-secondary underline hover:text-accent">01470 572707</a>.
        </p>
        <p className="mt-1 text-sm text-text-secondary/80">
          Once your order is ready, we will send you an email from our store email address order.cioch@gmail.com
        </p>
        <p className="mt-1 text-sm text-text-secondary/80">
          If you have not heard from us within 5 days, please check your spam folder or otherwise contact us directly.
        </p>
        <p className="mt-1 text-sm text-text-secondary/80">
          Boxes marked (<span className="text-red-600">*</span>) must be completed.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
        {/* Order */}
        <div>
          <h2 className="text-lg font-semibold text-text-secondary mb-4">Your Order</h2>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <span className="font-medium text-sm text-text-secondary/80">Products/Colours</span>
              <span className="font-medium text-sm text-text-secondary/80">No.</span>
              <span className="font-medium text-sm text-text-secondary/80">Size</span>
            </div>
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="grid grid-cols-3 gap-2">
                <input
                  id={`Product${n}`}
                  name={`Product${n}`}
                  type="text"
                  placeholder="Product/Colour"
                  className="rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
                />
                <input
                  id={`Quantity${n}`}
                  name={`Quantity${n}`}
                  type="text"
                  placeholder="Qty"
                  className="rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
                />
                <select
                  id={`Size${n}`}
                  name={`Size${n}`}
                  className="rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
                  defaultValue={sizeOptions[0]}
                >
                  {sizeOptions.map((option, i) =>
                    option === "----------" ? (
                      <option key={option + i} disabled>──────────</option>
                    ) : (
                      <option key={option + i}>{option}</option>
                    )
                  )}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <h2 className="text-lg font-semibold text-text-secondary mb-4">Your Details</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-x-3">
              <label htmlFor="title" className="w-32 text-sm font-medium text-text-secondary">
                Title
              </label>
              <select
                id="title"
                name="title"
                className="rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
              >
                <option></option>
                <option>Mr</option>
                <option>Miss</option>
                <option>Ms</option>
                <option>Mrs</option>
              </select>
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="realname" className="w-32 text-sm font-medium text-text-secondary">
                Name<span className="text-red-600">*</span>
              </label>
              <input
                id="realname"
                name="realname"
                type="text"
                required
                className="flex-1 rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Address1" className="w-32 text-sm font-medium text-text-secondary">
                Address 1<span className="text-red-600">*</span>
              </label>
              <input
                id="Address1"
                name="Address1"
                type="text"
                required
                className="flex-1 rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Address2" className="w-32 text-sm font-medium text-text-secondary">
                Address 2
              </label>
              <input
                id="Address2"
                name="Address2"
                type="text"
                className="flex-1 rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Town/City" className="w-32 text-sm font-medium text-text-secondary">
                Town/City<span className="text-red-600">*</span>
              </label>
              <input
                id="Town/City"
                name="Town/City"
                type="text"
                required
                className="flex-1 rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Area/State" className="w-32 text-sm font-medium text-text-secondary">
                Area/State
              </label>
              <input
                id="Area/State"
                name="Area/State"
                type="text"
                className="flex-1 rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Postcode" className="w-32 text-sm font-medium text-text-secondary">
                Postcode/Zip<span className="text-red-600">*</span>
              </label>
              <input
                id="Postcode"
                name="Postcode"
                type="text"
                required
                className="flex-1 rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Country" className="w-32 text-sm font-medium text-text-secondary">
                Country<span className="text-red-600">*</span>
              </label>
              <select
                id="Country"
                name="Country"
                required
                className="flex-1 rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
                defaultValue="United Kingdom"
              >
                {countryOptions.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="email" className="w-32 text-sm font-medium text-text-secondary">
                E-mail<span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="flex-1 rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="Telephone" className="w-32 text-sm font-medium text-text-secondary">
                Telephone
              </label>
              <input
                id="Telephone"
                name="Telephone"
                type="text"
                className="flex-1 rounded-md bg-foreground/80 px-3 py-1.5 text-base text-text-secondary border border-text focus:border-secondary focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-end gap-x-6">
        <button type="reset" className="text-sm font-semibold text-text-secondary/80 hover:text-accent">
          Reset
        </button>
        <button
          type="submit"
          className="cursor-pointer rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-text shadow-xs hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Send
        </button>
      </div>
    </form>
  );
}