/**
 * Locales should implement this interface
 * Only serializable objects are supported right now (i.e: no functions).
 */

export interface IHero {
  title: {
    line1: string;
    line2: string;
  };
  subtitle: {
    line1: string;
    line2: string;
  };
}

export interface MyLocale {
  locale: string;
  links: {
    link1: string;
    link2: string;
    link3: string;
    link4: string;
  };
  home: {
    hero: IHero;
  };
  design: {
    hero: IHero;
  };
}
