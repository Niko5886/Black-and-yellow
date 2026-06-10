import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-surface-container pt-20 pb-8 mt-auto border-t border-surface-container-high">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <span className="text-primary text-xl font-bold tracking-tight">Nymerix LTD.</span>
            <p className="text-body-sm text-on-surface-variant w-full max-w-xs">
              Прецизност във всеки пиксел. Технологични консултации от следващо поколение.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-label-caps text-on-surface">УСЛУГИ</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="text-body-sm text-on-surface-variant hover:text-brand-yellow transition-colors">
                  Софтуерно Разработване
                </Link>
              </li>
              <li>
                <Link href="/it-strategy" className="text-body-sm text-on-surface-variant hover:text-brand-yellow transition-colors">
                  IT Консултации
                </Link>
              </li>
              <li>
                <Link href="/cloud-solutions" className="text-body-sm text-on-surface-variant hover:text-brand-yellow transition-colors">
                  Cloud Миграция
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-label-caps text-on-surface">КОМПАНИЯ</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about" className="text-body-sm text-on-surface-variant hover:text-brand-yellow transition-colors">
                  За нас
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-body-sm text-on-surface-variant hover:text-brand-yellow transition-colors">
                  Кариери
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-label-caps text-on-surface">КОНТАКТ</h4>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nymerix.ltd@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-on-surface-variant hover:text-brand-yellow transition-colors"
            >
              nymerix.ltd@gmail.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-container-high flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-on-surface-variant text-center md:text-left">
            © 2025 Nymerix LTD. Tech Consulting. All rights reserved. Precision in every pixel.
          </p>
        </div>
      </Container>
    </footer>
  );
}
