"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, SlidersHorizontal, X } from "lucide-react";
import { Header } from "@/src/components/boty/header";
import { Footer } from "@/src/components/boty/footer";
import { useCart } from "@/src/components/boty/cart-context";

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
    category: "sensorial",
  },
  {
    id: "massinha-terapeutica",
    name: "Massinha Terapeutica",
    description: "Kit com 6 cores e ferramentas",
    price: 59,
    originalPrice: null,
    image: "/images/products/therapy-dough.jpg",
    badge: null,
    category: "sensorial",
  },
  {
    id: "prancha-equilibrio",
    name: "Prancha de Equilibrio",
    description: "Madeira natural, ideal para propriocepcao",
    price: 149,
    originalPrice: null,
    image: "/images/products/balance-board.jpg",
    badge: "Novo",
    category: "sensorial",
  },
  {
    id: "kit-texturas",
    name: "Kit de Texturas",
    description: "12 texturas diferentes para exploracao",
    price: 89,
    originalPrice: null,
    image: "/images/products/sensory-kit.jpg",
    badge: null,
    category: "sensorial",
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
    category: "motor",
  },
  {
    id: "tesouras-adaptadas",
    name: "Tesouras Adaptadas",
    description: "Kit com 4 tesouras ergonomicas",
    price: 79,
    originalPrice: null,
    image: "/images/products/motor-kit.jpg",
    badge: null,
    category: "motor",
  },
  {
    id: "kit-preensao",
    name: "Kit Treino de Preensao",
    description: "Adaptadores e exercitadores de mao",
    price: 99,
    originalPrice: 120,
    image: "/images/products/motor-kit.jpg",
    badge: "Promocao",
    category: "motor",
  },
  {
    id: "kit-escrita",
    name: "Kit Pre-Escrita",
    description: "Materiais para desenvolvimento grafomotor",
    price: 119,
    originalPrice: null,
    image: "/images/products/motor-kit.jpg",
    badge: "Novo",
    category: "motor",
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
    category: "visual",
  },
  {
    id: "cartoes-emocoes",
    name: "Cartoes de Emocoes",
    description: "30 cartoes para reconhecimento emocional",
    price: 69,
    originalPrice: null,
    image: "/images/products/emotion-cards.jpg",
    badge: null,
    category: "visual",
  },
  {
    id: "quadro-rotina",
    name: "Quadro de Rotina",
    description: "Quadro magnetico com cartoes removiveis",
    price: 159,
    originalPrice: null,
    image: "/images/products/visual-cards.jpg",
    badge: "Novo",
    category: "visual",
  },
  {
    id: "kit-pecs",
    name: "Kit PECS Iniciante",
    description: "Sistema de comunicacao por troca de figuras",
    price: 199,
    originalPrice: 240,
    image: "/images/products/emotion-cards.jpg",
    badge: "Promocao",
    category: "visual",
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
    category: "ebooks",
  },
  {
    id: "ebook-rotina-visual",
    name: "E-book Rotina Visual em Casa",
    description: "Como criar e implementar rotinas visuais",
    price: 37,
    originalPrice: null,
    image: "/images/products/ebook-rotina.jpg",
    badge: "Novo",
    category: "ebooks",
  },
  {
    id: "ebook-atividades-motoras",
    name: "E-book Atividades Motoras",
    description: "50 atividades para fazer em casa",
    price: 39,
    originalPrice: null,
    image: "/images/products/ebook-motor.jpg",
    badge: null,
    category: "ebooks",
  },
  {
    id: "ebook-entendendo-autismo",
    name: "E-book Entendendo o Autismo",
    description: "Guia pratico para familias",
    price: 57,
    originalPrice: 79,
    image: "/images/products/ebook-autismo.jpg",
    badge: "Promocao",
    category: "ebooks",
  },
];

const categories = [
  { value: "all", label: "Todos" },
  { value: "sensorial", label: "Sensorial" },
  { value: "motor", label: "Motor" },
  { value: "visual", label: "Visual" },
  { value: "ebooks", label: "E-books" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  // Reset animation when category changes
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Materiais e E-books
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
              Loja
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Recursos e e-books selecionados para potencializar o
              desenvolvimento infantil
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-border/50">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden inline-flex items-center gap-2 text-sm text-foreground"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtros
            </button>

            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm capitalize vivi-transition bg-popover ${
                    selectedCategory === category.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground/70 hover:text-foreground vivi-shadow"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <span className="text-sm text-muted-foreground">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "produto" : "produtos"}
            </span>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50 bg-background">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-2xl text-foreground">
                    Filtros
                  </h2>
                  <button
                    type="button"
                    onClick={() => setShowFilters(false)}
                    className="p-2 text-foreground/70 hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category.value);
                        setShowFilters(false);
                      }}
                      className={`w-full px-6 py-4 rounded-2xl text-left capitalize vivi-transition ${
                        selectedCategory === category.value
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-foreground vivi-shadow"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div
            ref={gridRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                isVisible={isVisible}
                onAddToCart={() =>
                  addItem({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    image: product.image,
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function ProductCard({
  product,
  index,
  isVisible,
  onAddToCart,
}: {
  product: (typeof products)[0];
  index: number;
  isVisible: boolean;
  onAddToCart: () => void;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      href={`/product/${product.id}`}
      className={`group transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-card rounded-2xl overflow-hidden vivi-shadow vivi-transition group-hover:scale-[1.02]">
        {/* Image */}
        <div className="relative aspect-square bg-muted overflow-hidden">
          {/* Skeleton */}
          <div
            className={`absolute inset-0 bg-linear-to-br from-muted via-muted/50 to-muted animate-pulse transition-opacity duration-500 ${
              imageLoaded ? "opacity-0" : "opacity-100"
            }`}
          />

          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover vivi-transition group-hover:scale-105 transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
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
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 vivi-transition vivi-shadow"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAddToCart();
            }}
            aria-label="Adicionar ao carrinho"
          >
            <ShoppingBag className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="font-serif text-xl text-foreground mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {product.description}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-foreground">
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
  );
}
