import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="marquee-item flex flex-none flex-col items-center justify-center gap-3">
      <img
        src={icon.imgPath}
        alt=""
        className="h-12 w-12 object-contain md:h-14 md:w-14"
      />
      <p className="whitespace-nowrap text-sm font-semibold text-white-50 md:text-base">
        {icon.name}
      </p>
    </div>
  );
};

const LogoShowcase = () => (
  <div className="relative my-4">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box gap-8 md:gap-12">
        {logoIconsList.map((icon) => (
          <LogoIcon key={`a-${icon.name}`} icon={icon} />
        ))}

        {logoIconsList.map((icon) => (
          <LogoIcon key={`b-${icon.name}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
