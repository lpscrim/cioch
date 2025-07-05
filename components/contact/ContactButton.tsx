"use client";

import React from "react";
import { useState } from "react";
import Contact from "@/components/contact/ContactForm";

export default function ContactButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-9999">
      <button
        onClick={() => setOpen(true)}
        className="inline-flex  text-text cursor-pointer hover:text-secondary transition-all"
      >
        {children}
      </button>
      
      <Contact open={open} setOpen={setOpen} />
    </div>
  );
}
