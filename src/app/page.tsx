import { HeroSection } from "@/components/HeroSection";
import { Container } from "@/components/Container";
import { QuoteBand } from "@/components/QuoteBand";
import { CTABand } from "@/components/CTABand";
import { contactHref } from "@/lib/contact";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection
        eyebrow="ПРЕЦИЗНОСТ В ДЕТАЙЛИТЕ"
        headlineLines={["BUILDING", "BEYOND", "LIMITS."]}
        highlightedLineIndex={1}
        paragraph="Ние сме Nymerix – технологична консултантска компания, която превръща сложните предизвикателства в безпроблемни дигитални решения за модерни предприятия."
        buttonText="Започнете проект →"
        buttonHref={contactHref("Започване на нов проект с Nymerix")}
        showScrollChevron
      />

      {/* Нашите Експертизи */}
      <section className="py-24 bg-surface">
        <Container>
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="text-headline-lg text-on-surface max-w-md">
              Нашите Експертизи.
            </h2>
            <p className="text-body-md text-on-surface-variant w-full max-w-sm md:text-right">
              Стратегически подход към всяка линия код и всяко бизнес решение.
            </p>
          </div>

          {/* Bento Grid - 2 rows with asymmetric columns */}
          <div className="grid gap-6">
            {/* Row 1: 60/40 split */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
              {/* Card 1 - Корпоративен Софтуер */}
              <div className="group rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.12)] relative overflow-hidden min-h-[280px]">
                {/* Background image */}
                <Image
                  src="/screen2.png"
                  alt="Корпоративен Софтуер background"
                  fill
                  className="object-cover object-center"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-[#1A1A1A]/60 group-hover:bg-[#1A1A1A]/50 transition-colors"></div>
                {/* Yellow top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#FACC15] opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                {/* Content */}
                <div className="relative z-10 w-10 h-10 text-white mb-4">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-headline-sm text-white mb-3">Корпоративен Софтуер</h3>
                  <p className="text-body-sm text-white/80">
                    Мащабируеми системи, проектирани да растат с вашия бизнес. Използваме най-модерните технологии за гарантирана стабилност.
                  </p>
                </div>
              </div>

              {/* Card 2 - IT Стратегия */}
              <div className="group bg-[#1A1A1A] text-white rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.04)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#FACC15] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <div className="w-10 h-10 text-[#FACC15] mb-4">
                    {/* Chart icon */}
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 12c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h2.25C13.496 21 14 20.496 14 19.875v-6.75c0-.621-.504-1.125-1.125-1.125h-2.25zm5.25-1.125c-.621 0-1.125.504-1.125 1.125v8.25c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V12c0-.621-.504-1.125-1.125-1.125h-2.25z" />
                    </svg>
                  </div>
                  <div className="text-headline-lg font-bold text-[#FACC15] mb-4">02</div>
                  <h3 className="text-headline-sm text-white mb-3">IT Стратегия</h3>
                  <p className="text-body-sm text-white/70">
                    Консултации на високо ниво за дигитална трансформация и оптимизация на процесите.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: 30/70 split */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6">
              {/* Card 3 - UI/UX Дизайн */}
              <div className="group bg-[#FACC15] text-[#1A1A1A] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.04)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <div className="w-10 h-10 text-[#1A1A1A] mb-4">
                    {/* Crosshairs icon */}
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m9-9H3" />
                    </svg>
                  </div>
                  <h3 className="text-headline-sm text-[#1A1A1A] mb-3">UI/UX Дизайн</h3>
                  <p className="text-body-sm text-[#1A1A1A]/90">
                    Фокусирани върху потребителски интерфейси, които съчетават естетика с функционалност за максимално ангажиране.
                  </p>
                </div>
              </div>

              {/* Card 4 - Облачни Решения */}
              <div className="group bg-white border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row transition-all duration-300 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.04)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#FACC15] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex-1 flex flex-col justify-center pr-6">
                  <h3 className="text-headline-sm text-on-surface mb-3">Облачни Решения</h3>
                  <p className="text-body-sm text-on-surface-variant">
                    Миграция и управление на облачна инфраструктура за глобална достъпност и сигурност.
                  </p>
                </div>
                <div className="flex-1 relative h-48 md:h-auto">
                  <Image
                    src="/img.png"
                    alt="Cloud infrastructure"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <QuoteBand
        quote="Технологиите не са просто инструмент, а са езикът на бъдещето. Ние ви помагаме да говорите този език свободно."
        attribution="ЕКИПЪТ НА NYMERIX"
      />

      <CTABand
        title="Готови ли сте за следващата стъпка?"
        description="Свържете се с нас днес за безплатна консултация и открийте как Nymerix може да ускори вашия дигитален растеж."
        buttonText="Свържете се с нас"
        buttonHref={contactHref("Безплатна консултация с Nymerix")}
      />
    </>
  );
}
