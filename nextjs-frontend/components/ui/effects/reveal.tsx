import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
}

const Reveal: React.FC<RevealProps> = ({ children }) => {
  const animateFrom = (el: HTMLElement, direction?: number) => {
    const dir = direction || 1;

    let x = 0;
    let y = dir * 100;

    if (el.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (el.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    gsap.fromTo(
      el,
      { x, y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  };

  const hide = (el: HTMLElement) => {
    gsap.set(el, { autoAlpha: 0 });
  };

  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach((el: HTMLElement) => {
      hide(el);

      ScrollTrigger.create({
        trigger: el,
        onEnter: () => {
          animateFrom(el);
        },
        onEnterBack: () => {
          animateFrom(el, -1);
        },
        onLeave: () => {
          hide(el);
        },
      });
    });
  }, []);

  return <div className="element">{children}</div>;
};

export default Reveal;
