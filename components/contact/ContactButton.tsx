"use client";

import React from "react";
import { useState } from "react";
import Contact from "@/components/contact/ContactForm";
import Button from "@/components/Button";

export default function ContactButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-999">
      <Button
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>

      <Contact open={open} setOpen={setOpen} />
    </div>
  );
}
