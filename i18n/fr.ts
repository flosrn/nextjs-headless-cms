import { MyLocale } from "i18n/index";

export const table: MyLocale = {
  locale: "French",
  home: {
    hero: {
      title: {
        line1: "Bienvenue sur mon",
        line2: "Next.js template",
      },
      subtitle: {
        line1:
          "Ce projet a pour but d'offrir une architecture robuste pour commencer un nouveau projet avec le framework Next.js.",
        line2:
          "Il repose sur les librairies les plus en vogue du moment et implémente les meilleures pratiques en termes de design, de code et d'architecture.",
      },
    },
  },
  design: {
    hero: {
      title: {
        line1: "Créez rapidement des sites web moderne avec",
        line2: "Tailwindcss",
      },
      subtitle: {
        line1:
          "Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.",
        line2: "",
      },
    },
  },
};
