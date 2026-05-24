"use client";

import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

const iconProps = { size: 16, stroke: 1.5, className: "size-4" };

const footerLinks = {
  servicos: [
    { name: "Avaliacao Inicial", href: "/#servicos" },
    { name: "Terapia Individual", href: "/#servicos" },
    { name: "Orientacao Familiar", href: "/#servicos" },
    { name: "Grupos Terapeuticos", href: "/#servicos" },
  ],
  sobre: [
    { name: "Sobre Mim", href: "/#sobre" },
    { name: "Abordagem", href: "/#sobre" },
    { name: "Depoimentos", href: "/#depoimentos" },
    { name: "Materiais", href: "/shop" },
  ],
  contato: [
    { name: "Agendar Consulta", href: "/#agendar" },
    { name: "WhatsApp", href: "https://wa.me/555596867402" },
    { name: "Localizacao", href: "/#contato" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card pt-20 pb-10 relative overflow-hidden">
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="font-serif text-[120px] sm:text-[160px] md:text-[240px] lg:text-[300px] font-bold text-primary/5 whitespace-nowrap leading-none">
          Vitoria
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-serif text-2xl text-foreground mb-2">
              <span className="text-primary">Vitoria</span> Vizzotto
            </h2>
            <p className="text-xs text-primary mb-4">
              Terapeuta Ocupacional - CREFITO
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Cuidando do desenvolvimento infantil com amor, dedicação e
              profissionalismo.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/vitoriamoreira.to"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 vivi-transition vivi-shadow"
                aria-label="Instagram"
              >
                <IconBrandInstagram {...iconProps} />
              </a>
              <a
                href="mailto:tovitoriamoreira@gmail.com"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 vivi-transition vivi-shadow"
                aria-label="Email"
              >
                <IconMail {...iconProps} />
              </a>
              <a
                href="https://wa.me/555596867402"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 vivi-transition vivi-shadow"
                aria-label="WhatsApp"
              >
                <IconBrandWhatsapp {...iconProps} />
              </a>
            </div>
          </div>

          {/* Servicos Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Servicos</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary vivi-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sobre Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Sobre</h3>
            <ul className="space-y-3">
              {footerLinks.sobre.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary vivi-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              {footerLinks.contato.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary vivi-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <IconMapPin {...iconProps} className="mt-0.5 shrink-0 size-4" />
              <span>Atendimento presencial e on-line</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vitoria Vizzotto Moreira. Todos os
              direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary vivi-transition"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary vivi-transition"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
