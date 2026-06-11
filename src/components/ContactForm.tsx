"use client";

import { useState } from "react";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-surface-container-high bg-surface-container-lowest px-4 py-3 text-body-md text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/60 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/30";

export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Nymerix уебсайт");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Възникна грешка. Опитайте отново.");
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Неуспешно изпращане. Проверете връзката си с интернет и опитайте отново."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-surface-container-high bg-surface-container-lowest p-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-yellow">
          <svg
            width={28}
            height={28}
            className="text-brand-charcoal"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-headline-sm text-on-surface mb-2">
          Благодарим Ви!
        </h3>
        <p className="text-body-md text-on-surface-variant mb-6">
          Съобщението Ви беше изпратено успешно. Ще се свържем с Вас възможно
          най-скоро.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="inline-flex items-center justify-center rounded-full bg-brand-charcoal px-6 py-3 text-label-bold text-white transition-all hover:bg-brand-charcoal/90 active:scale-98"
        >
          Изпрати ново съобщение
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot за защита от спам ботове — скрито от реални потребители */}
      <input
        type="checkbox"
        name="botcheck"
        aria-hidden="true"
        title="Leave this field empty"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-label-bold text-on-surface">
            Име <span className="text-brand-yellow">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Вашето име"
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-label-bold text-on-surface">
            Имейл <span className="text-brand-yellow">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-label-bold text-on-surface">
          Тема
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          defaultValue={defaultSubject}
          placeholder="Относно какво се отнася запитването?"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-label-bold text-on-surface">
          Съобщение <span className="text-brand-yellow">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Разкажете ни накратко за Вашия проект или въпрос..."
          className={`${inputClasses} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-body-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-brand-charcoal px-8 py-4 text-label-bold text-white transition-all hover:bg-brand-charcoal/90 active:scale-98 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Изпращане..." : "Изпрати съобщение"}
      </button>

      <p className="text-body-sm text-on-surface-variant">
        Можете да ни пишете и директно на{" "}
        <span className="font-semibold text-on-surface">nymerix.ltd@gmail.com</span>
      </p>
    </form>
  );
}
