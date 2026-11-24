
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors: Record<string, string> = {};

    if (name.trim().length < 2) {
      newErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    setSuccess(false);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6">
      <div>
        <label className="label" htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          className="field"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label className="label" htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          type="email"
          className="field"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label className="label" htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          className="field min-h-32"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write your message..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {success && (
        <p className="rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700">
          Your demo message has been submitted successfully!
        </p>
      )}

      <button type="submit" className="primary-button w-full">
        Send message
      </button>
    </form>
  );
}
