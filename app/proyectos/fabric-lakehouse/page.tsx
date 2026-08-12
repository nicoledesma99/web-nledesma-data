import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const title = "Lakehouse Medallion & Agente Text-to-SQL — Salud Domiciliaria";
const description =
  "Pipeline Bronze/Silver/Gold en Microsoft Fabric que unifica costos dispersos (envíos, alquileres, nutrición, insumos) en un solo modelo. Agente conversacional que traduce preguntas de negocio a SQL sobre el lakehouse, con doble barrera read-only.";

export const metadata: Metadata = {
  title: `${title} — Nicolás Ledesma`,
  description,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] text-white uppercase tracking-widest mb-3">
      {children}
    </p>
  );
}

function Diagram({ children }: { children: React.ReactNode }) {
  return (
    <pre className="font-mono text-[11px] sm:text-xs text-white leading-relaxed overflow-x-auto p-6 border border-white/10 bg-[#0a0a0a] whitespace-pre">
      {children}
    </pre>
  );
}

export default function FabricLakehousePage() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <div className="grid-wave" aria-hidden="true">
        <div className="grid-wave-a" />
        <div className="grid-wave-b" />
      </div>
      <div className="noise" aria-hidden="true" />

      <div className="relative z-10">
        <Nav />
        <main className="pt-24">
          <div className="max-w-7xl mx-auto px-6 pb-24">
            <FadeIn>
              <Link
                href="/#proyectos"
                className="font-mono text-[13px] text-white hover:text-white/60 transition-colors duration-200 inline-flex items-center gap-2 mb-10"
              >
                ← Volver a proyectos
              </Link>

              <div className="border-b border-white/5 pb-8 mb-12">
                <SectionLabel>SALUD · DATA ENGINEERING</SectionLabel>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
                  {title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {["Microsoft Fabric", "Medallion (Bronze/Silver/Gold)", "LangGraph", "Claude", "LangSmith", "pyodbc"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] text-white border border-white/10 px-3 py-1.5 tracking-wide"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </FadeIn>

            {/* Resumen */}
            <FadeIn>
              <section className="mb-16">
                <SectionLabel>Resumen</SectionLabel>
                <p className="text-white text-base sm:text-lg leading-relaxed max-w-3xl">
                  Lakehouse Medallion en Microsoft Fabric que unifica costos dispersos de una
                  empresa de salud domiciliaria (Medichome) y un agente conversacional que
                  traduce preguntas de negocio a SQL. El área comercial pregunta en español y
                  obtiene el análisis de costo por prestador y servicio sin depender de nadie
                  que sepa SQL.
                </p>
              </section>
            </FadeIn>

            {/* El problema */}
            <FadeIn>
              <section className="mb-16">
                <SectionLabel>El problema</SectionLabel>
                <div className="max-w-3xl space-y-4">
                  <p className="text-white text-base leading-relaxed">
                    Medichome manejaba una parte importante de sus costos{" "}
                    <strong className="font-medium">por fuera del sistema principal</strong>:
                    envíos, leche/nutrición, alquileres, insumos — todo repartido en planillas y
                    fuentes sueltas. Eso hacía imposible tener una foto real del costo total por
                    prestador o por servicio: siempre faltaba una pieza, y cualquier análisis de
                    margen arrancaba juntando datos a mano de tres o cuatro lugares distintos.
                  </p>
                  <p className="text-white text-base leading-relaxed">
                    El data warehouse resuelve eso de raíz:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white text-base leading-relaxed">
                    <li>
                      <strong className="font-medium">Unifica</strong> las fuentes dispersas en
                      un solo modelo.
                    </li>
                    <li>
                      <strong className="font-medium">Automatiza</strong> la ingesta, para que no
                      dependa de nadie cargando planillas.
                    </li>
                    <li>
                      <strong className="font-medium">Deja todo consultable</strong> desde una
                      sola capa — y, con el agente, consultable en lenguaje natural sin escribir
                      SQL.
                    </li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            {/* Arquitectura */}
            <FadeIn>
              <section className="mb-16">
                <SectionLabel>Arquitectura</SectionLabel>
                <p className="text-white text-base leading-relaxed max-w-3xl mb-6">
                  Todo vive en un único área de trabajo de Fabric (
                  <code className="font-mono text-sm">Medallion_salud</code>): el Lakehouse, el
                  notebook de ETL, las canalizaciones de ingesta (gran y bajo volumen), el Copy
                  Job y el modelo semántico.
                </p>

                <div className="border border-white/10 bg-[#111] overflow-hidden mb-6">
                  <Image
                    src="/proyectos/fabric/01-fabric-workspace.png"
                    alt="Área de trabajo Medallion_salud en Microsoft Fabric"
                    width={1341}
                    height={506}
                    className="w-full h-auto"
                  />
                </div>

                <Diagram>{`SQL Server on-prem ─────┐
 (costos del sistema)   │
                        ├─(gateway · TCP 1433)─> BRONZE ──> SILVER ──> GOLD
Planillas / fuentes ────┘        raw               tipado/    star schema
 (envíos, leche,              multi-fuente         limpio     fact_costo + dims
  alquileres, insumos)                                            │
                                       dim_servicio + price_list ─┤
                                         (markup por tramos)      ↓
                                                       gold_precio_vs_costo`}</Diagram>

                <p className="text-white text-base leading-relaxed max-w-3xl mt-6">
                  El Medallion no es decorativo: existe <strong className="font-medium">precisamente</strong> para
                  absorber fuentes heterogéneas (el sistema + las planillas de envíos/leche/alquileres) y
                  normalizarlas antes de llegar a Gold.
                </p>
              </section>
            </FadeIn>

            {/* Pipeline Medallion */}
            <FadeIn>
              <section className="mb-16">
                <SectionLabel>Pipeline Medallion</SectionLabel>
                <p className="text-white text-base leading-relaxed max-w-3xl mb-6">
                  Flujo Bronze/Silver/Gold: se ingesta el crudo desde el SQL Server on-premises
                  vía gateway, se tipa y limpia en Silver, y se arma el star schema en Gold con{" "}
                  <code className="font-mono text-sm">fact_costo</code> y las dimensiones.
                </p>

                <div className="border border-white/10 bg-[#111] overflow-hidden mb-6">
                  <Image
                    src="/proyectos/fabric/02-medallion-flow.png"
                    alt="Flujo Medallion en Fabric"
                    width={982}
                    height={490}
                    className="w-full h-auto"
                  />
                </div>

                <ul className="list-disc list-inside space-y-2 text-white text-base leading-relaxed max-w-3xl">
                  <li>
                    <strong className="font-medium">Ingesta incremental</strong> con{" "}
                    <code className="font-mono text-sm">replaceWhere</code> para no reprocesar
                    todo en cada corrida.
                  </li>
                  <li>
                    <strong className="font-medium">Fix de infra:</strong> el gateway
                    on-premises fallaba con puerto dinámico. Se estabilizó fijando el{" "}
                    <strong className="font-medium">TCP en 1433</strong>.
                  </li>
                  <li>Dos canalizaciones separadas por volumen (gran / bajo) según el tipo de fuente.</li>
                </ul>
              </section>
            </FadeIn>

            {/* Datos unificados */}
            <FadeIn>
              <section className="mb-16">
                <SectionLabel>Datos unificados: el resultado de integrar</SectionLabel>
                <p className="text-white text-base leading-relaxed max-w-3xl mb-6">
                  Esta es la prueba de que el problema quedó resuelto. Cada columna —alquiler,
                  envío, nutrición, insumos, servicios— era una fuente separada que vivía por
                  fuera del sistema. Ahora convergen en{" "}
                  <code className="font-mono text-sm">costo_total</code> por prestador (dni), en
                  una sola tabla consultable.
                </p>

                <div className="border border-white/10 bg-[#111] overflow-hidden mb-6">
                  <Image
                    src="/proyectos/fabric/03-costos-unificados.png"
                    alt="Costo total unificado por prestador — antes fuentes separadas"
                    width={1030}
                    height={438}
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-white text-base leading-relaxed max-w-3xl">
                  Lo que antes era &ldquo;abrí cuatro planillas y sumá a mano&rdquo; ahora es una fila.
                </p>
              </section>
            </FadeIn>

            {/* El agente */}
            <FadeIn>
              <section className="mb-16">
                <SectionLabel>El agente (LangGraph)</SectionLabel>
                <p className="text-white text-base leading-relaxed max-w-3xl mb-6">
                  Sobre la capa Gold construí un agente conversacional que traduce preguntas de
                  negocio a SQL.
                </p>

                <Diagram>{`Usuario ─pregunta(español)─> Agente LangGraph · StateGraph (9 nodos)
                                   │
              interpretar → generar SQL → validar (read-only ×2)
                                   │
                          ejecutar (pyodbc · AD Service Principal)
                                   │
                        ¿error? ─sí─> retry ─┐
                                   │no        │
                          formatear respuesta <┘ ──> Usuario
                          [ todo trazado en LangSmith ]`}</Diagram>

                <ul className="list-disc list-inside space-y-2 text-white text-base leading-relaxed max-w-3xl mt-6">
                  <li>
                    <code className="font-mono text-sm">StateGraph</code> de{" "}
                    <strong className="font-medium">9 nodos</strong>: interpreta, genera SQL,
                    valida, ejecuta y formatea, con <strong className="font-medium">lógica de retry</strong> si falla.
                  </li>
                  <li>
                    <strong className="font-medium">Doble barrera read-only</strong>: el agente
                    nunca puede escribir sobre el lakehouse.
                  </li>
                  <li>
                    Autenticación vía <code className="font-mono text-sm">ActiveDirectoryServicePrincipal</code>.
                  </li>
                  <li>
                    Trazado completo en <strong className="font-medium">LangSmith</strong> y
                    desplegado con <code className="font-mono text-sm">langgraph.json</code>.
                  </li>
                </ul>

                {/* CAPTURAS PENDIENTES (agregar cuando estén disponibles):
                    - Grafo del StateGraph (9 nodos) desde LangGraph Studio
                    - El agente respondiendo una pregunta real (pregunta en español + tabla de respuesta)
                    - Un trace de LangSmith de una corrida
                    Reemplazar el bloque de abajo por las 3 imágenes cuando lleguen. */}
                <div className="mt-6 border border-dashed border-white/20 p-6 text-center">
                  <p className="font-mono text-[10px] text-white uppercase tracking-widest">
                    Capturas del agente próximamente
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Resultado */}
            <FadeIn>
              <section className="mb-8">
                <SectionLabel>Resultado</SectionLabel>
                <p className="text-white text-base leading-relaxed max-w-3xl mb-4">
                  El área comercial pregunta en lenguaje natural y recibe la variación de costo
                  por prestador y servicio directo de la capa Gold. Consultas que antes tardaban
                  un ida y vuelta con un analista —y que dependían de juntar planillas sueltas—
                  ahora son inmediatas, automáticas y seguras.
                </p>
                <p className="text-white text-base leading-relaxed max-w-3xl font-medium">
                  El arco completo: fuentes dispersas → warehouse que las unifica y automatiza →
                  agente que las hace consultables sin SQL.
                </p>
              </section>
            </FadeIn>

            <FadeIn>
              <Link
                href="/#proyectos"
                className="font-mono text-[13px] text-white hover:text-white/60 transition-colors duration-200 inline-flex items-center gap-2 mt-8"
              >
                ← Volver a proyectos
              </Link>
            </FadeIn>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
