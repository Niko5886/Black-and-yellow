import { HeroSection } from "@/components/HeroSection";
import { Container } from "@/components/Container";
import { CONTACT_EMAIL, contactHref, contactMailto } from "@/lib/contact";

export default function About() {
  return (
    <>
      <HeroSection
        eyebrow="ЗА NYMERIX"
        headlineLines={["ОПОЗНАЙТЕ", "НАШАТА", "МИСИЯ."]}
        highlightedLineIndex={1}
        paragraph="Nymerix е технологична консултантска компания, посветена на прецизност, иновации и устойчив растеж. Вярваме, че технологиите трябва да работят за хората, а не обратното."
        buttonText="Свържете се →"
        buttonHref={contactHref("Запитване от уебсайта на Nymerix")}
      />

      <section className="py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 — Phone & Address */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface">
                {/* Location Pin Icon */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <h3 className="text-headline-sm text-primary">Телефон &amp; адрес</h3>
              <div className="text-body-sm text-on-surface-variant flex flex-col gap-1">
                <a href="tel:+359988855911" className="hover:text-brand-yellow transition-colors">
                  +359 98 885 5911
                </a>
                <span>Адрес: пл. Свобода 7, офис 38</span>
                <span>Град Русе</span>
              </div>
            </div>

            {/* Card 2 (Yellow) — Email */}
            <div className="bg-brand-yellow rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-charcoal/10 flex items-center justify-center text-brand-charcoal">
                {/* Envelope Icon */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-headline-sm text-brand-charcoal">Email</h3>
              <a
                href={contactMailto("Запитване от уебсайта на Nymerix")}
                className="text-body-sm text-brand-charcoal/80 hover:text-brand-charcoal transition-colors break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Card 3 — Tagline */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface">
                {/* Sparkles Icon */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="text-headline-sm text-primary">
                Вашите идеи. Нашата експертиза. Общият ни успех.
              </h3>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
