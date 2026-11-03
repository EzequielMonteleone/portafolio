import type { Content, Lang } from './types';
import { es } from './es';
import { en } from './en';

export const languages: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

export const defaultLang: Lang = 'en';

const content: Record<Lang, Content> = { es, en };

export function getContent(lang: Lang): Content {
  return content[lang] ?? content[defaultLang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment === 'es') return 'es';
  return defaultLang;
}

/** Home path for a language. The default locale has no prefix. */
export function getHomeHref(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}`;
}

/** Builds the URL of the current page in the opposite language. */
export function getAlternateHref(_url: URL, target: Lang): string {
  return getHomeHref(target);
}
