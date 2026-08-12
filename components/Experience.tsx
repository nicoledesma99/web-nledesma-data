import FadeIn from "./FadeIn";

const experience = [
  {
    period: "Mar 2026 — actual",
    role: "Consultor BI Independiente",
    company: "Freelance · Rise Consultora",
    current: true,
    description:
      "Proyectos BI para feedlots y empresas agropecuarias. Refactorización de modelos semánticos en Power BI, desarrollo web con Next.js y automatización de documentos normativos con Python y FastAPI. Gestión directa de clientes y delivery end-to-end.",
  },
  {
    period: "Ago 2025 — Mar 2026",
    role: "Consultor BI · 3 proyectos",
    company: "Zentenio Tech",
    current: false,
    description:
      "Gestión simultánea de 3 proyectos en industrias distintas. Dashboards de seguimiento operativo para mineras, modelo de datos y control de costos por prestador en salud domiciliaria, y sistema de scoring de recupero con segmentación por antigüedad para cartera de morosidad en estudio jurídico.",
  },
  {
    period: "Ago 2023 — Ago 2025",
    role: "Analista de Datos",
    company: "Nobis S.A — Prepaga",
    current: false,
    description:
      "Segmentación de +50K afiliados por riesgo de baja y consumo. Definición de KPIs de rentabilidad (margen bruto, costo médico/ingresos, morosidad) por afiliado, grupo y empresa. Automatización de reportes semanales con Python y SQL que antes tomaban horas manuales. Diseño de campañas de retención por WhatsApp y email con seguimiento de performance.",
  },
  {
    period: "Abr 2023 — Ago 2023",
    role: "Teaching Assistant",
    company: "Henry",
    current: false,
    description:
      "Acompañamiento técnico a estudiantes del bootcamp de Data Science. Resolución de dudas en Python, SQL y Machine Learning, corrección de proyectos integradores y tutorías grupales.",
  },
];

const education = [
  { institution: "UTN", title: "Diplomatura en Machine Learning" },
  { institution: "Henry", title: "Data Science Bootcamp" },
  { institution: "Coder", title: "Project Manager · E-commerce" },
];

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <FadeIn>
              <div className="mb-10">
                <p className="font-mono text-[10px] text-white uppercase tracking-widest mb-3">
                  03 / experiencia
                </p>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  Trayectoria
                </h2>
              </div>
            </FadeIn>

            <div className="relative">
              {/* timeline line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-white/8" />

              <div className="space-y-8 pl-6">
                {experience.map((e, i) => (
                  <FadeIn key={i} delay={i * 80}>
                    <div className="relative">
                      {/* dot */}
                      <div
                        className={`absolute -left-[25px] top-1.5 w-2 h-2 rounded-full border ${
                          e.current
                            ? "bg-white border-white"
                            : "bg-[#0a0a0a] border-white/30"
                        }`}
                      />
                      <p className="font-mono text-[10px] text-white tracking-wider mb-1">
                        {e.period}
                      </p>
                      <p className="text-white text-sm font-light mb-0.5">
                        {e.role}
                      </p>
                      <p className="font-mono text-xs text-white mb-2">
                        {e.company}
                      </p>
                      <p className="text-white text-xs leading-relaxed">
                        {e.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <FadeIn>
              <div className="mb-10">
                <p className="font-mono text-[10px] text-white uppercase tracking-widest mb-3">
                  04 / formación
                </p>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  Educación
                </h2>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {education.map((e, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="border-l border-white/10 pl-5">
                    <p className="font-mono text-[10px] text-white uppercase tracking-widest mb-1">
                      {e.institution}
                    </p>
                    <p className="text-white text-sm font-light">{e.title}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
