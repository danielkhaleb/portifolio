"use client";

import { useState } from "react";
import { isValidEmail } from "@/lib/validateEmail";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [emailError, setEmailError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEmailError("");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact">
      <div className="contact-inner">
        <div>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let&apos;s work together</h2>
          <p className="section-subtitle">
            Open to new roles, interesting projects, and good conversations. Based in Porto —
            available remotely worldwide.
          </p>
          <div className="contact-links">
            <a href="mailto:daniel.khaleb@gmail.com" className="contact-link">
              <span className="contact-icon">✉</span>
              daniel.khaleb@gmail.com
            </a>
            <a href="tel:+351910524245" className="contact-link">
              <span className="contact-icon">✆</span>
              +351 910 524 245
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-khaleb-batista-1b238597/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">◈</span>
              linkedin.com/in/daniel-khaleb-batista
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Email address" required />
          {emailError && <p className="form-error">{emailError}</p>}
          <textarea name="message" placeholder="Tell me about your project or opportunity..." />

          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending…" : "Send Message ✦"}
          </button>

          {status === "success" && (
            <p className="form-success">Message sent! I&apos;ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="form-error">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
