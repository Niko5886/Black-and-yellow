import { Container } from "./Container";

interface CTABandProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function CTABand({
  title,
  description,
  buttonText,
  buttonHref,
}: CTABandProps) {
  return (
    <section className="py-20 bg-surface">
      <Container>
        <div className="bg-[#FACC15] rounded-3xl px-10 py-14 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full max-w-xl">
            <h2 className="text-headline-md md:text-headline-lg text-[#1A1A1A] mb-4 break-words">
              {title}
            </h2>
            <p className="text-body-md text-[#1A1A1A]/80 mt-4">
              {description}
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={buttonHref}
              className="inline-flex items-center justify-center px-8 py-3 bg-[#1A1A1A] text-white rounded-full text-label-bold font-semibold transition-all hover:bg-[#1A1A1A]/90 active:scale-98"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
