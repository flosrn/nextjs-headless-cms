import { MyLocale } from ".";

export const table: MyLocale = {
  locale: "Français",
  links: {
    link1: "Accueil",
    link2: "Design",
    link3: "Animations",
    link4: "Blog",
  },
  home: {
    hero: {
      title: {
        line1: "Bienvenue sur",
        line2: "Next.js Headless CMS Starter Kit",
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
          "Parceque Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.",
        line2: "",
      },
    },
  },
  animations: {
    hero: {
      title: {
        line1: "Les animations avec",
        line2: "GSAP",
      },
      subtitle: {
        line1:
          "GSAP est un peu comme le couteau suisse de l'animation javascript... mais en mieux.",
        line2: "Voici quelques exemples d'utilisation.",
      },
    },
  },
};
