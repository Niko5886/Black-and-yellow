import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT_EMAIL, contactMailto } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Контакт | Nymerix",
  description:
    "Свържете се с екипа на Nymerix. Изпратете запитване за проект, консултация или партньорство — ще се свържем с Вас възможно най-скоро.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string }>;
}) {
  const { subject } = await searchParams;

  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Лява колона — въведение */}
          <div className="flex flex-col gap-6">
            <span className="text-label-caps text-on-surface-variant before:mr-4 before:inline-block before:h-[2px] before:w-8 before:align-middle before:bg-brand-yellow before:content-['']">
              СВЪРЖЕТЕ СЕ С НАС
            </span>
            <h1 className="text-headline-lg text-on-surface">
              Да изградим нещо{" "}
              <span className="text-brand-yellow">забележително</span> заедно.
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-md">
              Имате проект, идея или въпрос? Попълнете формата и нашият екип ще
              се свърже с Вас възможно най-скоро.
            </p>

            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-container">
                  <svg
                    width={20}
                    height={20}
                    className="text-on-surface"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-caps text-on-surface-variant">
                    Имейл
                  </span>
                  <a
                    href={contactMailto("Запитване от уебсайта на Nymerix")}
                    className="text-body-md text-on-surface transition-colors hover:text-brand-yellow"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Дясна колона — форма */}
          <div className="rounded-3xl border border-surface-container-high bg-surface-container-low p-6 md:p-10">
            <ContactForm defaultSubject={subject ?? ""} />
          </div>
        </div>
      </Container>
    </section>
  );
}
