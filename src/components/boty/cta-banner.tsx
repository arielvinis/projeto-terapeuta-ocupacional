"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Phone, ArrowRight } from "lucide-react";

export function CTABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <section id="agendar" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={bannerRef}
          className={`rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden bg-primary transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Content */}
          <div className="relative z-10 flex-1 text-center lg:text-left">
            <span className="text-sm tracking-[0.3em] uppercase text-white/70 mb-4 block">
              Agende sua consulta
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-serif">
              Vamos juntos cuidar do desenvolvimento do seu filho
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              A primeira avaliação é essencial para entender as necessidades da
              criança e traçar um plano de intervenção personalizado.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="https://wa.me/555596867402"
                target="_blank"
                className="group inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-full text-sm tracking-wide vivi-transition hover:bg-white/90 vivi-shadow w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                Agendar pelo WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 vivi-transition" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">Segunda a Sexta</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">8h as 18h</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-80 aspect-square rounded-2xl overflow-hidden shrink-0">
            <Image
              src="/images/therapy-play.jpg"
              alt="Sessão de terapia ocupacional"
              fill
              className="object-cover"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}
