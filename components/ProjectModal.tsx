"use client";
import { useEffect } from "react";

export interface ProjectData {
  tag: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  iframeSrc: string;
}

interface ProjectModalProps extends ProjectData {
  onClose: () => void;
}

export default function ProjectModal({
  tag,
  title,
  problem,
  solution,
  impact,
  stack,
  iframeSrc,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0a]/96 backdrop-blur-sm overflow-y-auto modal-animate">
      {/* Barra superior fija — botón volver izquierda + X derecha */}
      <div className="fixed top-0 left-0 right-0 z-[101] flex items-center justify-between px-5 h-14 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5">
        <button
          onClick={onClose}
          className="font-mono text-[13px] text-[#666] hover:text-white transition-colors duration-200 flex items-center gap-2"
        >
          ← Volver a proyectos
        </button>
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="w-9 h-9 flex items-center justify-center border border-white/15 text-[#555] hover:text-white hover:border-white/50 transition-all duration-200 font-mono text-xl leading-none"
        >
          ×
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
        {/* Header */}
        <div className="border-b border-white/5 pb-8 mb-10 pt-4">
          <p className="font-mono text-[10px] text-[#444] uppercase tracking-widest mb-4">
            {tag}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
            {title}
          </h2>
        </div>

        {/* Problema / Solución / Impacto */}
        <div className="grid sm:grid-cols-3 gap-px bg-white/5 mb-10">
          <div className="bg-[#0a0a0a] p-6 sm:p-7">
            <p className="font-mono text-[10px] text-[#999] uppercase tracking-widest mb-4">
              Problema
            </p>
            <p className="text-[#ccc] text-base leading-[1.7]">{problem}</p>
          </div>
          <div className="bg-[#0a0a0a] p-6 sm:p-7">
            <p className="font-mono text-[10px] text-[#999] uppercase tracking-widest mb-4">
              Solución
            </p>
            <p className="text-[#ccc] text-base leading-[1.7]">{solution}</p>
          </div>
          <div className="bg-[#0a0a0a] p-6 sm:p-7">
            <p className="font-mono text-[10px] text-[#999] uppercase tracking-widest mb-4">
              Impacto
            </p>
            <p className="text-[#ccc] text-base leading-[1.7]">{impact}</p>
          </div>
        </div>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] text-[#555] border border-white/10 px-3 py-1.5 tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* iframe embed — lazy load, solo monta cuando el modal está abierto */}
        <div className="w-full aspect-video border border-white/8 overflow-hidden bg-[#111]">
          <iframe
            src={iframeSrc}
            className="w-full h-full"
            allow="fullscreen"
            allowFullScreen
            title={title}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
