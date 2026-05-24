"use client"

import React from "react"
import { useState } from "react"
import { ArrowRight, Check, Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-foreground mb-4 text-balance">
            Receba dicas e conteudos exclusivos
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Assine nossa newsletter e receba orientacoes sobre desenvolvimento infantil, atividades terapeuticas para fazer em casa e novidades.
          </p>

          {isSubscribed ? (
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-8 py-4">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground">Obrigada por se inscrever!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-background border border-border rounded-full px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary vivi-transition"
                required
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm tracking-wide vivi-transition hover:bg-primary/90"
              >
                Inscrever
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 vivi-transition" />
              </button>
            </form>
          )}

          <p className="text-sm text-muted-foreground mt-6">
            Respeitamos sua privacidade. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  )
}
