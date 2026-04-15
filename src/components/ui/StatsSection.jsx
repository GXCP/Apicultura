import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const METRICS = [
  { end: 35, suffix: "+", label: "Anos de Mercado" },
  { end: 5000, suffix: "+", label: "Lóculos Entregues" },
  { end: 10, suffix: "+", label: "Estados Atendidos" },
  { end: 100, suffix: "%", label: "Compromisso" },
];

function Counter({ end, suffix, duration = 2000, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Copper accent band */}
      <div className="absolute inset-0 bg-copper" />
      <div className="absolute inset-0 bg-graphite/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="text-center relative"
            >
              {/* Divider */}
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-copper/30" />
              )}
              <div className="text-copper font-heading text-5xl lg:text-6xl font-bold mb-2">
                <Counter end={metric.end} suffix={metric.suffix} start={isInView} />
              </div>
              <p className="text-silver-dark font-mono text-[10px] tracking-[0.3em] uppercase">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
 