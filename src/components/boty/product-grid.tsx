"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./cart-context";

type Category = "sensorial" | "motor" | "visual" | "ebooks";

const products = [
  // Sensorial
  {
    id: "kit-sensorial-completo",
    name: "Kit Sensorial Completo",
    description: "Bolas tacteis, texturas e fidgets variados",
    price: 189,
    originalPrice: 220,
    image: "/images/products/sensory-kit.jpg",
    badge: "Mais Vendido",
    category: "sensorial" as Category,
  },
  {
    id: "massinha-terapeutica",
    name: "Massinha Terapeutica",
    description: "Kit com 6 cores e ferramentas",
    price: 59,
    originalPrice: null,
    image: "/images/products/therapy-dough.jpg",
    badge: null,
    category: "sensorial" as Category,
  },
  {
    id: "prancha-equilibrio",
    name: "Prancha de Equilibrio",
    description: "Madeira natural, ideal para propriocepcao",
    price: 149,
    originalPrice: null,
    image: "/images/products/balance-board.jpg",
    badge: "Novo",
    category: "sensorial" as Category,
  },
  {
    id: "kit-texturas",
    name: "Kit de Texturas",
    description: "12 texturas diferentes para exploracao",
    price: 89,
    originalPrice: null,
    image: "/images/products/sensory-kit.jpg",
    badge: null,
    category: "sensorial" as Category,
  },
  // Motor
  {
    id: "kit-coordenacao-fina",
    name: "Kit Coordenacao Fina",
    description: "Alinhavo, pincas e pecas pequenas",
    price: 129,
    originalPrice: null,
    image: "/images/products/motor-kit.jpg",
    badge: "Mais Vendido",
    category: "motor" as Category,
  },
  {
    id: "tesouras-adaptadas",
    name: "Tesouras Adaptadas",
    description: "Kit com 4 tesouras ergonomicas",
    price: 79,
    originalPrice: null,
    image: "/images/products/motor-kit.jpg",
    badge: null,
    category: "motor" as Category,
  },
  {
    id: "kit-preensao",
    name: "Kit Treino de Preensao",
    description: "Adaptadores e exercitadores de mao",
    price: 99,
    originalPrice: 120,
    image: "/images/products/motor-kit.jpg",
    badge: "Promocao",
    category: "motor" as Category,
  },
  {
    id: "kit-escrita",
    name: "Kit Pre-Escrita",
    description: "Materiais para desenvolvimento grafomotor",
    price: 119,
    originalPrice: null,
    image: "/images/products/motor-kit.jpg",
    badge: "Novo",
    category: "motor" as Category,
  },
  // Visual
  {
    id: "cartoes-rotina",
    name: "Cartoes de Rotina Visual",
    description: "50 cartoes plastificados com atividades",
    price: 89,
    originalPrice: null,
    image: "/images/products/visual-cards.jpg",
    badge: "Mais Vendido",
    category: "visual" as Category,
  },
  {
    id: "cartoes-emocoes",
    name: "Cartoes de Emocoes",
    description: "30 cartoes para reconhecimento emocional",
    price: 69,
    originalPrice: null,
    image: "/images/products/emotion-cards.jpg",
    badge: null,
    category: "visual" as Category,
  },
  {
    id: "quadro-rotina",
    name: "Quadro de Rotina",
    description: "Quadro magnetico com cartoes removiveis",
    price: 159,
    originalPrice: null,
    image: "/images/products/visual-cards.jpg",
    badge: "Novo",
    category: "visual" as Category,
  },
  {
    id: "kit-pecs",
    name: "Kit PECS Iniciante",
    description: "Sistema de comunicacao por troca de figuras",
    price: 199,
    originalPrice: 240,
    image: "/images/products/emotion-cards.jpg",
    badge: "Promocao",
    category: "visual" as Category,
  },
  // E-books
  {
    id: "ebook-integracao-sensorial",
    name: "E-book Integracao Sensorial",
    description: "Guia completo para pais sobre processamento sensorial",
    price: 47,
    originalPrice: 67,
    image: "/images/products/ebook-sensorial.jpg",
    badge: "Mais Vendido",
    category: "ebooks" as Category,
  },
  {
    id: "ebook-rotina-visual",
    name: "E-book Rotina Visual em Casa",
    description: "Como criar e implementar rotinas visuais",
    price: 37,
    originalPrice: null,
    image: "/images/products/ebook-rotina.jpg",
    badge: "Novo",
    category: "ebooks" as Category,
  },
  {
    id: "ebook-atividades-motoras",
    name: "E-book Atividades Motoras",
    description: "50 atividades para fazer em casa",
    price: 39,
    originalPrice: null,
    image: "/images/products/ebook-motor.jpg",
    badge: null,
    category: "ebooks" as Category,
  },
  {
    id: "ebook-entendendo-autismo",
    name: "E-book Entendendo o Autismo",
    description: "Guia pratico para familias",
    price: 57,
    originalPrice: 79,
    image: "/images/products/ebook-autismo.jpg",
    badge: "Promocao",
    category: "ebooks" as Category,
  },
];

const categories = [
  { value: "sensorial" as Category, label: "Sensorial" },
  { value: "motor" as Category, label: "Motor" },
  { value: "visual" as Category, label: "Visual" },
  { value: "ebooks" as Category, label: "E-books" },
];

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("sensorial");
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory,
  );

  const handleCategoryChange = (category: Category) => {
    if (category !== selectedCategory) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedCategory(category);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }
  };

  // Preload all product images on mount
  useEffect(() => {
    products.forEach((product) => {
      const img = new window.Image();
      img.src = product.image;
    });
  }, []);

  useEffect(() => {
    const gridObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (gridRef.current) {
      gridObserver.observe(gridRef.current);
    }

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    return () => {
      if (gridRef.current) {
        gridObserver.unobserve(gridRef.current);
      }
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section id="materiais" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={
              headerVisible
                ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                : {}
            }
          >
            Materiais e E-books
          </span>
          <h2
            className={`font-serif leading-tight text-foreground mb-4 text-balance text-4xl md:text-5xl ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={
              headerVisible
                ? { animationDelay: "0.4s", animationFillMode: "forwards" }
                : {}
            }
          >
            Recursos para o desenvolvimento
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-xl mx-auto ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={
              headerVisible
                ? { animationDelay: "0.6s", animationFillMode: "forwards" }
                : {}
            }
          >
            Materiais e e-books selecionados para potencializar a terapia e
            continuar o trabalho em casa
          </p>
        </div>

        {/* Segmented Control */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-background rounded-full p-1 gap-1 relative vivi-shadow">
            {/* Animated background slide */}
            <div
              className="absolute top-1 bottom-1 bg-primary rounded-full transition-all duration-300 ease-out shadow-sm"
              style={{
                left:
                  selectedCategory === "sensorial"
                    ? "4px"
                    : selectedCategory === "motor"
                      ? "calc(25% + 1px)"
                      : selectedCategory === "visual"
                        ? "calc(50%)"
                        : "calc(75% - 1px)",
                width: "calc(25% - 4px)",
              }}
            />
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => handleCategoryChange(category.value)}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Link
              key={`${selectedCategory}-${product.id}`}
              href={`/product/${product.id}`}
              className={`group transition-all duration-500 ease-out ${
                isVisible && !isTransitioning
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: isTransitioning ? "0ms" : `${index * 80}ms`,
              }}
            >
              <div className="bg-background rounded-2xl overflow-hidden vivi-shadow vivi-transition group-hover:scale-[1.02]">
                {/* Image */}
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover vivi-transition group-hover:scale-105"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs tracking-wide ${
                        product.badge === "Promocao"
                          ? "bg-destructive/10 text-destructive"
                          : product.badge === "Novo"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent text-accent-foreground"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                  {/* Quick add button */}
                  <button
                    type="button"
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 vivi-transition vivi-shadow"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        image: product.image,
                      });
                    }}
                    aria-label="Adicionar ao carrinho"
                  >
                    <ShoppingBag className="w-4 h-4 text-foreground" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">
                      R$ {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        R$ {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm tracking-wide vivi-transition hover:bg-foreground/5"
          >
            Ver Todos os Materiais
          </Link>
        </div>
      </div>
    </section>
  );
}
