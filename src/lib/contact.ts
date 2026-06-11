/**
 * Централизирани данни за контакт.
 * Всички бутони "Свържете се" / "Консултация" / "Започни проект" водят към
 * вътрешната форма за контакт (/contact), която изпраща имейл през Web3Forms.
 */

export const CONTACT_EMAIL = "nymerix.ltd@gmail.com";

/**
 * Web3Forms Access Key.
 * ─────────────────────────────────────────────────────────────────────────
 * ВАЖНО: Замени стойността по-долу със своя ключ.
 *   1. Влез в https://web3forms.com
 *   2. Въведи имейла nymerix.ltd@gmail.com и натисни "Create Access Key"
 *   3. Копирай получения ключ и го постави тук между кавичките.
 * Този ключ е безопасен за публикуване в кода (така е проектиран Web3Forms).
 */
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "88c3225a-5e12-41b7-ae33-c098d40b2420";

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
