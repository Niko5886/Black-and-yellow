import { HeroSection } from "@/components/HeroSection";
import { NumberedExpertise } from "@/components/NumberedExpertise";
import { CTABand } from "@/components/CTABand";
import { Container } from "@/components/Container";
import Image from "next/image";

export default function CloudSolutions() {
  return (
    <>
      <HeroSection
        eyebrow="МАЩАБИРУЕМОСТ И СИГУРНОСТ"
        headlineLines={["CLOUD", "ARCHITECTURE", "SOLUTIONS."]}
        highlightedLineIndex={1}
        paragraph="Инфраструктура за бъдещето. Проектираме облачни екосистеми, които растат заедно с вашия бизнес, осигурявайки надеждност без компромиси."
        buttonText="Свържете се"
        buttonHref="/contact"
      />

      {/* Нашият подход */}
      <section className="py-24 bg-surface">
        <Container>
          <div className="mb-16">
            <h2 className="text-headline-md md:text-headline-lg text-primary mb-4">
              Нашият подход
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-brand-yellow pl-4">
              Стратегическо планиране и внедряване за максимална ефективност.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow">
              <h3 className="text-headline-sm text-primary mb-3">Оценка</h3>
              <p className="text-body-sm text-on-surface-variant">
                Детайлен анализ на съществуващата инфраструктура и бизнес нужди.
              </p>
            </div>

            <div className="bg-brand-yellow rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow">
              <h3 className="text-headline-sm text-brand-charcoal mb-3">Миграция</h3>
              <p className="text-body-sm text-brand-charcoal/80">
                Безпроблемно прехвърляне на данни и приложения с минимален престой.
              </p>
            </div>

            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow">
              <h3 className="text-headline-sm text-primary mb-3">Сигурност</h3>
              <p className="text-body-sm text-on-surface-variant">
                Внедряване на многослойни протоколи за защита и криптиране.
              </p>
            </div>

            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow">
              <h3 className="text-headline-sm text-primary mb-3">Скалируемост</h3>
              <p className="text-body-sm text-on-surface-variant">
                Автоматизирано управление на ресурсите за оптимална производителност.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quote Band */}
      <section className="py-24 bg-brand-charcoal">
        <Container className="text-center">
          <span className="text-label-caps text-brand-yellow block mb-8">СТАНДАРТИ НА NYMERIX</span>
          <blockquote className="text-headline-md text-white mb-12 max-w-3xl mx-auto">
            "Облачните технологии са в основата на модерната мащабируемост."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-surface-container-high"></div>
            <span className="text-label-caps text-surface-container-high">ОБЛАЧЕН ЕТОС</span>
            <div className="h-[1px] w-12 bg-surface-container-high"></div>
          </div>
        </Container>
      </section>

      <NumberedExpertise
        title="Техническа експертиза"
        items={[
          {
            number: "01",
            title: "Хибриден облак",
            description: "Оптимален баланс между локални сървъри и публични облачни услуги за гъвкавост."
          },
          {
            number: "02",
            title: "Serverless архитектури",
            description: "Намаляване на оперативните разходи и фокус върху разработването на код, не управление на сървъри."
          },
          {
            number: "03",
            title: "Сигурност на данните",
            description: "Съответствие с GDPR и индустриални стандарти за защита на корпоративната информация."
          }
        ]}
        imageAlt="Cloud Technical Expertise"
      />

      {/* MICROSOFT 365 КОНСУЛТАЦИИ */}
      <section className="py-24 bg-surface border-t border-surface-container-high">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="text-headline-md md:text-headline-lg text-primary mb-4">
              MICROSOFT 365 КОНСУЛТАЦИИ
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Оптимизирайте работните процеси с водещата екосистема за продуктивност.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:border-brand-yellow transition-colors">
              <h3 className="text-headline-sm text-primary mb-3">Миграция</h3>
              <p className="text-body-sm text-on-surface-variant">
                Плавен преход към Microsoft 365 от всякакви legacy платформи.
              </p>
            </div>

            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:border-brand-yellow transition-colors">
              <h3 className="text-headline-sm text-primary mb-3">Teams & Collab</h3>
              <p className="text-body-sm text-on-surface-variant">
                Конфигуриране на среда за безпроблемна екипна работа.
              </p>
            </div>

            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:border-brand-yellow transition-colors">
              <h3 className="text-headline-sm text-primary mb-3">Сигурност</h3>
              <p className="text-body-sm text-on-surface-variant">
                Защита на данните с Defender, Intune и Advanced Threat Protection.
              </p>
            </div>

            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:border-brand-yellow transition-colors">
              <h3 className="text-headline-sm text-primary mb-3">Одит</h3>
              <p className="text-body-sm text-on-surface-variant">
                Редовни прегледи на лицензи и политики за сигурност.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* MICROSOFT COPILOT */}
      <section className="py-24 bg-surface-container-lowest border-t border-surface-container-high">
        <Container>
          <div className="mb-16">
            <h2 className="text-headline-md md:text-headline-lg text-primary max-w-2xl">
              MICROSOFT COPILOT: БЪДЕЩЕТО НА ЕФЕКТИВНОСТТА
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left Column */}
            <div className="w-full lg:w-1/2 flex flex-col gap-12">

              {/* Yellow Stat Card */}
              <div className="bg-brand-yellow rounded-xl p-8 flex flex-col items-start gap-6 shadow-[var(--shadow-level-2)]">
                <div className="text-[64px] font-black text-brand-charcoal leading-none -tracking-widest">
                  +40%
                </div>
                <p className="text-headline-sm text-brand-charcoal">
                  По-висока продуктивност за вашите служители чрез AI интеграция
                </p>
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-brand-charcoal text-white rounded-full text-label-bold transition-all hover:bg-brand-charcoal/90 active:scale-98">
                  Започнете AI Transform
                </a>
              </div>

              {/* Numbered List */}
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="text-brand-yellow text-headline-sm font-bold mt-1">01</div>
                  <div>
                    <h3 className="text-headline-sm text-primary mb-2">AI Обучение</h3>
                    <p className="text-body-md text-on-surface-variant">
                      Подготовка на екипите за работа с изкуствен интелект в ежедневните задачи.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-brand-yellow text-headline-sm font-bold mt-1">02</div>
                  <div>
                    <h3 className="text-headline-sm text-primary mb-2">Персонализация</h3>
                    <p className="text-body-md text-on-surface-variant">
                      Конфигуриране на Copilot спрямо специфичните бизнес нужди на компанията.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-brand-yellow text-headline-sm font-bold mt-1">03</div>
                  <div>
                    <h3 className="text-headline-sm text-primary mb-2">Съответствие</h3>
                    <p className="text-body-md text-on-surface-variant">
                      Гарантиране, че AI операциите отговарят на стандартите за сигурност на данните.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 relative h-[600px] rounded-2xl overflow-hidden shadow-lg border border-surface-container-high">
              <Image
                src="/img.png"
                alt="Microsoft Copilot Device"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </Container>
      </section>

      <CTABand
        title="Готови ли сте за следващата стъпка?"
        description="Свържете се с нас за безплатна консултация относно вашата облачна стратегия."
        buttonText="Консултация"
        buttonHref="/contact"
      />
    </>
  );
}
