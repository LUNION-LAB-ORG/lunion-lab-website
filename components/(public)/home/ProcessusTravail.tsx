"use client";

import Image from "next/image";
import HomeTitle from "./HomeTitle";
import { useEffect, useRef } from "react";

const steps = [
  { id: 1, title: "Conception", desc: "Créez des concepts d’interface visuellement attrayants et axés sur l’utilisateur", img: "/assets/images/services/service_fond1.jpg" },
  { id: 2, title: "Stratégie", desc: "Définissez les objectifs, le public cible et la structure du contenu.", img: "/assets/images/services/service_fond4.jpg" },
  { id: 3, title: "Developer", desc: "Créez des sites Web réactifs et fonctionnels avec un code propre", img: "/assets/images/services/service_fond3.jpg" },
];

export default function ProcessusTravail() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const airplaneRef = useRef<HTMLDivElement | null>(null);

  const setCardRef = (el: HTMLDivElement | null, idx: number) => {
    if (!el) return;
    cardRefs.current[idx] = el;
  };

  useEffect(() => {
    const updatePath = () => {
      const path = pathRef.current;
      const svg = svgRef.current;
      const cards = cardRefs.current;
      const plane = airplaneRef.current;
      if (!path || !svg || cards.length !== steps.length || !plane) return;

      const svgRect = svg.getBoundingClientRect();

      const pts: { x: number; y: number }[] = cards.map((el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2 - svgRect.left, y: r.top + r.height / 2 - svgRect.top };
      });

      const planeR = plane.getBoundingClientRect();
      const planePt = { x: planeR.left + planeR.width / 2 - svgRect.left, y: planeR.top + planeR.height / 2 - svgRect.top };

      let d = `M ${pts[0].x.toFixed(2)} ${pts[0].y.toFixed(2)}`;

      for (let i = 1; i < pts.length; i++) {
        const prev = pts[i - 1];
        const cur = pts[i];
        const cx = (prev.x + cur.x) / 2;

        // remonter plus fortement pour card1->card2 et card2->card3
        let prevY = prev.y;
        let curY = cur.y;
        if (i === 1) {
          prevY -= 80; // montée plus forte
          curY -= 80;
        }
        if (i === 2) {
          prevY -= 60; // montée entre card2->card3
          curY -= 60;
        }

        d += ` C ${cx.toFixed(2)} ${prevY.toFixed(2)} ${cx.toFixed(2)} ${curY.toFixed(2)} ${cur.x.toFixed(2)} ${cur.y.toFixed(2)}`;
      }

      // dernière courbe jusqu'à l'avion
      const last = pts[pts.length - 1];
      const midX = (last.x + planePt.x) / 2;
      d += ` C ${midX.toFixed(2)} ${last.y.toFixed(2)} ${midX.toFixed(2)} ${planePt.y.toFixed(2)} ${planePt.x.toFixed(2)} ${planePt.y.toFixed(2)}`;

      path.setAttribute("d", d);

      const length = path.getTotalLength();
      path.style.transition = "none";
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.getBoundingClientRect();
      path.style.transition = "stroke-dashoffset 1200ms ease-in-out";
      path.style.strokeDashoffset = "0";
    };

    updatePath();
    const ro = new ResizeObserver(() => updatePath());
    ro.observe(document.documentElement);
    window.addEventListener("scroll", updatePath, { passive: true });
    window.addEventListener("resize", updatePath);

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", updatePath);
      window.removeEventListener("resize", updatePath);
    };
  }, []);

  return (
    <section className="relative bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          <HomeTitle text="Processus de travail" imageSrc={"/assets/images/vectors/vector_load.svg"} />
        </h2>

        <div className="relative mt-16 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          <svg ref={svgRef} className="absolute w-full h-full left-0 top-0 pointer-events-none" preserveAspectRatio="none">
            <path ref={pathRef} stroke="#f472b6" strokeWidth={3} strokeDasharray="5 5" strokeLinecap="round" fill="none" />
          </svg>

          {steps.map((step, idx) => (
            <div key={step.id} ref={(el) => setCardRef(el, idx)} className="relative text-center z-10">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white z-10">
                <Image src={step.img} alt={step.title} fill className="object-cover" />
              </div>

              <div className={`absolute ${step.id === 2 ? "top-1 right-20" : "bottom-35 right-20"} bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold shadow-md z-50`}>
                {String(step.id).padStart(2, "0")}
              </div>

              <h3 className="mt-8 text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-500 text-medium max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div ref={airplaneRef} className="hidden md:block absolute right-[10%] top-40 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12L21.75 3l-4.5 18-6-6-6 6 1.5-6-4.5-6z" />
        </svg>
      </div>
    </section>
  );
}
