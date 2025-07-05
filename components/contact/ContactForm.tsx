import { ChevronDownIcon } from "@heroicons/react/16/solid";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function Contact({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: () => null;
}) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-text-secondary/65 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-[100dvw] overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="isolate py-30 lg:px-8 transform overflow-hidden rounded-lg bg-text px-8 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-3xl sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            ></div>
            <div className="mx-auto max-w-2xl text-center">
              <DialogTitle className="text-4xl font-semibold tracking-tight text-balance text-text-secondary sm:text-5xl">
                Contact us
              </DialogTitle>
              <p className="mt-4 text-lg/8 text-text-secondary">
                Please send us an email with any questions you have!
              </p>
            </div>
            <form
              action="#"
              method="POST"
              className="mx-auto mt-16 max-w-6xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-text-secondary"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-text px-3.5 py-2 text-base text-text-secondary outline-1 -outline-offset-1 outline-text-secondary/60 placeholder:text-text-secondary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-text-secondary"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-text px-3.5 py-2 text-base text-text-secondary outline-1 -outline-offset-1 outline-text-secondary/60 placeholder:text-text-secondary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm/6 font-semibold text-text-secondary"
                  >
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md bg-text px-3.5 py-2 text-base text-text-secondary outline-1 -outline-offset-1 outline-text-secondary/60 placeholder:text-text-secondary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-text-secondary"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-text px-3.5 py-2 text-base text-text-secondary outline-1 -outline-offset-1 outline-text-secondary/60 placeholder:text-text-secondary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-text-secondary"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <div className="flex rounded-md bg-text outline-1 -outline-offset-1 outline-text-secondary/60 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-accent">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          aria-label="Country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-text-secondary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm/6"
                        >
                          <option>US</option>
                          <option>CA</option>
                          <option>EU</option>
                        </select>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="123-456-7890"
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-text-secondary placeholder:text-text-secondary/50 focus:outline-none sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-text-secondary"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-text px-3.5 py-2 text-base text-text-secondary outline-1 -outline-offset-1 outline-text-secondary/60 placeholder:text-text-secondary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-accent px-3.5 py-2.5 text-center text-sm font-semibold text-text shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Let &#39; s talk
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
