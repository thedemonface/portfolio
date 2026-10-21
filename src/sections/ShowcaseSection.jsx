import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { projects } from "../constants";
import MotoCluster from "../components/MotoCluster";

gsap.registerPlugin(ScrollTrigger);

const ProjectLinks = ({ project }) => {
  const links = project.links ?? [
    { label: `Visit ${project.title}`, href: project.href },
  ];

  return (
    <div className="flex shrink-0 flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-white underline underline-offset-4"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

const ScreenshotProject = ({ project }) => (
  <article className="work-card min-w-0">
    <p className="text-sm uppercase tracking-wide text-white-50">
      {project.eyebrow}
    </p>
    <div className="mt-2 flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="min-w-0">
        <p className="text-4xl font-bold text-white md:text-5xl">
          {project.title}
        </p>
        <h2 className="mt-3 text-2xl font-bold md:text-3xl">{project.headline}</h2>
      </div>
      <ProjectLinks project={project} />
    </div>
    {project.cluster ? (
      <div className="mt-6">
        <MotoCluster />
      </div>
    ) : (
      <div className="shot-row mt-6 flex gap-4 overflow-x-auto pb-4">
        {project.screenshots.map((shot) => (
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            className="h-80 w-auto flex-none rounded-[1.6rem] md:h-[30rem]"
          />
        ))}
      </div>
    )}
    <div className="mt-5 w-full">
      <p className="text-white-50 md:text-xl">{project.summary}</p>
    </div>
  </article>
);

const CompactProject = ({ project }) => (
  <article className="work-card w-full">
    <p className="text-sm uppercase tracking-wide text-white-50">
      {project.eyebrow}
    </p>
    <h2 className="mt-2 text-4xl font-bold text-white">{project.title}</h2>
    {project.headline && (
      <p className="mt-4 text-2xl font-bold md:text-3xl">{project.headline}</p>
    )}
    <p className="mt-4 text-white-50 md:text-xl">{project.summary}</p>
    <div className="mt-5">
      <ProjectLinks project={project} />
    </div>
  </article>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const featured = projects.filter(
    (project) => project.screenshots || project.cluster
  );
  const compact = projects.filter(
    (project) => !project.screenshots && !project.cluster
  );

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    gsap.utils.toArray(".work-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="flex w-full flex-col gap-20">
        {featured.map((project) => (
          <ScreenshotProject key={project.title} project={project} />
        ))}
        {compact.length > 0 && (
          <div className="project-list-wrapper">
            {compact.map((project) => (
              <CompactProject key={project.title} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppShowcase;
