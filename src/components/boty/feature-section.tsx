"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Brain, Puzzle, Baby, Sparkles, GraduationCap, Heart } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Autismo (TEA)",
    description: "Intervencoes baseadas em evidencias para estimulacao do desenvolvimento"
  },
  {
    icon: Sparkles,
    title: "TDAH",
    description: "Estrategias para atencao, organizacao e autorregulacao"
  },
  {
    icon: Baby,
    title: "Atrasos no Desenvolvimento",
    description: "Estimulacao precoce e acompanhamento do desenvolvimento"
  },
  {
    icon: Puzzle,
    title: "Integracao Sensorial",
    description: "Tratamento de dificuldades sensoriais e de processamento"
  }
]

export function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const bentoRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (bentoRef.current) {
      observer.observe(bentoRef.current)
    }

    if (aboutSectionRef.current) {
      aboutObserver.observe(aboutSectionRef.current)
    }

    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
    }

    return () => {
      if (bentoRef.current) {
        observer.unobserve(bentoRef.current)
      }
      if (aboutSectionRef.current) {
        aboutObserver.unobserve(aboutSectionRef.current)
      }
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Services Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            Servicos
          </span>
          <h2 className={`font-serif text-4xl md:text-5xl leading-tight text-foreground mb-4 text-balance ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            Areas de Atuacao
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.6s', animationFillMode: 'forwards' } : {}}>
            Atendimento especializado para criancas com diferentes necessidades de desenvolvimento
          </p>
        </div>

        {/* Bento Grid */}
        <div 
          ref={bentoRef}
          className="grid md:grid-cols-4 mb-20 md:grid-rows-[280px_280px] gap-6"
        >
          {/* Left Large Block - Image */}
          <div 
            className={`relative rounded-3xl overflow-hidden h-[400px] md:h-auto md:col-span-2 md:row-span-2 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <Image
              src="/images/therapy-sensory.jpg"
              alt="Ambiente de terapia sensorial"
              fill
              className="object-cover"
            />
            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 shadow-lg rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg text-foreground mb-1 font-medium">
                    Ambiente Acolhedor
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Espaco projetado para estimular o desenvolvimento de forma ludica e segura.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right - Motor Skills */}
          <div 
            className={`rounded-3xl p-6 md:p-8 flex flex-col justify-center md:col-span-2 relative overflow-hidden transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Background Image */}
            <Image
              src="/images/therapy-motor.jpg"
              alt="Desenvolvimento motor"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/40" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl text-white mb-2">
                Coordenacao Motora
              </h3>
              <h3 className="text-xl md:text-2xl text-white/70 mb-4">
                Fina e Ampla
              </h3>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <span>Escrita e Recorte</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <span>Equilibrio e Postura</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <span>Planejamento Motor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right - AVDs */}
          <div 
            className={`rounded-3xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden md:col-span-2 bg-primary transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative z-10 flex flex-col justify-center h-full text-left items-start">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-sans text-base mb-1 text-white/80">
                Atividades de
              </h3>
              <h3 className="text-2xl md:text-3xl mb-2 text-white">
                Vida Diaria
              </h3>
              <p className="text-sm text-white/70 max-w-xs">
                Desenvolvimento de independencia em autocuidado, alimentacao e organizacao.
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div 
          id="sobre"
          ref={aboutSectionRef}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center my-0 py-20"
        >
          {/* Image */}
          <div 
            className={`relative aspect-[4/5] rounded-3xl overflow-hidden vivi-shadow transition-all duration-700 ease-out ${
              isAboutVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <Image
              src="/images/vitoria-portrait.jpg"
              alt="Vitoria Vizzotto Moreira"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 ease-out ${
              isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${isAboutVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={isAboutVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
              Sobre Mim
            </span>
            <h2 className={`font-serif text-4xl leading-tight text-foreground mb-6 text-balance md:text-5xl ${isAboutVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={isAboutVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
              Vitoria Vizzotto Moreira
            </h2>
            <p className={`text-lg text-muted-foreground leading-relaxed mb-6 ${isAboutVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={isAboutVisible ? { animationDelay: '0.6s', animationFillMode: 'forwards' } : {}}>
              Sou Terapeuta Ocupacional com especializacao em Integracao Sensorial, focada no desenvolvimento infantil de criancas com autismo, TDAH e atrasos no desenvolvimento.
            </p>
            <p className={`text-muted-foreground leading-relaxed mb-10 ${isAboutVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={isAboutVisible ? { animationDelay: '0.8s', animationFillMode: 'forwards' } : {}}>
              Minha missao e ajudar cada crianca a alcancar seu maximo potencial atraves de intervencoes ludicas, baseadas em evidencias e adaptadas as necessidades individuais de cada familia.
            </p>

            {/* Service Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group p-5 vivi-transition hover:scale-[1.02] rounded-2xl bg-card vivi-shadow"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 group-hover:bg-primary/20 vivi-transition bg-primary/10">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
