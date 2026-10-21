import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".exp-block").forEach((card) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section id="experience" className="w-full px-5 pt-8 md:px-20 md:pt-10">
      <div className="w-full">
        <TitleHeader
          title="Professional Work Experience"
          sub="My Career Overview"
          align="start"
        />
        <div className="mt-16 flex w-full flex-col gap-8">
          {expCards.map((card) => (
            <article key={card.company} className="exp-block card-border rounded-2xl p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4">
                {card.logo ? (
                  <img
                    src={card.logo}
                    alt={`${card.company} logo`}
                    className={`h-12 w-auto max-w-[180px] rounded-md object-contain p-1 ${card.logoClass ?? ""}`}
                  />
                ) : (
                  <span className="flex size-12 items-center justify-center rounded-full border border-white/15 text-xs font-bold text-white">
                    {card.mark}
                  </span>
                )}
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {card.company}
                  </h2>
                  <p className="text-white">{card.title}</p>
                  <p className="text-white-50">
                    {card.date} · {card.location}
                  </p>
                  {card.note && <p className="text-white-50">{card.note}</p>}
                </div>
              </div>
              <ul className="mt-6 list-disc ms-5 flex flex-col gap-3 text-white-50">
                {card.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="text-base md:text-lg">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
