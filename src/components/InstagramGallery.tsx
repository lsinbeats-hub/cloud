import React, { useState, useRef } from "react";
import { AGENCY_CONFIG } from "../config/agency.ts";
import { useSiteImages, SiteImages, DEFAULT_IMAGES } from "../context/ImageContext.tsx";
import { Instagram, Heart, MessageCircle, ArrowUpRight, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal.tsx";

interface InstagramPost {
  id: string;
  imageKey: keyof SiteImages;
  category: string;
  caption: string;
  likes: number;
  comments: number;
  tag: string;
}

export const InstagramGallery: React.FC = () => {
  const { images, setIsManagerOpen, setTargetKeyForEdit } = useSiteImages();
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const posts: InstagramPost[] = [
    {
      id: "post-1",
      imageKey: "instagram_1",
      category: "Identidade & 3D",
      tag: "Branding",
      caption: "A presença digital da sua empresa começa na primeira impressão. Design exclusivo e posicionamento de alto valor.",
      likes: 184,
      comments: 29,
    },
    {
      id: "post-2",
      imageKey: "instagram_2",
      category: "Desenvolvimento Web",
      tag: "Landing Page",
      caption: "Landing page de alta conversão entregue com foco em agendamentos diretos pelo WhatsApp. Design limpo e responsivo.",
      likes: 247,
      comments: 38,
    },
    {
      id: "post-3",
      imageKey: "instagram_3",
      category: "Bastidores",
      tag: "Processo",
      caption: "Alinhando briefing e arquitetura técnica para novos clientes. Todo projeto segue prazos rigorosos em dias úteis.",
      likes: 312,
      comments: 45,
    },
    {
      id: "post-4",
      imageKey: "instagram_4",
      category: "Automação & IA",
      tag: "Chatbot WhatsApp",
      caption: "Atendimento automático e inteligente 24/7. Responda dúvidas frequentes e transfira contatos qualificados para a equipe.",
      likes: 219,
      comments: 31,
    },
    {
      id: "post-5",
      imageKey: "instagram_5",
      category: "E-commerce & Catálogo",
      tag: "Site Completo",
      caption: "Catálogo de até 30 produtos com pedidos enviados direto para o WhatsApp comercial, sem intermediários ou taxas.",
      likes: 195,
      comments: 24,
    },
    {
      id: "post-6",
      imageKey: "instagram_6",
      category: "Design para Redes",
      tag: "Artes Feed & Stories",
      caption: "Campanhas visuais que geram retenção e valorizam promoções sazonais. Peças com tipografia marcante e contraste estudado.",
      likes: 278,
      comments: 42,
    },
    {
      id: "post-7",
      imageKey: "instagram_7",
      category: "Presença no Google",
      tag: "Google Maps",
      caption: "Organização completa do Perfil da Empresa no Google. Fotos em alta resolução, horários corretos e rotas diretas.",
      likes: 164,
      comments: 18,
    },
    {
      id: "post-8",
      imageKey: "instagram_8",
      category: "Alta Performance",
      tag: "Cloud Creative",
      caption: "Tecnologia de ponta para empresas que buscam transformar visitantes em clientes qualificados todos os dias.",
      likes: 340,
      comments: 52,
    },
  ];

  // Funções de rolagem pelas setas
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section id="instagram" className="py-16 md:py-20 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Galeria do Instagram com Setas de Navegação */}
        <ScrollReveal animation="fade-down" delay={60}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-5 border-b border-slate-900">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-blue-400 mb-2">
                <Instagram className="w-3.5 h-3.5 text-blue-500" />
                <span>SIGA NOSSO INSTAGRAM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                Galeria @{AGENCY_CONFIG.instagramUsername}
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal">
                Acompanhe nossos lançamentos, conceitos de design, novidades e bastidores da agência.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
              <a
                href={AGENCY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-black bg-white hover:bg-slate-200 rounded-xl transition-all shadow-md hover:-translate-y-0.5"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span className="hidden sm:inline">Seguir no Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Carrossel com Setas Laterais e Rolagem Suave */}
        <div className="relative group">
          
          {/* Botão Seta Flutuante Esquerda */}
          <button
            type="button"
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-2xl border border-slate-700/80 transition-all duration-200 hover:scale-110 active:scale-95 opacity-90 group-hover:opacity-100"
            aria-label="Rolar anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botão Seta Flutuante Direita */}
          <button
            type="button"
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-2xl border border-slate-700/80 transition-all duration-200 hover:scale-110 active:scale-95 opacity-90 group-hover:opacity-100"
            aria-label="Rolar próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Container Carrossel com Rolagem Horizontal e Snap */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-3 px-1"
            tabIndex={0}
            role="region"
            aria-label="Carrossel de postagens do Instagram"
          >
            {posts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group/card relative cursor-pointer shrink-0 w-64 sm:w-72 aspect-square snap-start rounded-xl overflow-hidden bg-black border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/15"
              >
                <img
                  src={images[post.imageKey] || DEFAULT_IMAGES[post.imageKey]}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  loading="lazy"
                />

                {/* Tag Superior */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-black/85 backdrop-blur-xs text-white rounded">
                    {post.tag}
                  </span>
                </div>

                {/* Overlay no Hover com Likes e Comentários estilo Instagram */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-center">
                  <div className="flex items-center gap-3 text-white text-xs font-bold font-mono mb-2">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-200 line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>

                  <span className="mt-3 text-[10px] font-black uppercase tracking-wider text-blue-400">
                    Ver Detalhes →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Rodapé da Galeria com Instrução */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 border-t border-slate-900 pt-4">
          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-slate-200">@sigacloudcreative</span>
          </div>

          <div className="text-[11px] font-mono text-slate-500">
            {posts.length} publicações em destaque
          </div>
        </div>

      </div>

      {/* Modal de Detalhes do Post Ampliado */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative bg-slate-950 border border-slate-800 rounded-2xl max-w-lg w-full p-5 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Top Bar estilo Instagram */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 p-0.5">
                <img
                  src="/assets/aistudio/Cloud_logo_80bda40e.jpeg"
                  alt="Cloud Creative"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-white block leading-tight">
                  @{AGENCY_CONFIG.instagramUsername}
                </span>
                <span className="text-[10px] text-slate-400">
                  {selectedPost.category} · Cloud Creative
                </span>
              </div>
            </div>

            {/* Imagem do Post */}
            <div className="relative rounded-xl overflow-hidden aspect-square bg-black border border-slate-800 mb-3.5">
              <img
                src={images[selectedPost.imageKey] || DEFAULT_IMAGES[selectedPost.imageKey]}
                alt={selectedPost.caption}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Métricas e Legenda */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                    <span className="font-bold text-white">{selectedPost.likes} curtidas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-slate-400" />
                    <span>{selectedPost.comments} comentários</span>
                  </div>
                </div>
                <span className="text-[10px] text-blue-400 font-bold uppercase font-sans">
                  {selectedPost.tag}
                </span>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed pt-1 border-t border-slate-900">
                <strong>cloudcreative:</strong> {selectedPost.caption}
              </p>
            </div>

            {/* Ação: Ver no Instagram */}
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Gostou dessa solução?
              </span>
              <a
                href={AGENCY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Acessar Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
