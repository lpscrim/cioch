"use client";

import { useState } from "react";
import Contact from "@/components/contact/ContactForm";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-9999">
      <button
        onClick={() => setOpen(true)}
        className=" flex mx-auto rounded-md bg-gray-950/5 px-2.5 py-1.5 text-xl text-text font-bold  hover:bg-gray-950/10"
      >
        Open dialog
      </button>
      <Contact open={open} setOpen={setOpen}/>
    </div>
  );
}
