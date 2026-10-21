import TitleHeader from "../components/TitleHeader";

const contacts = [
  {
    href: "https://linkedin.com/in/abhis0x0",
    label: "linkedin.com/in/abhis0x0",
    icon: "/images/linkedin.svg",
    alt: "LinkedIn",
    external: true,
  },
  {
    href: "mailto:abhishekshukla7298@gmail.com",
    label: "abhishekshukla7298@gmail.com",
    icon: "/images/email.svg",
    alt: "Email",
  },
  {
    href: "tel:+919860010404",
    label: "+91-9860010404",
    icon: "/images/phone.svg",
    alt: "Phone",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="w-full px-5 pt-8 md:px-20 md:pt-10">
      <TitleHeader title="Get in Touch" sub="Pune / Mumbai" align="start" />
      <div className="mt-10 grid w-full gap-4 md:grid-cols-3">
        {contacts.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className="card-border flex items-center gap-4 rounded-2xl p-5"
          >
            <img src={item.icon} alt={item.alt} className="h-10 w-10 shrink-0" />
            <span className="text-lg text-white break-all">{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
