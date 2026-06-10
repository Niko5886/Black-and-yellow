import { HeroSection } from "@/components/HeroSection";
import { NumberedExpertise } from "@/components/NumberedExpertise";
import { CTABand } from "@/components/CTABand";
import { Container } from "@/components/Container";

export default function ItStrategy() {
  return (
    <>
      <HeroSection
        eyebrow="ТРАНСФОРМАЦИЯ И РАСТЕЖ"
        headlineLines={["IT", "STRATEGY", "ROADMAP."]}
        highlightedLineIndex={1}
        paragraph="Трансформираме технологиите в конкурентно предимство. Създаваме устойчиви рамки за мащабиране на вашия бизнес."
        buttonText="Свържете се"
        buttonHref="/contact"
        showScrollChevron
      />

      {/* Нашият подход */}
      <section className="py-24 bg-surface">
        <Container>
          <div className="mb-16">
            <h2 className="text-headline-md md:text-headline-lg text-primary mb-4">
              Нашият подход
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-brand-yellow pl-4">
              Съчетаваме бизнес цели с технологични иновации за устойчив растеж.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow">
              <h3 className="text-headline-sm text-primary mb-3">Анализ</h3>
              <p className="text-body-sm text-on-surface-variant">
                Пълна оценка на текущата ви инфраструктура и идентифициране на пропуските.
              </p>
            </div>

            <div className="bg-brand-yellow rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow">
              <h3 className="text-headline-sm text-brand-charcoal mb-3">Планиране</h3>
              <p className="text-body-sm text-brand-charcoal/80">
                Дефиниране на стратегическа пътна карта с измерими цели и KPI.
              </p>
            </div>

            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow">
              <h3 className="text-headline-sm text-primary mb-3">Изпълнение</h3>
              <p className="text-body-sm text-on-surface-variant">
                Интеграция на най-добрите технологични решения по прозрачен начин.
              </p>
            </div>

            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow">
              <h3 className="text-headline-sm text-primary mb-3">Оптимизация</h3>
              <p className="text-body-sm text-on-surface-variant">
                Непрекъснато усъвършенстване на процесите за максимална ефективност.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quote Band */}
      <section className="py-24 bg-brand-charcoal">
        <Container className="text-center">
          <span className="text-label-caps text-brand-yellow block mb-8">NYMERIX STANDARDS</span>
          <blockquote className="text-headline-md text-white mb-12 max-w-3xl mx-auto">
            "Стратегическото мислене е основата на всяка дигитална трансформация."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-surface-container-high"></div>
            <span className="text-label-caps text-surface-container-high">СТРАТЕГИЧЕСКИ ЕТОС</span>
            <div className="h-[1px] w-12 bg-surface-container-high"></div>
          </div>
        </Container>
      </section>

      <NumberedExpertise
        title="Експертиза в детайли"
        items={[
          {
            number: "01",
            title: "Одит на инфраструктурата",
            description: "Дълбоко проучване на хардуера, софтуера и мрежовите системи за оптимизация на разходите и сигурността."
          },
          {
            number: "02",
            title: "Дигитална пътна карта",
            description: "Проектиране на стъпките за успешно внедряване на иновации през следващите 3–5 години."
          },
          {
            number: "03",
            title: "Технологични консултации",
            description: "Експертни съвети за избор на стек, вендори и методологии за разработка."
          }
        ]}
        imageAlt="Expertise details"
      />

      <CTABand
        title="Готови ли сте за следващата стъпка?"
        description="Нека превърнем вашата технологична визия в реално бизнес предимство."
        buttonText="Свържете се с нас →"
        buttonHref="/contact"
      />
    </>
  );
}
