import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Car, Sofa, Leaf, Settings, Star } from "lucide-react";

const SERVICES = [
  {
    icon: Building2,
    title: "Cemitérios Verticais Ecológicos",
    desc: "Módulos 100 Externo, Mix e Interno. Partheons Vip, Stander e Columbarium. Soluções completas para cemitérios parque e verticais.",
    tag: "CEMITÉRIOS",
  },
  {
    icon: Car,
    title: "Autos Fúnebres",
    desc: "Saveiro Robust, Strada Freedom & Endurance e Strada Cortejos. Carrocerias em fibra sem junções, interior em Gel Coat lavávelcom iluminação LED.",
    tag: "VEÍCULOS",
  },
  {
    icon: Sofa,
    title: "Linha Mobiliário",
    desc: "Veneza, Virmond, Barcelona, Pietá, Granada, Majestic, Versatile e Valencia. Mobiliário completo para capelas e salas de velório.",
    tag: "MOBILIÁRIO",
  },
  {
    icon: Car,
    title: "Auto Elétrico para Cortejos",
    desc: "Limosine versátil elétrica para cortejos em cemitério. Conforto, silêncio e sustentabilidade para seus clientes.",
    tag: "ELÉTRICO",
  },
  {
    icon: Leaf,
    title: "Cemitérios Horizontais",
    desc: "Jazigos ecológicos para cemitérios horizontais com ganho de área e economia. Placas de identificação e ossuários.",
    tag: "ECOLÓGICO",
  },
  {
    icon: Settings,
    title: "Consultoria e Projetos",
    desc: "Licenciamento ambiental, plano piloto completo e consultoria especializada para implementação de novos empreendimentos.",
    tag: "CONSULTORIA",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="relative py-32" ref={ref}>
      <div className="absolute inset-0 bg-graphite-light/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-copper text-xs tracking-[0.4em] uppercase mb-4">
            // Nossos Produtos & Serviços
          </p>
          <h2 className="text-white font-heading text-4xl lg:text-6xl font-bold mb-4">
            Soluções <span className="text-copper">Completas</span>
          </h2>
          <p className="text-silver-dark font-mono text-sm max-w-2xl mx-auto">
            Do projeto à entrega, oferecemos soluções integradas para o setor
            funerário com qualidade, inovação e respeito.
 