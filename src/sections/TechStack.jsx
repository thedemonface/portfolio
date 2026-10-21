import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import TitleHeader from "../components/TitleHeader";
import { skillGroups } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".skill-row",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="w-full px-5 pt-8 md:px-20 md:pt-10">
      <TitleHeader
        title="How I Deliver"
        sub="Methods, tools, and platforms"
        align="start"
      />
      <div className="mt-16 flex w-full flex-col gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.name}
            className="skill-row flex w-full flex-col gap-3 border-b border-black-50 pb-8 md:flex-row md:items-center md:gap-8"
          >
            <div className="flex w-full shrink-0 items-center gap-3 md:w-80">
              {group.logos?.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-10 object-contain"
                />
              ))}
              <p className="text-lg font-semibold text-white">{group.name}</p>
            </div>
            <p className="text-white-50 md:text-lg">{group.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
