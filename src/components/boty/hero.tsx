"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Star, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-25">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10 text-center lg:text-left">
            <span
              className="inline-flex items-center gap-2 text-sm uppercase mb-6 text-primary animate-blur-in opacity-0 tracking-widest bg-primary/10 px-4 py-2 rounded-full"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <Heart className="w-4 h-4" />
              Terapia Ocupacional Infantil
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-balance text-foreground">
              <span
                className="block animate-blur-in opacity-0"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
              >
                Cuidado e
              </span>
              <span
                className="block animate-blur-in opacity-0 text-primary"
                style={{
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                }}
              >
                desenvolvimento
              </span>
              <span
                className="block animate-blur-in opacity-0"
                style={{
                  animationDelay: "0.8s",
                  animationFillMode: "forwards",
                }}
              >
                para seu filho
              </span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0 text-muted-foreground animate-blur-in opacity-0"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
              Ajudo crianças a alcançarem seu máximo potencial através de
              intervenções lúdicas e personalizadas para autismo, TDAH e atrasos
              no desenvolvimento.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-blur-in opacity-0"
              style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
            >
              <Link
                href="/#agendar"
                className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm tracking-wide vivi-transition hover:bg-primary/90 vivi-shadow"
              >
                Agendar Consulta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 vivi-transition" />
              </Link>
              <Link
                href="/#sobre"
                className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm tracking-wide vivi-transition hover:bg-foreground/5"
              >
                Conhecer mais
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap items-center gap-6 mt-12 justify-center lg:justify-start animate-blur-in opacity-0"
              style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">
                  +100 famílias atendidas
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  3+ anos de experiência
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="relative animate-blur-in opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden vivi-shadow">
              <Image
                src="/images/hero-therapy.jpg"
                alt="Vitoria Vizzotto Moreira - Terapeuta Ocupacional"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating card */}
            <div className="absolute bottom-0 -left-6 bg-white p-4 rounded-2xl vivi-shadow animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">CREFITO Ativo</p>
                  <p className="text-sm text-muted-foreground">
                    Profissional certificada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-20 h-20 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl" />
    </section>
  );
}
