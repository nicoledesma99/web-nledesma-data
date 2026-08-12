import Image from "next/image";
import Clock from "./Clock";
import FadeIn from "./FadeIn";

const stats = [
  { value: "3+", label: "años en BI" },
  { value: "5+", label: "industrias" },
  { value: "10+", label: "dashboards productivos" },
  { value: "3", label: "proyectos simultáneos" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-14">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Location / clock row */}
        <div className="flex items-center justify-between mb-12">
          <span className="font-mono text-xs text-white tracking-wider uppercase">
            Córdoba, Argentina
          </span>
          <Clock />
        </div>

        <FadeIn>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-10">
            {/* Profile photo */}
            <div className="relative flex-shrink-0 group">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden ring-2 ring-white/10">
                <Image
                  src="/foto_nico.png"
                  alt="Nicolás Ledesma"
                  width={110}
                  height={110}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Status dot */}
              <span className="absolute bottom-1.5 right-1.5 w-3 h-3 bg-white rounded-full border-2 border-[#0a0a0a]" />
            </div>

            {/* Name block */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-2">
                Nicolás Ledesma
              </h1>
              <p className="font-mono text-sm text-white tracking-widest uppercase">
                Data & BI Analyst
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="max-w-2xl mb-10 space-y-4">
            <p className="text-white text-base sm:text-lg leading-relaxed">
              Transformo datos operativos en decisiones de negocio. Dashboards,
              modelos predictivos y automatización para salud, agro e industria.
            </p>
            <p className="text-white text-sm leading-relaxed">
              Analista de datos con +3 años de experiencia transformando datos operativos en decisiones de negocio. Trabajo con empresas de salud, agro e industria diseñando dashboards ejecutivos, automatizando reportes y construyendo modelos predictivos. Mi foco está en entender el problema de negocio primero y después elegir la herramienta correcta — no al revés.
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={200}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 border border-white/5 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#0a0a0a] px-5 py-4">
                <p className="font-mono text-2xl font-medium text-white mb-1">{s.value}</p>
                <p className="font-mono text-xs text-white tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={300}>
          <div className="flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="px-7 py-3 rounded-full bg-white text-black text-sm font-mono font-medium hover:bg-[#e0e0e0] transition-all duration-200 tracking-wide"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="px-7 py-3 rounded-full border border-white/25 text-white text-sm font-mono hover:border-white/60 hover:text-white transition-all duration-200 tracking-wide"
            >
              Contacto →
            </a>
            <a
              href="/cv.pdf"
              download="Nicolas_Ledesma_CV.pdf"
              className="px-7 py-3 rounded-full border border-white/25 text-white text-sm font-mono hover:border-white/60 hover:text-white transition-all duration-200 tracking-wide flex items-center gap-2"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                <path d="M6 1v7M3 6l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Descargar CV
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-mono text-[10px] text-white uppercase tracking-widest">scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
