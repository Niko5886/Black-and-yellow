import { Container } from "./Container";

interface QuoteBandProps {
  quote: string;
  attribution: string;
}

export function QuoteBand({ quote, attribution }: QuoteBandProps) {
  return (
    <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      <Container className="text-center relative z-10 max-w-3xl mx-auto">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-7xl font-bold text-[#FACC15] opacity-50 pointer-events-none">
          99
        </div>
        <blockquote className="text-headline-md text-white mb-8 italic relative z-10">
          "{quote}"
        </blockquote>
        <cite className="text-label-caps text-[#FACC15] not-italic">
          — {attribution}
        </cite>
      </Container>
    </section>
  );
}
