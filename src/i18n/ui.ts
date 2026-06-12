import type { Content, Lang } from './types';
import { es } from './es';
import { en } from './en';

export const languages: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

export const defaultLang: Lang = 'es';

const content: Record<Lang, Content> = { es, en };

export function getContent(lang: Lang): Content {
  return content[lang] ?? content[defaultLang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment === 'en') return 'en';
  return defaultLang;
}

/** Builds the URL of the current page in the opposite language. */
export function getAlternateHref(url: URL, target: Lang): string {
  if (target === 'en') return '/en';
  return '/';
}
