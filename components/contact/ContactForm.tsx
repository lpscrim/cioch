"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Button from "../Button";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { countryOptions } from "@/lib/countryOptions";

export default function Contact({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleClose = () => {
    setOpen(false);
    setSubmitMessage("");
  };

  const validate = (form: HTMLFormElement): Record<string, string> => {
    const errs: Record<string, string> = {};
    const data = new FormData(form);
    if (!data.get("first-name")?.toString().trim()) errs["first-name"] = "First name is required.";
    if (!data.get("last-name")?.toString().trim()) errs["last-name"] = "Last name is required.";
    const email = data.get("email")?.toString().trim() || "";
    if (!email) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email address.";
    if (!data.get("message")?.toString().trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    const formData = new FormData(form);

    try {
      const formParams = new URLSearchParams();
      formData.forEach((value, key) => {
        if (typeof value === "string") {
          formParams.append(key, value);
        } else if (value instanceof File) {
          formParams.append(key, value.name);
        }
      });

      const response = await fetch("/contact.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formParams.toString(),
      });

      if (response.ok) {
        setSubmitMessage("Thank you! Your message has been sent.");
        form.reset();
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-9999">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-text-secondary/65 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-[100lvw] overflow-y-auto">
        <div style={{ overflowY: 'auto' }} className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="isolate py-30 lg:px-8 transform overflow-hidden rounded-lg bg-text px-8 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-3xl sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="absolute right-10">
              <Button onClick={handleClose}>
                <p className="rounded-md py-1 px-3 bg-text-secondary/30 hover:bg-text-secondary/30 text-text-secondary hover:text-secondary cursor-pointer transition-all">
                  X
                </p>
              </Button>
            </div>

            <div className="mx-auto max-w-2xl text-center">
              <DialogTitle className="text-4xl font-semibold tracking-tight text-balance text-text-secondary sm:text-5xl">
                Contact us
              </DialogTitle>
              <p className="mt-6 text-lg/8 text-text-secondary">
                Please send us an email with any questions you have!
                <br />
                Or call us on <u>01470 572707</u>
                <br />
                All forms sent to <u>info.cioch@gmail.com</u>
              </p>
            </div>

            {submitMessage && (
              <div
                className={`mx-auto mt-4 max-w-2xl text-center p-4 rounded-md ${
                  submitMessage.includes("Thank you")
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitMessage}
              </div>
            )}

            <form
              name="contact-2"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
              className="mx-auto mt-14 max-w-6xl sm:mt-16"
            >
              <input type="hidden" name="form-name" value="contact-2" />
              <input type="hidden" name="form-type" value="Contact" />
              <input type="hidden" name="bot-field" />

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
                      required
                      autoComplete="given-name"
                      disabled={isSubmitting}
                      className="block w-full rounded-md bg-text px-3.5 py-2 text-base text-text-secondary outline-1 -outline-offset-1 outline-text-secondary/60 placeholder:text-text-secondary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent disabled:opacity-50"
                    />
                  </div>
                  {errors["first-name"] && <p className="mt-1 text-sm text-red-600">{errors["first-name"]}</p>}
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
                      required
                      autoComplete="family-name"
                      disabled={isSubmitting}
                      className="block w-full rounded-md bg-text px-3.5 py-2 text-base text-text-secondary outline-1 -outline-offset-1 outline-text-secondary/60 placeholder:text-text-secondary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent disabled:opacity-50"
                    />
                  </div>
                  {errors["last-name"] && <p className="mt-1 text-sm text-red-600">{errors["last-name"]}</p>}
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
                      disabled={isSubmitting}
                      className="block w-full rounded-md bg-text px-3.5 py-2 text-base text-text-secondary outline-1 -outline-offset-1 outline-text-secondary/60 placeholder:text-text-secondary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent disabled:opacity-50"
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
                      required
                      autoComplete="email"
                      disabled={isSubmitting}
                      className="block w-full rounded-md bg-text px-3.5 py-2 text-base text-text-secondary outline-1 -outline-offset-1 outline-text-secondary/60 placeholder:text-text-secondary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent disabled:opacity-50"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
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
                          disabled={isSubmitting}
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-text-secondary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm/6 disabled:opacity-50"
                          defaultValue="UK"
                        >
                          {countryOptions.map((country) => (
                            <option key={country}>{country}</option>
                          ))}
                        </select>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="tel"
                        placeholder="07123456789"
                        disabled={isSubmitting}
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-text-secondary placeholder:text-text-secondary/50 focus:outline-none sm:text-sm/6 disabled:opacity-50"
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
                      rows={3}
                      required
                      disabled={isSubmitting}
                      className="block w-full rounded-md bg-text px-3.5 py-2 text-base text-text-secondary outline-1 -outline-offset-1 outline-text-secondary/60 placeholder:text-text-secondary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent disabled:opacity-50"
                    />
                  </div>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>
              </div>

              <div className="mt-10 items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-50 rounded-md bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-text shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer transition-all ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:brightness-110"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
