import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, CheckCircle, X } from "lucide-react";

const PROJECTS = [
  {
    title: "Cemitério Paz Universal",
    location: "Uberlândia / MG",
    status: "Em Obras",
    statusColor: "text-yellow-400",
    image: "https://media.base44.com/images/public/69dad00807a15d69135e28f4/c250a9062_image.png",
    specs: ["1.780 Lóculos normais", "32 Lóculos super obesos", "720 Nichos para ossos individuais", "828 Nichos para ossos family"],
    size: "large",
  },
  {
    title: "Cemitério Franco da Rocha",
    location: "Franco da Rocha / SP",
    status: "Em Pleno Funcionamento",
    statusColor: "text-green-400",
    image: "https://media.base44.com/images/public/69dad00807a15d69135e28f4/83cfa8a30_image.png",
    specs: ["1.500 Lóculos", "480 Nichos Para Ossos"],
    size: "medium",
  },
  {
    title: "Cemitério Barretos",
    location: "Barretos / SP",
    status: "Em Pleno Funcionamento",
    statusColor: "text-green-400",
    image: "https://media.base44.com/images/public/69dad00807a15d69135e28f4/99296c91a_image.png",
    specs: ["250 Lóculos", "300 Ossários"],
    size: "medium",
  },
  {
    title: "Cemitério Campina Grande",
    location: "Campina Grande / PB",
    status: "Em Pleno Funcionamento",
    statusColor: "text-green-400",
    image: "https://media.base44.com/images/public/69dad00807a15d69135e28f4/9c001d4b6_image.png",
    specs: ["Cemitério Vertical Ecológico", "Módulos Externos e Internos"],
    size: "medium",
  },
  {
    title: "Grupo OSAF — Cemitério Vertical Ecológico",
    location: "Aracaju / SE",
    status: "Em Desenvolvimento",
    statusColor: "text-blue-400",
    image: "https://media.base44.com/images/public/69dad00807a15d69135e28f4/7508a2361_image.png",
    specs: ["12.000 Lóculos", "3.600 Nichos para ossos", "Pantheons Vip e Stander"],
    size: "large",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="projetos" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
 