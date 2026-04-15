import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, Zap, Award } from "lucide-react";

const ABOUT_IMG = "https://media.base44.com/images/public/69dad00807a15d69135e28f4/26d653b71_image.png";"https://media.base44.com/images/public/69dad00807a15d69135e28f4/22fabda09_generated_f1f58355.png";

const PILLARS = [
  { icon: Shield, title: "Segurança", desc: "Processos certificados em cada entrega" },
  { icon: Target, title: "Precisão", desc: "Módulos com encaixe perfeito e acabamento impecável" },
  { icon: Zap, title: "Inovação", desc: "Soluções ecológicas de última geração" },
  { icon: Award, title: "Qualidade", desc: "35 anos de excelência no mercado" },
  { icon: Target, title: "Precisão", desc: "Tolerância milimétrica em cada montagem" },
  { icon: Zap, title: "Eficiência", desc: "Prazos cumpridos com excelência operacional" },
  { icon: Award, title: "Qualidade", desc: "Certificações e padrões internacionais" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-32 blueprint-grid" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={ABOUT_IMG}
                alt="Precision welding in Da Vinci facility"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 border border-copper/30" />
            </div>
            {/* Technical overlay */}
            <div className="absolute -bottom-6 -right-6 bg-copper px-6 py-4">
              <span className="text-white font-heading text-3xl font-bold">25+</span>
              <span className="block text-white/80 font-mono text-[10px] tracking-wider uppercase">
                Anos no Mercado
              </span>
            </div>
            {/* Corner marks */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-copper -translate-x-3 -translate-y-3" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-copper translate-x-3 translate-y-3" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-mono text-copper text-xs tracking-[0.4em] uppercase mb-4">
              // Sobre nós
            </p>
            <h2 className="text-white font-heading text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Tradição e
              <br />
              <span className="text-copper">Inovação</span>
            </h2>
            <div className="space-y-4 text-silver-dark font-mono text-sm leading-relaxed">
              <p>
                A Da Vinci Montadora está há <strong className="text-white">35 anos no mercado</strong> atendendo
                as melhores empresas do ramo funerário com soluções completas em
                cemitérios verticais ecológicos, autos fúnebres e mobiliário para capelas.
              </p>
              <p>
                Nossa missão: <em>"Inovar com perfeição para melhor qualificar os seus bons serviços."</em>
              </p>
              <p>
                Contamos também com a <strong className="text-white">R Sete Montadora</strong> — nosso braço forte
                na área ecológica, cemitérios verticais e autos fúnebres.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="border border-border p-4 group hover:border-copper/50 transition-colors duration-300"
                >
                  <pillar.icon className="text-copper mb-2" size={20} />
                  <h4 className="text-white font-heading text-sm font-semibold mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-silver-dark font-mono text-[10px] leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}