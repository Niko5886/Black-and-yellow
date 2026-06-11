import { HeroSection } from "@/components/HeroSection";
import { Container } from "@/components/Container";
import { QuoteBand } from "@/components/QuoteBand";
import { CTABand } from "@/components/CTABand";
import { contactHref } from "@/lib/contact";
import Image from "next/image";

export default function UiUxDesign() {
  return (
    <>
      <HeroSection
        eyebrow="ЕСТЕТИКА И ФУНКЦИОНАЛНОСТ"
        headlineLines={["INTUITIVE", "DESIGN", "SYSTEMS."]}
        highlightedLineIndex={1}
        paragraph="Създаваме дигитални преживявания, които вдъхновяват и ангажират. Нашият UI/UX дизайн трансформира бизнес цели в интуитивни потребителски пътеки."
        buttonText="Свържете се"
        buttonHref={contactHref("Запитване за UI/UX дизайн — Nymerix")}
      />

      {/* Нашият подход */}
      <section className="py-24 bg-surface">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="text-headline-md md:text-headline-lg text-primary">
              Нашият подход
            </h2>
            <p className="text-body-md text-on-surface-variant md:text-right w-full max-w-sm">
              Процесът, който превръща визията в реалност чрез данни и емпатия.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", title: "Проучване", desc: "Дълбоко проучване на пазара, потребителите и бизнес целите за поставяне на стабилна основа." },
              { n: "02", title: "Проектиране", desc: "Архитектура на информацията и скелет на интерфейса за оптимална навигация и поток.", accent: true },
              { n: "03", title: "Прототипиране", desc: "Интерактивни прототипи с високо детайлно, които симулират реалното потребителско изживяване." },
              { n: "04", title: "Тестване", desc: "Валидиране на решенията чрез потребителски тестове и итерации до съвършенство." },
            ].map(({ n, title, desc, accent }) => (
              <div
                key={n}
                className={`rounded-2xl p-8 flex flex-col gap-6 transition-all hover:shadow-[0px_4px_20px_rgba(0,0,0,0.08)] ${
                  accent
                    ? "bg-[#1A1A1A]"
                    : "bg-surface-container-lowest border border-surface-container-high"
                }`}
              >
                <span className={`text-label-caps ${accent ? "text-brand-yellow" : "text-on-surface-variant"}`}>
                  {n}
                </span>
                <div>
                  <h3 className={`text-headline-sm mb-3 ${accent ? "text-white" : "text-primary"}`}>{title}</h3>
                  <p className={`text-body-sm ${accent ? "text-white/60" : "text-on-surface-variant"}`}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Какво предлагаме */}
      <section className="py-24 bg-surface-container-lowest border-t border-surface-container-high">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="text-headline-md md:text-headline-lg text-primary">
              Какво предлагаме
            </h2>
            <p className="text-body-md text-on-surface-variant md:text-right w-full max-w-sm">
              Цялостен дизайн процес от концепция до финален продукт.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Large feature card — col-span-2, row-span-2 */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden min-h-[480px] group cursor-default">
              <Image
                src="/screen2.png"
                alt="Mobile & Web Design"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-[#1A1A1A]/10" />
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <span className="text-label-caps text-brand-yellow">01 — FEATURED</span>
                <div>
                  <h3 className="text-headline-md text-white mb-4">Mobile & Web Design</h3>
                  <p className="text-body-md text-white/70 max-w-md">
                    Адаптивни интерфейси, проектирани за всяко устройство с фокус върху потребителско изживяване.
                  </p>
                </div>
              </div>
            </div>

            {/* Дизайн системи */}
            <div className="bg-[#1A1A1A] rounded-2xl p-8 flex flex-col justify-between min-h-[220px] group hover:ring-1 hover:ring-brand-yellow/50 transition-all">
              <div className="flex items-start justify-between">
                <span className="text-label-caps text-brand-yellow">02</span>
                <svg className="w-6 h-6 text-brand-yellow/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-headline-sm text-white mb-2">Дизайн системи</h3>
                <p className="text-body-sm text-white/55">
                  Мащабируеми библиотеки от компоненти за консистентност на вашия бранд.
                </p>
              </div>
            </div>

            {/* Потребителско проучване */}
            <div className="bg-surface-container rounded-2xl p-8 flex flex-col justify-between min-h-[220px] group hover:shadow-[0px_4px_20px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-start justify-between">
                <span className="text-label-caps text-on-surface-variant">03</span>
                <svg className="w-6 h-6 text-on-surface/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-headline-sm text-primary mb-2">Потребителско проучване</h3>
                <p className="text-body-sm text-on-surface-variant">
                  Интервюта, анкети и анализ на поведението за дизайн, базиран на реални данни.
                </p>
              </div>
            </div>

            {/* Интерактивен дизайн — full-width bottom card */}
            <div className="md:col-span-3 bg-[#1A1A1A] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 group hover:ring-1 hover:ring-brand-yellow/40 transition-all">
              <div className="flex items-center gap-8">
                <span className="text-[72px] font-black text-white/[0.06] leading-none select-none flex-shrink-0">04</span>
                <div>
                  <h3 className="text-headline-sm text-white mb-2">Интерактивен дизайн</h3>
                  <p className="text-body-sm text-white/55 max-w-lg">
                    Микро-взаимодействия и анимации, превръщащи всяко действие в удоволствие. Детайлите, които правят разликата.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center">
                <svg className="w-5 h-5 text-brand-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                </svg>
              </div>
            </div>

          </div>
        </Container>
      </section>

      <QuoteBand
        quote="Прецизност във всеки пиксел. Стратегия във всеки клик."
        attribution="НАШИЯТ ДИЗАЙН ЕТОС"
      />

      <CTABand
        title="Готови ли сте за трансформация?"
        description="Нека превърнем вашите идеи в интуитивен интерфейс, който потребителите ще обичат."
        buttonText="Консултация →"
        buttonHref={contactHref("Безплатна консултация за UI/UX дизайн — Nymerix")}
      />
    </>
  );
}
