import FadeIn from "./FadeIn";

const links = [
  {
    label: "Email",
    value: "nico99led@gmail.com",
    href: "mailto:nico99led@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+54 3547 660902",
    href: "https://wa.me/543547660902",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nicolás-ledesma",
    href: "https://www.linkedin.com/in/nicol%C3%A1s-ledesma",
  },
  {
    label: "GitHub",
    value: "github.com/nicoledesma99",
    href: "https://github.com/nicoledesma99",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <p className="font-mono text-[10px] text-[#444] uppercase tracking-widest mb-3">
              05 / contacto
            </p>
            <h2 className="text-2xl sm:text-3xl font-light text-white">
              Hablemos
            </h2>
          </div>
        </FadeIn>

        <FadeIn stagger>
          <div className="grid sm:grid-cols-2 gap-px bg-white/5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group bg-[#0a0a0a] px-6 py-5 flex items-center justify-between hover:bg-white/3 transition-colors duration-200"
              >
                <div>
                  <p className="font-mono text-[10px] text-[#444] uppercase tracking-widest mb-1">
                    {l.label}
                  </p>
                  <p className="text-[#888] text-sm group-hover:text-white transition-colors duration-200">
                    {l.value}
                  </p>
                </div>
                <span className="font-mono text-[#333] group-hover:text-white transition-colors duration-200 text-lg">
                  →
                </span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
