import { HeroSection } from "@/components/HeroSection";

export default function NotFound() {
  return (
    <>
      <HeroSection
        eyebrow="ERROR CODE: 404"
        headlineLines={["404", "LOST IN THE", "CLOUDS."]}
        highlightedLineIndex={1}
        paragraph="Страницата, която търсите, е извън обхват. Нека ви върнем на правилния път."
        buttonText="← Към началната страница"
        buttonHref="/"
      />

      {/* Faint text below hero - TECHNICAL PRECISION */}
      <div className="py-24 bg-surface text-center">
        <span className="text-label-caps text-on-surface-variant opacity-20">
          TECHNICAL PRECISION
        </span>
      </div>
    </>
  );
}
