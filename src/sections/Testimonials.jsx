import { highlights } from "../constants";
import TitleHeader from "../components/TitleHeader";

const groups = [
  { kind: "Certification", title: "Certifications", columns: "md:grid-cols-2 xl:grid-cols-3" },
  { kind: "Award", title: "Awards and Recognition", columns: "md:grid-cols-2" },
];

const RecognitionCard = ({ item }) => {
  const body = (
    <>
      <p className="text-sm uppercase tracking-wide text-white-50">{item.kind}</p>
      <p className="mt-2 text-xl font-semibold text-white">{item.name}</p>
      {item.mentions && <p className="mt-2 text-white-50">{item.mentions}</p>}
      {item.review && <p className="mt-3 text-white-50">{item.review}</p>}
    </>
  );

  if (!item.href) {
    return <article className="card-border rounded-2xl p-6">{body}</article>;
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="card-border block rounded-2xl p-6 transition-colors hover:bg-black-50"
    >
      {body}
    </a>
  );
};

const Testimonials = () => {
  return (
    <section id="recognition" className="w-full px-5 pt-8 md:px-20 md:pt-10">
      <div className="w-full">
        <TitleHeader
          title="Certifications and Awards"
          sub="In the same order as the resume"
          align="start"
        />

        <div className="mt-16 flex w-full flex-col gap-12">
          {groups.map((group) => (
            <div key={group.kind}>
              <h2 className="text-2xl font-semibold text-white">{group.title}</h2>
              <div className={`mt-5 grid w-full gap-4 ${group.columns}`}>
                {highlights
                  .filter((item) => item.kind === group.kind)
                  .map((item) => (
                    <RecognitionCard key={item.name} item={item} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
