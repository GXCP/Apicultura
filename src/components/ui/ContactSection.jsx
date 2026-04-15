import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappUrl =
    "https://wa.me/5541996789253?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20Da%20Vinci%20Montadora.";

  return (
    <section id="contato" className="relative py-32 blueprint-grid" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-copper text-xs tracking-[0.4em] uppercase mb-4">
            // Fale Conosco
          </p>
          <h2 className="text-white font-heading text-4xl lg:text-6xl font-bold mb-6">
            Vamos <span className="text-copper">Conversar?</span>
          </h2>
          <p className="text-silver-dark font-mono text-sm leading-relaxed max-w-xl mx-auto mb-12">
            Entre em contato diretamente com nossa equipe pelo WhatsApp. Estamos
            prontos para apresentar as melhores soluções para o seu negócio.
          </p>

          {/* WhatsApp CTA */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-mono text-sm tracking-[0.15em] uppercase px-10 py-5 hover:bg-[#1ebe5a] transition-colors duration-300 shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle size={22} />
            Falar pelo WhatsApp
          </motion.a>

          {/* Info tiles */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-20">
            <div className="border border-border p-6 hover:border-copper/40 transition-colors duration-300 text-center sm:w-56">
              <MapPin className="text-copper mb-3 mx-auto" size={20} />
              <h4 className="text-white font-heading text-sm font-semibold mb-2">Endereço</h4>
              <p className="text-silver-dark font-mono text-xs leading-relaxed">
                Rua Arapongas, 1137<br />
                São José dos Pinhais — PR
              </p>
            </div>

            <div className="border border-border p-6 hover:border-copper/40 transition-colors duration-300 text-center sm:w-56">
              <Phone className="text-copper mb-3 mx-auto" size={20} />
              <h4 className="text-white font-heading text-sm font-semibold mb-2">Telefones</h4>
              <p className="text-silver-dark font-mono text-xs leading-relaxed">
                41 3587.0674<br />
                41 99678.9253<br />
                41 98802.2672
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}