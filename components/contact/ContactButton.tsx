"use client";

import React from "react";
import { useState } from "react";
import Contact from "@/components/contact/ContactForm";
import Button from "@/components/Button";

export default function ContactButton({
  children,
  head,
}: Readonly<{
  children: React.ReactNode;
  head: boolean
}>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-999">
      <Button
        onClick={() => setOpen(true)}
        head={head}
      >
        {children}
      </Button>

      <Contact open={open} setOpen={setOpen} />
    </div>
  );
}
