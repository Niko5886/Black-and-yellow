/**
 * Централизирани данни за контакт.
 * Всички бутони "Свържете се" / "Консултация" / "Започни проект" водят към
 * вътрешната форма за контакт (/contact), която изпраща имейл през Web3Forms.
 */

export const CONTACT_EMAIL = "nymerix.ltd@gmail.com";

/**
 * Web3Forms Access Key.
 * ─────────────────────────────────────────────────────────────────────────
 * Имейлите от контактната форма се доставят на собственика на този ключ.
 * Ключът трябва да е създаден с акаунта nymerix.ltd@gmail.com, за да стигат
 * запитванията до правилната поща.
 *
 * Стойността се чете от .env.local (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) и не се
 * пази в кода. За да смениш ключа, редактирай .env.local — не този файл.
 */
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

/**
 * Изгражда вътрешна връзка към формата за контакт с предварително попълнена
 * тема. Темата прави запитванията по-лесни за проследяване — точно както при
 * водещите B2B сайтове.
 */
export function contactHref(subject?: string): string {
  return subject
    ? `/contact?subject=${encodeURIComponent(subject)}`
    : "/contact";
}

/**
 * mailto: връзка към фирмения имейл — използва се само за директните
 * текстови имейл връзки (напр. във футъра), не за CTA бутоните.
 */
export function contactMailto(subject?: string): string {
  return subject
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${CONTACT_EMAIL}`;
}
