"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Ana Paula S.",
    location: "Mae do Lucas, 6 anos",
    text: "A Vitoria transformou a vida do meu filho. Ele evoluiu muito na coordenacao e agora consegue acompanhar a escola.",
    service: "Autismo"
  },
  {
    id: 2,
    name: "Fernanda M.",
    location: "Mae da Sofia, 4 anos",
    text: "Profissional incrivel! A abordagem ludica faz toda diferenca. Minha filha adora as sessoes e evolui a cada dia.",
    service: "TDAH"
  },
  {
    id: 3,
    name: "Carolina R.",
    location: "Mae do Pedro, 5 anos",
    text: "As orientacoes para casa nos ajudaram muito. Hoje o Pedro esta muito mais independente nas atividades do dia a dia.",
    service: "Desenvolvimento Motor"
  },
  {
    id: 4,
    name: "Juliana L.",
    location: "Mae da Laura, 3 anos",
    text: "Encontrar a Vitoria foi uma bencao. Ela entende cada crianca de forma unica e personaliza todo o atendimento.",
    service: "Estimulacao Precoce"
  },
  {
    id: 5,
    name: "Patricia K.",
    location: "Mae do Theo, 7 anos",
    text: "O acompanhamento familiar e excepcional. Nos sentimos acolhidos e orientados em cada etapa do tratamento.",
    service: "Orientacao Familiar"
  },
  {
    id: 6,
    name: "Mariana B.",
    location: "Mae do Gabriel, 5 anos",
    text: "A evolucao na escrita foi impressionante. A terapia mudou completamente a relacao dele com a escola.",
    service: "Coordenacao Motora"
  },
  {
    id: 7,
    name: "Camila T.",
    location: "Mae da Isabela, 4 anos",
    text: "A integracao sensorial fez uma diferenca enorme. Minha filha agora aceita muito melhor diferentes texturas.",
    service: "Integracao Sensorial"
  },
  {
    id: 8,
    name: "Renata A.",
    location: "Mae do Henrique, 6 anos",
    text: "Profissionalismo aliado a muito carinho. A Vitoria tem um dom especial com as criancas.",
    service: "Autismo"
  },
  {
    id: 9,
    name: "Luciana D.",
    location: "Mae do Miguel, 5 anos",
    text: "Os materiais e recursos usados sao incriveis. Cada sessao e uma experiencia rica em aprendizado.",
    service: "TDAH"
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="rounded-2xl p-6 bg-white mb-4 flex-shrink-0 vivi-shadow">
    {/* Quote */}
    <p className="text-foreground/80 leading-relaxed mb-4 text-pretty font-medium text-lg font-serif tracking-wide">
      &ldquo;{testimonial.text}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-start justify-between gap-2">
      <div>
        <p className="text-foreground text-sm font-bold">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
      </div>
      <span className="text-xs tracking-wide text-primary/70 bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
        {testimonial.service}
      </span>
    </div>
  </div>
)

export function Testimonials() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  
  const column1 = [testimonials[0], testimonials[3], testimonials[6]]
  const column2 = [testimonials[1], testimonials[4], testimonials[7]]
  const column3 = [testimonials[2], testimonials[5], testimonials[8]]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <section id="depoimentos" className="py-24 bg-background overflow-hidden pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            Depoimentos
          </span>
          <h2 className={`font-serif text-4xl md:text-5xl leading-tight text-foreground text-balance ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            O que dizem as familias
          </h2>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
          
          {/* Mobile - Single Column */}
          <div className="md:hidden h-[600px]">
            <div className="relative overflow-hidden h-full">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <TestimonialCard key={`mobile-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop - Three Columns */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 h-[600px]">
            {/* Column 1 - Scrolling Down */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column1, ...column1].map((testimonial, index) => (
                  <TestimonialCard key={`col1-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Column 2 - Scrolling Up */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-up hover:animate-scroll-up-slow">
                {[...column2, ...column2].map((testimonial, index) => (
                  <TestimonialCard key={`col2-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Column 3 - Scrolling Down */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column3, ...column3].map((testimonial, index) => (
                  <TestimonialCard key={`col3-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }

        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }

        .animate-scroll-down-slow {
          animation: scroll-down 60s linear infinite;
        }

        .animate-scroll-up-slow {
          animation: scroll-up 60s linear infinite;
        }
      `}</style>
    </section>
  )
}
