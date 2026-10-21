const TitleHeader = ({ title, sub, align = "center" }) => {
  const start = align === "start";

  return (
    <div className={`flex flex-col gap-5 ${start ? "items-start" : "items-center"}`}>
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div>
        <h1
          className={`font-semibold md:text-5xl text-3xl ${start ? "text-left" : "text-center"}`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
