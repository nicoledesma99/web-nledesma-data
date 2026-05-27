"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import ProjectModal, { type ProjectData } from "./ProjectModal";

const projects: ProjectData[] = [
  {
    tag: "MINERÍA · POWER BI",
    title: "Gestión Comercial & Cobranzas — Infraestructura de Conectividad Minera",
    problem:
      "Sin visibilidad del estado de cobranzas ni clasificación de proveedores. Tres líneas de negocio (STARLINK, SERVICIOS, ABONOS) mezcladas sin segmentación operativa.",
    solution:
      "Vista SQL clasificando +80 proveedores en 4 categorías. Sistema semáforo de cobranzas (verde >5 días, amarillo 1-5 días, rojo vencido) con índice de cobrabilidad 0-100. Dashboard ejecutivo con cortes por línea de negocio.",
    impact:
      "Priorización automática de gestión de cobro. Identificación de que una sola línea de negocio representa el 63% de la facturación.",
    stack: ["SQL Server", "Power BI", "DAX", "ERP Tempo"],
    iframeSrc:
      "https://app.powerbi.com/view?r=eyJrIjoiZjc2OTMzYTktNWRlYS00NWU5LWI3NTctZWY2NmE4NzNiNzAwIiwidCI6IjlkOGNhZDcyLTUyMGMtNGU2Yi1iYjJmLTJlZGRlNjU0MTJmOSIsImMiOjR9",
  },
  {
    tag: "SALUD · POWER BI",
    title: "Análisis de Churn & Retención de Afiliados — Prepaga de Salud",
    problem:
      "Sin visibilidad de patrones de baja de afiliados ni segmentación por riesgo. KPIs de rentabilidad dispersos entre áreas.",
    solution:
      "Segmentación de afiliados por riesgo de baja y nivel de consumo. Definición de perfiles retenibles vs no retenibles. KPIs de margen bruto, costo médico/ingresos y morosidad por afiliado, grupo y empresa.",
    impact:
      "Segmentación accionable para campañas de retención personalizadas por WhatsApp y email.",
    stack: ["Power BI", "DAX", "SQL", "Python"],
    iframeSrc:
      "https://app.powerbi.com/view?r=eyJrIjoiNjFiOTgwMjktYjMxMi00YjUyLWI0NmUtMGRkZmVhMmUzMjEwIiwidCI6IjA4ZWRmMjhhLWVmNzEtNDk5MS05YWMzLWU3NWMyZWVmZjFhMCJ9",
  },
  {
    tag: "AGRO · DEMO INTERACTIVA",
    title: "Control Operativo de Feedlot — Conversión, ADPV & Rentabilidad",
    problem:
      "Feedlots operando sin dashboards de control, usando planillas manuales sin trazabilidad de métricas clave.",
    solution:
      "Dashboard interactivo con KPIs de conversión ganadera, ADPV (aumento diario de peso vivo), rentabilidad por tropa y análisis de clientes en tiempo real.",
    impact:
      "Propuesta comercial funcional que demuestra dominio del sector agropecuario.",
    stack: ["HTML", "CSS", "JavaScript", "Recharts"],
    iframeSrc: "https://mockups-bi-2.vercel.app/src/pages/mockup-feedlot.html",
  },
  {
    tag: "MACHINE LEARNING · WEB APP",
    title: "Modelo Predictivo de Resultados — Mundial FIFA 2026",
    problem:
      "Predicción de resultados de partidos del Mundial 2026 usando datos históricos y modelos de machine learning.",
    solution:
      "App web con modelos predictivos entrenados sobre rankings FIFA, historial de enfrentamientos y performance histórica de selecciones.",
    impact:
      "Modelo predictivo funcional desplegado en producción.",
    stack: ["Python", "Scikit-learn", "React", "FastAPI"],
    iframeSrc: "https://wc2026-predictor-1-psmq.onrender.com/",
  },
];

function ExpandIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 5.5V2.5H5M11 2.5H14V5.5M14 10.5V13.5H11M5 13.5H2V10.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  const [active, setActive] = useState<ProjectData | null>(null);

  return (
    <section id="proyectos" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <p className="font-mono text-[10px] text-[#444] uppercase tracking-widest mb-3">
              01 / proyectos
            </p>
            <h2 className="text-2xl sm:text-3xl font-light text-white">
              Trabajo real, impacto medible
            </h2>
          </div>
        </FadeIn>

        {/* Grid 2×2 */}
        <div className="grid sm:grid-cols-2 gap-px bg-white/5">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 70}>
              <button
                onClick={() => setActive(p)}
                className="group w-full text-left bg-[#0a0a0a] px-8 py-8 flex flex-col justify-between min-h-[200px] hover:bg-white/[0.02] transition-colors duration-200 border border-transparent hover:border-white/5"
              >
                <div>
                  <p className="font-mono text-[10px] text-[#444] uppercase tracking-widest mb-3">
                    {p.tag}
                  </p>
                  <h3 className="text-white text-base font-light leading-snug group-hover:text-[#ccc] transition-colors duration-200 pr-6">
                    {p.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <span className="font-mono text-[10px] text-[#333] uppercase tracking-widest group-hover:text-[#555] transition-colors duration-200">
                    Ver demo →
                  </span>
                  <span className="text-[#2a2a2a] group-hover:text-[#666] transition-colors duration-200">
                    <ExpandIcon />
                  </span>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Modal — solo monta (y carga el iframe) cuando hay proyecto activo */}
      {active && (
        <ProjectModal {...active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
