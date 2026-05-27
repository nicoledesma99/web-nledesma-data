import FadeIn from "./FadeIn";

const categories = [
  {
    label: "BI & Viz",
    tools: ["Power BI", "DAX", "Looker", "Excel"],
  },
  {
    label: "Data",
    tools: ["SQL Server", "MySQL", "BigQuery", "PostgreSQL"],
  },
  {
    label: "Code",
    tools: ["Python", "Pandas", "Scikit-learn", "SQL Avanzado"],
  },
  {
    label: "Cloud",
    tools: ["GCP", "Dataflow", "Apache Beam", "Docker"],
  },
  {
    label: "Web",
    tools: ["Next.js", "React", "Tailwind", "Vercel"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <p className="font-mono text-[10px] text-[#444] uppercase tracking-widest mb-3">
              02 / stack
            </p>
            <h2 className="text-2xl sm:text-3xl font-light text-white">
              Herramientas y tecnologías
            </h2>
          </div>
        </FadeIn>

        <FadeIn stagger>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5">
            {categories.map((cat) => (
              <div key={cat.label} className="bg-[#0a0a0a] p-5">
                <p className="font-mono text-[10px] text-[#555] uppercase tracking-widest mb-4">
                  {cat.label}
                </p>
                <ul className="space-y-2">
                  {cat.tools.map((tool) => (
                    <li
                      key={tool}
                      className="text-[#888] text-sm font-light hover:text-white transition-colors duration-150 cursor-default"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
