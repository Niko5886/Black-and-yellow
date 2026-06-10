import { HeroSection } from "@/components/HeroSection";

export default function About() {
  return (
    <>
      <HeroSection
        eyebrow="ЗА NYMERIX"
        headlineLines={["ОПОЗНАЙТЕ", "НАШАТА", "МИСИЯ."]}
        highlightedLineIndex={1}
        paragraph="Nymerix е технологична консултантска компания, посветена на прецизност, иновации и устойчив растеж. Вярваме, че технологиите трябва да работят за хората, а не обратното."
        buttonText="Свържете се →"
        buttonHref="/contact"
      />

      <section className="py-24 bg-surface">
        <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-gutter)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Value Card 1 — Vision */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface">
                {/* Rocket Icon */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.438 4.438 0 002.946-2.946 4.493 4.493 0 004.306-1.758q-2.65-.636-4.86-2.846-2.21-2.21-2.846-4.86A4.493 4.493 0 004.469 10.8c.613.045 1.221.15 1.816.312a14.903 14.903 0 00-2.42 2.42m2.38 2.38a3 3 0 114.243-4.243m4.242 4.242a3 3 0 114.243-4.243M13 18.5V21h-2v-2.5m-5.5-5.5H3v-2h2.5" />
                </svg>
              </div>
              <h3 className="text-headline-sm text-primary">Нашата визия</h3>
              <p className="text-body-sm text-on-surface-variant">
                Да бъдем предпочитаният технологичен партньор за компании, които искат да изградят дигиталното си бъдеще на здрава основа.
              </p>
            </div>

            {/* Value Card 2 (Yellow) — How we work */}
            <div className="bg-brand-yellow rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-charcoal/10 flex items-center justify-center text-brand-charcoal">
                {/* Handshake Icon */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
              </div>
              <h3 className="text-headline-sm text-brand-charcoal">Как работим</h3>
              <p className="text-body-sm text-brand-charcoal/80">
                Комбинираме стратегическо мислене с техническа експертиза. Всеки проект започва с дълбоко разбиране на бизнес целите.
              </p>
            </div>

            {/* Value Card 3 — Why Nymerix */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface">
                {/* Target Icon */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="text-headline-sm text-primary">Защо Nymerix</h3>
              <p className="text-body-sm text-on-surface-variant">
                Прецизност във всеки пиксел не е просто слоган — това е стандартът, по който измерваме всяко решение и всеки ред код.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
