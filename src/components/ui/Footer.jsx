import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre Nós", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Contato", href: "/#contato" },
];

const SERVICES = [
  "Montagem de Estruturas",
  "Desmontagem Industrial",
  "Manutenção Industrial",
  "Projetos e Consultoria",
  "Logística e Transporte",
  "Fabricação de Estruturas",
];

export default function Footer() {
  const handleNav = (href) => {
    const anchor = href.split("#")[1];
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-graphite border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-copper flex items-center justify-center">
                <span className="text-copper font-mono text-xs font-bold">DV</span>
              </div>
              <div>
                <span className="text-white font-heading text-lg font-bold tracking-wider">
                  DA VINCI
                </span>
                <span className="block text-copper font-mono text-[10px] tracking-[0.3em] uppercase -mt-1">
                  Montadora
                </span>
              </div>
            </Link>
            <p className="text-silver-dark font-mono text-xs leading-relaxed">
              Referência nacional em montagem e desmontagem de estruturas
              metálicas industriais com excelência, segurança e precisão.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-heading text-sm font-semibold mb-6 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-silver-dark font-mono text-xs hover:text-copper transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
 