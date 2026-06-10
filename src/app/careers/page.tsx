import { HeroSection } from "@/components/HeroSection";
import { Container } from "@/components/Container";

export default function Careers() {
  return (
    <>
      <HeroSection
        eyebrow="КАРИЕРА В NYMERIX"
        headlineLines={["ОЧАКВАЙТЕ", "СКОРО", "NYMERIX."]}
        highlightedLineIndex={1}
        paragraph="Ние изграждаме нещо голямо. Тук скоро ще откриете възможности да станете част от екипа ни и да работите върху проекти, които променят бъдещето."
        buttonText="Назад ←"
        buttonHref="/"
      />

      <section className="py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Value Card 1 */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface">
                {/* Rocket Icon */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.438 4.438 0 002.946-2.946 4.493 4.493 0 004.306-1.758q-2.65-.636-4.86-2.846-2.21-2.21-2.846-4.86A4.493 4.493 0 004.469 10.8c.613.045 1.221.15 1.816.312a14.903 14.903 0 00-2.42 2.42m2.38 2.38a3 3 0 114.243-4.243m4.242 4.242a3 3 0 114.243-4.243M13 18.5V21h-2v-2.5m-5.5-5.5H3v-2h2.5" />
                </svg>
              </div>
              <h3 className="text-headline-sm text-primary">Бърз растеж</h3>
              <p className="text-body-sm text-on-surface-variant">
                В Nymerix насърчаваме професионалното израстване чрез реални, мащабни проекти.
              </p>
            </div>

            {/* Value Card 2 (Yellow) */}
            <div className="bg-brand-yellow rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-charcoal/10 flex items-center justify-center text-brand-charcoal">
                {/* People Icon */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-headline-sm text-brand-charcoal">Култура на сътрудничество</h3>
              <p className="text-body-sm text-brand-charcoal/80">
                Работим в екип от експерти, които споделят знания и се стремят към съвършенство.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-8 hover:shadow-[var(--shadow-level-2)] transition-shadow flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface">
                {/* Medal Icon */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-headline-sm text-primary">Прецизност и качество</h3>
              <p className="text-body-sm text-on-surface-variant">
                Всеки детайл има значение. Ние вярваме в качествения код и стратегическия дизайн.
              </p>
            </div>
            
          </div>
        </Container>
      </section>
    </>
  );
}
