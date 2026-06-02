import Image from "next/image";
import { Container } from "./Container";

interface HeroSectionProps {
  eyebrow: string;
  headlineLines: string[];
  highlightedLineIndex?: number;
  paragraph: string;
  buttonText: string;
  buttonHref: string;
  showScrollChevron?: boolean;
}

export function HeroSection({
  eyebrow,
  headlineLines,
  highlightedLineIndex,
  paragraph,
  buttonText,
  buttonHref,
  showScrollChevron = false,
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-surface pt-20 pb-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img.png"
          alt="Nymerix background"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/40 to-surface"></div>
      </div>

      {/* Faint oversized NX watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="text-[40vw] font-black text-on-surface/[0.03] select-none leading-none -tracking-widest">
          NX
        </span>
      </div>

      {/* Content */}
      <Container className="relative z-10 flex flex-col items-start gap-8 animate-fade-in-up">
        <span className="text-label-caps text-on-surface-variant before:content-[''] before:inline-block before:w-8 before:h-[2px] before:bg-brand-yellow before:mr-4 before:align-middle">
          {eyebrow}
        </span>

        <h1 className="flex flex-col gap-2">
          {headlineLines.map((line, index) => {
            const isHighlighted = index === highlightedLineIndex;
            if (isHighlighted) {
              return (
                <span
                  key={index}
                  className="inline-block bg-[#1A1A1A] text-[#FACC15] px-3 py-1 text-headline-lg-mobile md:text-display uppercase self-start w-auto"
                >
                  {line}
                </span>
              );
            }
            return (
              <span key={index} className="text-headline-lg-mobile md:text-display text-on-surface uppercase">
                {line}
              </span>
            );
          })}
        </h1>

        <p className="text-body-lg text-on-surface-variant w-full max-w-lg mt-4">
          {paragraph}
        </p>

        <div className="mt-4">
          <a
            href={buttonHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-yellow text-brand-charcoal rounded-lg text-label-bold transition-all hover:bg-[#eab308] active:scale-98"
          >
            {buttonText}
          </a>
        </div>
      </Container>

      {showScrollChevron && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </section>
  );
}
