
"use client";

import { useState } from "react";

export default function SellCarForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess(false);

    const currentYear = new Date().getFullYear();

    if (title.trim().length < 3) {
      setError("Please enter a valid car name.");
      return;
    }

    if (Number(price) <= 0) {
      setError("Please enter a valid price.");
      return;
    }

    if (
      !Number.isInteger(Number(year)) ||
      Number(year) < 1980 ||
      Number(year) > currentYear
    ) {
      setError("Please enter a valid manufacturing year.");
      return;
    }

    if (!/^[0-9+\-\s]{10,15}$/.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setSuccess(true);
    setTitle("");
    setPrice("");
    setYear("");
    setPhone("");
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6">
      <div>
        <label className="label" htmlFor="car-title">Car name and model</label>
        <input
          id="car-title"
          className="field"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Toyota Corolla Altis"
        />
      </div>

      <div>
        <label className="label" htmlFor="car-price">Price (PKR)</label>
        <input
          id="car-price"
          type="number"
          min="1"
          className="field"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Enter price"
        />
      </div>

      <div>
        <label className="label" htmlFor="car-year">Manufacturing year</label>
        <input
          id="car-year"
          type="number"
          className="field"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          placeholder="e.g. 2022"
        />
      </div>

      <div>
        <label className="label" htmlFor="seller-phone">Phone number</label>
        <input
          id="seller-phone"
          className="field"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="03XXXXXXXXX"
        />
      </div>

      {error && (
        <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {success && (
        <p className="rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700">
          Your demo car listing has been submitted successfully!
        </p>
      )}

      <button type="submit" className="primary-button w-full">
        Submit car listing
      </button>

      <p className="text-xs text-slate-500">
        This is a frontend demonstration. Your information is not saved to a database.
      </p>
    </form>
  );
}
