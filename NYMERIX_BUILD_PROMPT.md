# Nymerix LTD — Build Prompt

**Reference:** Use the attached `DESIGN.md` as the **strict source of truth** for all CSS values, color tokens, spacing, radii, and typography. Where the frontmatter tokens and the prose differ, the frontmatter tokens win; treat the prose only as intent. Build a multi-page marketing site for a technology consulting firm. All UI copy is in **Bulgarian** and must be reproduced exactly as written below.

Recommended stack: Next.js (App Router) + Tailwind CSS + TypeScript. Map every `DESIGN.md` token into the Tailwind theme so nothing is hard-coded.

---

## 1. CORE BRAND ANCHORS (High Priority)

- **Identity:** "Technical Precision with Human Approachability." Modern Corporate. High-density information paired with generous white space. Tagline everywhere in footer: `Прецизност във всеки пиксел.`
- **Atmosphere:** Restrained, premium, utilitarian. Decoration is minimal; the brand yellow is the only accent and is reserved exclusively for primary CTAs, active states, and one highlighted word per hero.
- **Color discipline (from DESIGN.md):**
  - Deep Charcoal `#1A1A1A` (`primary-container #1c1b1b`) for typography, dark sections, and high-emphasis backgrounds.
  - Strategic Yellow `#FACC15` (`secondary-container #FED01B`) — accents/CTAs/active states ONLY.
  - Surfaces: `surface #fbf8ff`, `surface-container #eeedf7`, white `#ffffff`. Sections separated by tonal layering, not heavy borders.
- **Typography:** `Inter` at every level with strong weight contrast. Display headlines use ExtraBold (800) with negative letter-spacing (`-0.02em`) for the tight "tech-editorial" look. Body is light/airy (400). Labels/eyebrows are uppercase, 12px, weight 700, letter-spacing `0.05em`.
- **Signature hero treatment (apply on every hero):**
  - Large uppercase multi-line `display` headline (64px desktop / 32px mobile, ExtraBold).
  - **Exactly one word/line** of each headline is highlighted by sitting inside a solid block — either a **yellow box** (charcoal text) or a **charcoal box** (yellow text). See per-page specs.
  - Faint oversized `NX` monogram watermark behind the headline (low opacity).
  - Background: muted mountain/sky photo with a light-to-transparent overlay so charcoal text stays legible.
  - Small uppercase eyebrow label above the headline.
- **Shapes & elevation:** Buttons/inputs 8px radius; cards 12–16px radius. Float elements (sticky nav, dropdowns) use the soft ambient shadow `0px 4px 20px rgba(0,0,0,0.04)`. Buttons use color shift + 98% scale on press, no heavy shadow.

---

## 2. GLOBAL LAYOUT & NAVIGATION

- **Container:** 1280px max-width, centered. 24px gutters. Strict 8px base unit. Section vertical spacing 80px+. Mobile content margins 24px, tablet 48px.
- **Header (sticky, blur background):** Logo `Nymerix LTD.` on the left (charcoal, bold). Center/right nav links: `Начало` · `IT Стратегия` · `UI/UX Дизайн` · `Облачни решения`. Far right: a solid **charcoal pill button** `Започни проект` (white text). Active link uses yellow underline/indicator.
- **Mobile:** Collapse nav into a hamburger; keep the `Започни проект` button visible.
- **Footer (every page):** 4 columns.
  - Col 1: `Nymerix LTD.` (bold) + `Прецизност във всеки пиксел. Технологични консултации от следващо поколение.`
  - Col 2 **УСЛУГИ:** `Софтуерно Разработване`, `IT Консултации`, `Cloud Миграция`
  - Col 3 **КОМПАНИЯ:** `За нас`, `Кариери`
  - Col 4 **КОНТАКТ:** `office@nymerix.tech` + Facebook & Instagram circular icon buttons.
  - Bottom bar: `© 2025 Nymerix LTD. Tech Consulting. All rights reserved. Precision in every pixel.`

---

## 3. PAGE-SPECIFIC ARCHITECTURE

### PAGE: "Начало" (Home)
1. **Hero** — eyebrow `ПРЕЦИЗНОСТ В ДЕТАЙЛИТЕ`; headline `BUILDING / BEYOND / LIMITS.` with **BEYOND** in a charcoal box (yellow text); `NX` watermark; mountain photo. Paragraph: `Ние сме Nymerix – технологична консултантска компания, която превръща сложните предизвикателства в безпроблемни дигитални решения за модерни предприятия.` Yellow CTA `Започнете проект →`.
2. **"Нашите Експертизи."** — left intro header + right subline `Стратегически подход към всяка линия код и всяко бизнес решение.` Below, a **bento grid** of 4 cards:
   - `Корпоративен Софтуер` (large light card, compass/architect icon) — `Мащабируеми системи, проектирани да растат с вашия бизнес. Използваме най-модерните технологии и гарантираме стабилност.`
   - `IT Стратегия` (charcoal card, yellow icon, big `02` index) — `Консултации на високо ниво за дигитална трансформация и оптимизация на процесите.`
   - `UI/UX Дизайн` (yellow card, charcoal text) — `Фокусирани върху потребителски интерфейси, които съчетават естетика с функционалност за максимално ангажиране.`
   - `Облачни Решения` (white card with mountain thumbnail) — `Миграция и управление на облачна инфраструктура за глобална достъпност и сигурност.`
3. **Quote band** (full-width charcoal) — big yellow `99`; centered quote `"Технологиите не са просто инструмент, а са езикът на бъдещето. Ние ви помагаме да говорите този език свободно."`; attribution `— ЕКИПЪТ НА NYMERIX`.
4. **CTA band** (full-width yellow) — `Готови ли сте за следващата стъпка?` + `Свържете се с нас днес за безплатна консултация и открийте как Nymerix може да ускори вашия дигитален растеж.` Right: solid charcoal pill button `Свържете се с нас`.

### PAGE: "UI/UX Дизайн"
1. **Hero** — eyebrow `ЕСТЕТИКА И ФУНКЦИОНАЛНОСТ`; headline `INTUITIVE / DESIGN / SYSTEMS.` with **DESIGN** in a yellow box (charcoal text). Subhead `Създаваме дигитални преживявания, които вдъхновяват и ангажират. Нашият UI/UX дизайн трансформира бизнес цели в интуитивни потребителски пътеки.`
2. **"Нашият подход"** — left section title with a short yellow accent bar; subline `Процесът, който превръща визията в реалност чрез данни и емпатия.` Row of 4 process cards (each icon + title + description); the **2nd card is filled yellow**, rest are bordered white:
   - `Проучване` — `Дълбоко проучване на пазара, потребителите и бизнес целите за поставяне на стабилна основа.`
   - `Проектиране` (yellow) — `Архитектура на информацията и скелет на интерфейса за оптимална навигация и поток.`
   - `Прототипиране` — `Интерактивни прототипи с високо детайлно, които симулират реалното потребителско изживяване.`
   - `Тестване` — `Валидиране на решенията чрез потребителски тестове и итерации до съвършенство.`
3. **"Какво предлагаме"** (centered title) — **bento grid** of mixed-size cards:
   - `Mobile & Web Design` (large yellow card with laptop photo) — `Адаптивни интерфейси, които работят безупречно на всяко устройство.`
   - `Дизайн системи` (charcoal card) — `Мащабируеми библиотеки от компоненти за консистентност на вашия бранд.`
   - `Потребителско проучване` (small light card)
   - `Интерактивен дизайн` (charcoal card, yellow icon) — `Микро-взаимодействия за удоволствие от познатото.`
4. **Quote band** (charcoal) — eyebrow `NYMERIX STANDARDS`; quote `"Прецизност във всеки пиксел. Стратегия във всеки клик."`; divider line + `НАШИЯТ ДИЗАЙН ЕТОС`.
5. **CTA band** (light card) — `Готови ли сте за трансформация?` + `Нека превърнем вашите идеи в интуитивен интерфейс, който потребителите ще обичат.` Two buttons: charcoal `Консултация →` + ghost `Нашите проекти`. Right: mountain photo with rounded corners.

### PAGE: "IT Стратегия"
1. **Hero** — eyebrow `ТРАНСФОРМАЦИЯ И РАСТЕЖ`; headline `IT / STRATEGY / ROADMAP.` with **STRATEGY** in a yellow box. Subhead `Трансформираме технологиите в конкурентно предимство. Създаваме устойчиви рамки за мащабиране на вашия бизнес.` Add a subtle scroll-down chevron.
2. **"Нашият подход"** — subline `Съчетаваме бизнес цели с технологични иновации за устойчив растеж.` 4 cards (2nd = yellow): `Анализ` — `Пълна оценка на текущата ви инфраструктура и идентифициране на пропуските.`; `Планиране` (yellow) — `Дефиниране на стратегическа пътна карта с измерими цели и KPI.`; `Изпълнение` — `Интеграция на най-добрите технологични решения по прозрачен начин.`; `Оптимизация` — `Непрекъснато усъвършенстване на процесите за максимална ефективност.`
3. **Quote band** (charcoal) — eyebrow `NYMERIX STANDARDS`; quote `"Стратегическото мислене е основата на всяка дигитална трансформация."`; `СТРАТЕГИЧЕСКИ ЕТОС`.
4. **"Експертиза в детайли"** — left: numbered list with yellow circular index badges; right: mountain photo (rounded).
   - `01 Одит на инфраструктурата` — `Дълбоко проучване на хардуера, софтуера и мрежовите системи за оптимизация на разходите и сигурността.`
   - `02 Дигитална пътна карта` — `Проектиране на стъпките за успешно внедряване на иновации през следващите 3–5 години.`
   - `03 Технологични консултации` — `Експертни съвети за избор на стек, вендори и методологии за разработка.`
5. **CTA band** — `Готови ли сте за следващата стъпка?` + `Нека превърнем вашата технологична визия в реално бизнес предимство.` charcoal button `Свържете се с нас →` + mountain photo.

### PAGE: "Облачни решения"
1. **Hero** — eyebrow `МАЩАБИРУЕМОСТ И СИГУРНОСТ`; headline `CLOUD / ARCHITECTURE / SOLUTIONS.` with **ARCHITECTURE** in a yellow box. Subhead `Инфраструктура за бъдещето. Проектираме облачни екосистеми, които растат заедно с вашия бизнес, осигурявайки надеждност без компромиси.`
2. **"Нашият подход"** — subline `Стратегическо планиране и внедряване за максимална ефективност.` 4 cards (2nd = yellow): `Оценка` — `Детайлен анализ на съществуващата инфраструктура и бизнес нужди.`; `Миграция` (yellow) — `Безпроблемно прехвърляне на данни и приложения с минимален престой.`; `Сигурност` — `Внедряване на многослойни протоколи за защита и криптиране.`; `Скалируемост` — `Автоматизирано управление на ресурсите за оптимална производителност.`
3. **Quote band** (charcoal) — eyebrow `СТАНДАРТИ НА NYMERIX`; quote `"Облачните технологии са в основата на модерната мащабируемост."`; `ОБЛАЧЕН ЕТОС`.
4. **"Техническа експертиза"** — numbered list + photo: `01 Хибриден облак` — `Оптимален баланс между локални сървъри и публични облачни услуги за гъвкавост.`; `02 Serverless архитектури` — `Намаляване на оперативните разходи и фокус върху разработването на код, не управление на сървъри.`; `03 Сигурност на данните` — `Съответствие с GDPR и индустриални стандарти за защита на корпоративната информация.`
5. **"MICROSOFT 365 КОНСУЛТАЦИИ"** — title + subline `Оптимизирайте работните процеси с водещата екосистема за продуктивност.` Row of 4 bordered cards: `Миграция` — `Плавен преход към Microsoft 365 от всякакви legacy платформи.`; `Teams & Collab` — `Конфигуриране на среда за безпроблемна екипна работа.`; `Сигурност` — `Защита на данните с Defender, Intune и Advanced Threat Protection.`; `Одит` — `Редовни прегледи на лицензи и политики за сигурност.`
6. **"MICROSOFT COPILOT: БЪДЕЩЕТО НА ЕФЕКТИВНОСТТА"** — left column: yellow stat card `+40%` / `По-висока продуктивност за вашите служители чрез AI интеграция` + charcoal button `Започнете AI Transform`; below it numbered list `01 AI Обучение` — `Подготовка на екипите за работа с изкуствен интелект в ежедневните задачи.`; `02 Персонализация` — `Конфигуриране на Copilot спрямо специфичните бизнес нужди на компанията.`; `03 Съответствие` — `Гарантиране, че AI операциите отговарят на стандартите за сигурност на данните.` Right column: large laptop/device image.
7. **CTA band** (full-width yellow) — `Готови ли сте за следващата стъпка?` + `Свържете се с нас за безплатна консултация относно вашата облачна стратегия.` charcoal pill button `Консултация`.

### PAGE: "Кариери" (Careers — coming soon)
1. **Hero** — eyebrow `КАРИЕРА В NYMERIX`; headline `ОЧАКВАЙТЕ / СКОРО / NYMERIX.` with **СКОРО** in a yellow box. `NX` watermark + mountain photo. Subhead `Ние изграждаме нещо голямо. Тук скоро ще откриете възможности да станете част от екипа ни и да работите върху проекти, които променят бъдещето.` Yellow button `Назад ←` linking home.
2. Row of 3 value cards (middle = yellow filled): `Бърз растеж` (rocket icon) — `В Nymerix насърчаваме професионалното израстване чрез реални, мащабни проекти.`; `Култура на сътрудничество` (yellow, people icon) — `Работим в екип от експерти, които споделят знания и се стремят към съвършенство.`; `Прецизност и качество` (medal icon) — `Всеки детайл има значение. Ние вярваме в качествения код и стратегическия дизайн.`

### PAGE: 404
- Eyebrow `ERROR CODE: 404`; headline `404 / LOST IN THE / CLOUDS.` with **LOST IN THE** in a yellow box; giant low-opacity `404` watermark; mountain photo. Subhead `Страницата, която търсите, е извън обхват. Нека ви върнем на правилния път.` Yellow button `← Към началната страница`. Faint `TECHNICAL PRECISION` watermark + scroll chevron.

---

## 4. INTERACTION & MOTION
- Cards: default = 1px subtle border; on hover lift to the Level 2 ambient shadow with a small yellow accent bar at the top (service cards).
- Buttons: 98% scale + color shift on press, no heavy shadow.
- Hero highlighted-word boxes are static (no animation); subtle staggered fade-up entrance for hero text and card grids is welcome but must stay restrained.
- Keep all motion fast and understated to match the "absolute reliability" tone.

## 5. RESPONSIVE RULES
- Desktop 12-col fluid grid → mobile 4-col. Display headline drops to 32px (`headline-lg-mobile`) on mobile.
- Bento grids collapse to a single column on mobile, preserving the yellow/charcoal card emphasis order.
- Numbered "expertise" lists stack image below content on mobile.

## 6. CONTENT NOTES
- All copy above is final Bulgarian content — reproduce verbatim, do not translate or paraphrase.
- Contact email: `office@nymerix.tech`. Replace photo placeholders with neutral mountain/sky stock or `/public` assets; keep the light overlay so charcoal text stays legible.
