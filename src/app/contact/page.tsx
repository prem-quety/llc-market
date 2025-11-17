"use client";
import { useState } from "react";

export default function ContactPage() {
  const [state, setState] = useState<{ ok: boolean; msg: string } | null>(null);

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 600));
    setState({
      ok: true,
      msg: "Thanks — we’ll get back to you within one business day.",
    });
  }

  return (
    <section className="container-padded py-20">
      <div className="max-w-xl">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>

        <p className="mt-4 text-neutral-700">
          Tell us about your business. No spam. No pushy sales. Just competent
          humans.
        </p>

        <form action={onSubmit} className="mt-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Full name"
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand w-full"
              required
            />
          </div>

          <input
            name="company"
            placeholder="Company"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand w-full"
          />

          <textarea
            name="message"
            placeholder="What do you need?"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand w-full min-h-[140px]"
          />

          <button className="btn btn-primary">Send message</button>
        </form>

        {state && (
          <div
            className={`mt-6 badge ${
              state.ok
                ? "border-green-300 bg-green-50"
                : "border-red-300 bg-red-50"
            }`}
          >
            {state.msg}
          </div>
        )}
      </div>
    </section>
  );
}
