import Image from "next/image";

interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
}

interface NumberedExpertiseProps {
  title: string;
  items: ExpertiseItem[];
  imageAlt: string;
}

export function NumberedExpertise({ title, items, imageAlt }: NumberedExpertiseProps) {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-gutter)]">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column - Numbered Items */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-headline-md md:text-headline-lg text-primary mb-12">
              {title}
            </h2>

            <div className="flex flex-col gap-10">
              {items.map((item) => (
                <div key={item.number} className="flex items-start gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center text-brand-charcoal text-headline-sm font-bold mt-1">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-headline-sm text-primary mb-2">{item.title}</h3>
                    <p className="text-body-lg text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/img.png"
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
