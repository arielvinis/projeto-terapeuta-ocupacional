"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Heart, Hand, Users } from "lucide-react"

const badges = [
  {
    icon: Brain,
    title: "Autismo e TDAH",
    description: "Intervencoes especializadas"
  },
  {
    icon: Hand,
    title: "Desenvolvimento Motor",
    description: "Coordenacao e habilidades"
  },
  {
    icon: Heart,
    title: "Abordagem Acolhedora",
    description: "Ambiente seguro e ludico"
  },
  {
    icon: Users,
    title: "Orientacao Familiar",
    description: "Suporte para toda familia"
  }
]

export function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className={`bg-card p-6 lg:p-8 text-center rounded-2xl transition-all duration-700 ease-out vivi-shadow ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <badge.icon className="text-primary mb-4 mx-auto size-12" strokeWidth={1.5} />
              <h3 className="font-serif text-foreground mb-2 text-xl">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
