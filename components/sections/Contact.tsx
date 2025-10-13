"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import RevealAnimation from "../animations/RevealAnimation";
  import {  toast } from 'react-toastify';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    toast.info('Thanks for reaching out, will get back to you soon!!')
    setIsSubmitting(true)
    setFormData({name: "",
    email: "",
    message: ""})
  };

  return (
    <section id="contact" className="scroll-mt-16 bg-[var(--brand-surface)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-none border-2 bg-background p-6 md:p-10 lg:p-14">
          <RevealAnimation direction="left" delay={0.2}>
            <div className="text-center">
              <h2 className="text-pretty mt-1 text-3xl font-extrabold tracking-tight md:text-4xl">
                Got a project in mind? Let’s get in touch.
              </h2>
            </div>
          </RevealAnimation>

          <RevealAnimation direction="up" type="scale" delay={0.4}>
            <form onSubmit={handleSubmit} action="https://formsubmit.co/workwithmanojsravan@gmail.com" method="POST" className="mx-auto mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground/70">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border-b bg-transparent py-3 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border-b bg-transparent py-3 outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 h-28 w-full resize-y border-b bg-transparent py-3 outline-none"
                />
              </div>
              <div className="md:col-span-2 text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-[1.25rem] px-6 py-5 text-base font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Let’s Talk!"}
                </Button>
              </div>
            </form>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
