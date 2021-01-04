import { MyLocale } from ".";

export const table: MyLocale = {
  locale: "English",
  links: {
    link1: "Home",
    link2: "Design",
    link3: "Animations",
    link4: "Blog",
  },
  home: {
    hero: {
      title: {
        line1: "Welcome on",
        line2: "Next.js Headless CMS Starter Kit",
      },
      subtitle: {
        line1:
          "This project provide a demo template with all best stuff for a production ready Next.js website with all best practices.",
        line2: "It is based on the most popular librairies of the moment.",
      },
    },
  },
  design: {
    hero: {
      title: {
        line1: "Rapidly build modern websites with",
        line2: "Tailwindcss",
      },
      subtitle: {
        line1:
          "Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.",
        line2: "",
      },
    },
  },
  animations: {
    hero: {
      title: {
        line1: "Animations with",
        line2: "GSAP",
      },
      subtitle: {
        line1: "GSAP is a bit like the swiss army knife of javascript animation ... only better.",
        line2: "Here are some examples of use.",
      },
    },
  },
};
