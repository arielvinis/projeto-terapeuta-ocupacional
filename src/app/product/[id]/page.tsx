"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ChevronLeft,
  Minus,
  Plus,
  ChevronDown,
  Heart,
  Award,
  Package,
  Star,
  Check,
  Baby,
} from "lucide-react";
import { Header } from "@/src/components/boty/header";
import { Footer } from "@/src/components/boty/footer";
import { useCart } from "@/src/components/boty/cart-context";

const products: Record<
  string,
  {
    id: string;
    name: string;
    tagline: string;
    description: string;
    price: number;
    originalPrice: number | null;
    image: string;
    sizes?: string[];
    details: string;
    howToUse: string;
    contents: string;
    delivery: string;
  }
> = {
  "kit-sensorial-completo": {
    id: "kit-sensorial-completo",
    name: "Kit Sensorial Completo",
    tagline: "Estimulacao sensorial para o desenvolvimento",
    description:
      "Um kit completo com materiais sensoriais variados para estimular o processamento sensorial em criancas. Ideal para uso em terapia e em casa.",
    price: 189,
    originalPrice: 220,
    image: "/images/products/sensory-kit.jpg",
    details:
      "O Kit Sensorial Completo inclui bolas tacteis de diferentes texturas, fidgets anti-stress, massas sensoriais e materiais para estimulacao proprioceptiva e vestibular. Desenvolvido em parceria com terapeutas ocupacionais para uso profissional e domiciliar.",
    howToUse:
      "Apresente os materiais gradualmente para a crianca. Use sob supervisao de um adulto. Limpe os materiais com pano umido apos o uso. Siga as orientacoes da terapeuta ocupacional para atividades especificas.",
    contents:
      "8 bolas tacteis de texturas variadas, 4 fidgets anti-stress, 2 massinhas sensoriais, 1 escova sensorial, 1 bolsa organizadora, 1 guia de atividades em PDF.",
    delivery:
      "Envio em ate 3 dias uteis. Frete gratis para compras acima de R$ 200. Devolucao em ate 7 dias se o produto estiver lacrado.",
  },
  "kit-coordenacao-fina": {
    id: "kit-coordenacao-fina",
    name: "Kit Coordenacao Fina",
    tagline: "Desenvolvendo habilidades de precisao",
    description:
      "Materiais especializados para o desenvolvimento da coordenacao motora fina, essencial para escrita, recorte e atividades de vida diaria.",
    price: 129,
    originalPrice: null,
    image: "/images/products/motor-kit.jpg",
    details:
      "Este kit foi desenvolvido para auxiliar criancas no desenvolvimento de habilidades de coordenacao motora fina. Inclui atividades de alinhavo, uso de pincas, manipulacao de pecas pequenas e exercicios de preensao.",
    howToUse:
      "Comece com atividades mais simples e avance gradualmente. Supervisione sempre a crianca durante o uso. As atividades podem ser adaptadas conforme a necessidade de cada crianca.",
    contents:
      "6 placas de alinhavo, 3 tipos de pincas, conjunto de contas para enfiamento, 20 pecas de encaixe, 1 tapete de atividades, 1 guia de progressao.",
    delivery:
      "Envio em ate 3 dias uteis. Frete gratis para compras acima de R$ 200. Devolucao em ate 7 dias se o produto estiver lacrado.",
  },
  "cartoes-rotina": {
    id: "cartoes-rotina",
    name: "Cartoes de Rotina Visual",
    tagline: "Organizacao visual para o dia a dia",
    description:
      "Cartoes plastificados com imagens de atividades diarias para ajudar criancas a compreenderem e seguirem rotinas de forma visual.",
    price: 89,
    originalPrice: null,
    image: "/images/products/visual-cards.jpg",
    details:
      "Os cartoes de rotina visual sao uma ferramenta essencial para criancas que se beneficiam de apoio visual. As ilustracoes sao claras e coloridas, facilitando a compreensao e a previsibilidade do dia a dia.",
    howToUse:
      "Monte a rotina do dia em um painel ou linha do tempo visual. Revise com a crianca no inicio de cada periodo. Remova os cartoes conforme as atividades forem concluidas.",
    contents:
      "50 cartoes plastificados 8x8cm, 1 painel de feltro para fixacao, fitas de velcro adesivas, 1 suporte de mesa, 1 guia de implementacao.",
    delivery:
      "Envio em ate 3 dias uteis. Frete gratis para compras acima de R$ 200. Devolucao em ate 7 dias se o produto estiver lacrado.",
  },
  "cartoes-emocoes": {
    id: "cartoes-emocoes",
    name: "Cartoes de Emocoes",
    tagline: "Aprendendo a identificar sentimentos",
    description:
      "Cartoes ilustrados para ajudar criancas a reconhecer e expressar emocoes, fundamentais para o desenvolvimento socioemocional.",
    price: 69,
    originalPrice: null,
    image: "/images/products/emotion-cards.jpg",
    details:
      "Este conjunto de cartoes foi desenvolvido para auxiliar no reconhecimento e expressao emocional. Cada cartao traz uma ilustracao clara de uma emocao e sugestoes de conversas e atividades relacionadas.",
    howToUse:
      "Use durante conversas sobre sentimentos, leitura de historias ou momentos de regulacao emocional. Deixe os cartoes acessiveis para a crianca apontar quando precisar comunicar como se sente.",
    contents:
      "30 cartoes de emocoes plastificados, 1 espelho infantil, 1 dado das emocoes, 1 livro de atividades complementares.",
    delivery:
      "Envio em ate 3 dias uteis. Frete gratis para compras acima de R$ 200. Devolucao em ate 7 dias se o produto estiver lacrado.",
  },
  "massinha-terapeutica": {
    id: "massinha-terapeutica",
    name: "Massinha Terapeutica",
    tagline: "Fortalecimento e criatividade",
    description:
      "Massinha especial com diferentes resistencias para fortalecimento de maos e desenvolvimento da criatividade.",
    price: 59,
    originalPrice: null,
    image: "/images/products/therapy-dough.jpg",
    details:
      "A massinha terapeutica foi formulada especialmente para uso em terapia ocupacional, com diferentes niveis de resistencia para exercicios de fortalecimento. Nao toxica e hipoalergenica.",
    howToUse:
      "Use para exercicios de apertar, modelar e manipular. Guarde em recipiente fechado apos o uso. Lave as maos antes e depois de brincar.",
    contents:
      "6 potes de massinha em cores diferentes, cada um com resistencia especifica (extra macia a firme), 8 ferramentas de modelagem, 1 tapete de silicone.",
    delivery:
      "Envio em ate 3 dias uteis. Frete gratis para compras acima de R$ 200. Devolucao em ate 7 dias se o produto estiver lacrado.",
  },
  "prancha-equilibrio": {
    id: "prancha-equilibrio",
    name: "Prancha de Equilibrio",
    tagline: "Desafios para o sistema vestibular",
    description:
      "Prancha de madeira natural para atividades de equilibrio e estimulacao vestibular, essencial para o desenvolvimento motor.",
    price: 149,
    originalPrice: null,
    image: "/images/products/balance-board.jpg",
    details:
      "A prancha de equilibrio estimula o sistema vestibular e desenvolve a coordenacao, equilibrio e forca muscular. Feita em madeira de reflorestamento com acabamento atxico.",
    howToUse:
      "Use sempre sob supervisao de um adulto. Comece com apoio e va reduzindo gradualmente. Pode ser usada em pe, sentado ou deitado para diferentes atividades.",
    contents:
      "1 prancha de equilibrio em madeira (80x30cm), 1 tapete antiderrapante, 1 guia de atividades ilustrado.",
    delivery:
      "Envio em ate 5 dias uteis (produto maior). Frete calculado no checkout. Devolucao em ate 7 dias se o produto estiver na embalagem original.",
  },
};

const benefits = [
  { icon: Baby, label: "Seguro para Criancas" },
  { icon: Heart, label: "Desenvolvido por T.O." },
  { icon: Package, label: "Envio Seguro" },
  { icon: Award, label: "Qualidade Premium" },
];

type AccordionSection = "details" | "howToUse" | "contents" | "delivery";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products[productId] || products["kit-sensorial-completo"];
  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<AccordionSection | null>(
    "details",
  );
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const toggleAccordion = (section: AccordionSection) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      description: product.tagline,
      price: product.price,
      image: product.image,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const accordionItems: {
    key: AccordionSection;
    title: string;
    content: string;
  }[] = [
    { key: "details", title: "Detalhes", content: product.details },
    { key: "howToUse", title: "Como Usar", content: product.howToUse },
    { key: "contents", title: "O que esta incluso", content: product.contents },
    {
      key: "delivery",
      title: "Entrega e Devolucao",
      content: product.delivery,
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground vivi-transition mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar para Loja
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-card vivi-shadow">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              {/* Header */}
              <div className="mb-8">
                <span className="text-sm tracking-[0.3em] uppercase text-primary mb-2 block">
                  Materiais Terapeuticos
                </span>
                <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground italic mb-4">
                  {product.tagline}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    (42 avaliacoes)
                  </span>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl font-medium text-foreground">
                  R$ {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    R$ {product.originalPrice}
                  </span>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Quantidade
                </label>
                <div className="inline-flex items-center gap-4 bg-card rounded-full px-2 py-2 vivi-shadow">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground vivi-transition"
                    aria-label="Diminuir quantidade"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium text-foreground">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground vivi-transition"
                    aria-label="Aumentar quantidade"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm tracking-wide vivi-transition vivi-shadow ${
                    isAdded
                      ? "bg-primary/80 text-primary-foreground"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      Adicionado ao Carrinho
                    </>
                  ) : (
                    "Adicionar ao Carrinho"
                  )}
                </button>
                <button
                  type="button"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm tracking-wide vivi-transition hover:bg-foreground/5"
                >
                  Comprar Agora
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.label}
                    className="flex flex-col items-center gap-2 p-4 vivi-shadow bg-transparent shadow-none rounded-md"
                  >
                    <benefit.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground text-center">
                      {benefit.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Accordion */}
              <div className="border-t border-border/50">
                {accordionItems.map((item) => (
                  <div key={item.key} className="border-b border-border/50">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.key)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="font-medium text-foreground">
                        {item.title}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground vivi-transition ${
                          openAccordion === item.key ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden vivi-transition ${
                        openAccordion === item.key ? "max-h-96 pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
