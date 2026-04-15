import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/69dad00807a15d69135e28f4/8db6a8458_image.png";

const STATS = [
  { value: "35+", label: "Anos de Mercado" },
  { value: "5k+", label: "Lóculos Entregues" },
  { value: "10+", label: "Estados Atendidos" },
  { value: "100%", label: "Compromisso com Qualidade" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [showMontadora, setShowMontadora] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMontadora(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById("sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Industrial steel structure at twilight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/70 via-graphite/50 to-graphite" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Technical coordinate */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-mono text-copper text-xs tracking-[0.4em] uppercase mb-6"
          >
            Excelência em Montagem Industrial
          </motion.p>

          {/* Main title */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-heading text-6xl sm:text-8xl lg:text-[10rem] font-bold leading-[0.9] tracking-tight"
 