"use client";

import type { Dictionary } from "@/i18n/server";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const nameEl = form.elements.namedItem("name") as HTMLInputElement;
    const phoneEl = form.elements.namedItem("phone") as HTMLInputElement;
    const msgEl = form.elements.namedItem("message") as HTMLTextAreaElement;
    const message = `*${dict.contact.title}*\n\n*${dict.contact.form.name}:* ${nameEl.value}\n*${dict.contact.form.phone}:* ${phoneEl.value}\n*${dict.contact.form.message}:* ${msgEl.value}`;
    window.open(
      `https://wa.me/972500000000?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {dict.contact.form.name}
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {dict.contact.form.phone}
        </label>
        <input
          type="tel"
          name="phone"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {dict.contact.form.message}
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none"
        ></textarea>
      </div>
      <button type="submit" className="btn-whatsapp w-full">
        {dict.contact.form.submit}
      </button>
    </form>
  );
}
