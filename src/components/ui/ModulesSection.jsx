import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const MODULES_TABS = [
  {
    label: "Módulos",
    img: "https://media.base44.com/images/public/69dad00807a15d69135e28f4/1363ca120_image.png",
    title: "Módulos para Cemitérios",
    desc: "Módulo 100 Externo, Módulo 100 Mix e Módulo Interno — soluções moduladas ecológicas prontas para qualquer ambiente, com praticidade e versatilidade.",
  },
  {
    label: "Pantheons",
    img: "https://media.base44.com/images/public/69dad00807a15d69135e28f4/30662f16c_image.png",
    title: "Pantheons & Columbarium",
    desc: "Partheon Externo, Stander, Interno e Columbarium. Do Pantheon Stander (4 Família / 6 Lóculos / 6 Ossários) ao Columbarium para cinzas com módulos de 25 und. Ecológicos.",
  },
  {
    label: "Plano Piloto",
    img: "https://media.base44.com/images/public/69dad00807a15d69135e28f4/13d7dd813_image.png",
    title: "Plano Piloto Completo",
    desc: "Planejamento completo do empreendimento com 1.000 lóculos totais, Pantheons Vip, salas de homenagem, 240 ossários individuais, estacionamento e espelho d'água.",
  },
  {
    label: "Mobiliário",
    img: "https://media.base44.com/images/public/69dad00807a15d69135e28f4/4733d0e72_image.png",
    title: "Linha Mobiliário I",
    desc: "Veneza (cascata em água corrente + LED), Virmond (Madeira e Inox + LED), Barcelona (alumínio envelhecido + vidro lapidado) e Pietá (escultura marmorizada).",
  },
  {
    label: "Mobiliário II",
    img: "https://media.base44.com/images/public/69dad00807a15d69135e28f4/66f77751e_image.png",
    title: "Linha Mobiliário II",
    desc: "Granada (mármore + Cristo em resina + LED), Majestic (mármore + LED), Versatile (madeira + vidro) e Valencia (madeira + vidro + floreira).",
  },
];

export default function ModulesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="modulos" className="py-32 blueprint-grid" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-copper text-xs tracking-[0.4em] uppercase mb-4">
            // Produtos
          </p>
          <h2 className="text-white font-heading text-4xl lg:text-6xl font-bold">
            Linha de <span className="text-copper">Produtos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES_TABS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group bg-graphite-light border border-border hover:border-copper/40 transition-all duration-500 overflow-hidden cursor-pointer"
              onClick={() => setLightbox(item)}
 