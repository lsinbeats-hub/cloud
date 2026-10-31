import React, { useState } from "react";
import { Laptop, Bot, Search, Palette, X, Eye, ArrowUpRight, MessageSquare, MapPin, Phone, Globe, Star } from "lucide-react";
import { getWhatsAppUrl } from "../config/agency.ts";

export const ServiceGallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"sites" | "chatbots" | "google" | "artes">("sites");
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    category: string;
    description: string;
    image?: string;
    details: string[];
  } | null>(null);

  const tabs = [
    { id: "sites", label: "Exemplos de Sites", icon: Laptop },
    { id: "chatbots", label: "Exemplos de Chatbots", icon: Bot },
    { id: "google", label: "Exemplos do Google", icon: Search },
    { id: "artes", label: "Exemplos de Artes", icon: Palette },
  ];

  return (
    <section id="galeria" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-md">
              <span>Cloud Creative</span>
              <span aria-hidden="true" className="text-blue-400">·</span>
              <span>Galeria de Exemplos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Veja como cada serviço funciona na prática
            </h2>
            <p className="mt-2 text-sm text-blue-100 font-normal">
              Exemplos visuais para ilustrar o padrão de qualidade, acabamento e tecnologia que a Cloud Creative entrega para a sua empresa.
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-black rounded-2xl border border-white/20 shadow-xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-white text-black shadow-md scale-102"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-blue-600" : "text-blue-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: SITES */}
        {/* ========================================================= */}
        {activeTab === "sites" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {/* Site 1: Landing Page */}
            <div className="bg-black text-white rounded-2xl border border-white/20 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-white/50 transition-all">
              <div>
                {/* Browser bar */}
                <div className="bg-neutral-900 px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">exemplo-landing-page.com.br</span>
                  <div className="w-4" />
                </div>

                <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                  <img
                    src="/assets/images/portfolio_beauty_salon_1792967547885.jpg"
                    alt="Exemplo Landing Page"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                      Landing Page · R$ 650
                    </span>
                    <h3 className="text-base font-extrabold text-white leading-tight mt-0.5">
                      Página Única de Alta Conversão
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                    Layout direto e focado em apresentar os diferenciais da empresa com botão de contato prioritário no WhatsApp.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-400 border-t border-white/10 pt-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Formato 100% responsivo para celulares</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Carregamento rápido em 5 a 7 dias úteis</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de contratar a Landing Page (R$ 650) com a Cloud Creative.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white text-black hover:bg-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                >
                  <span>Pedir Landing Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Site 2: Site de Apresentação */}
            <div className="bg-black text-white rounded-2xl border-2 border-white overflow-hidden shadow-2xl flex flex-col justify-between group transition-all relative">
              <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider rounded-md">
                Mais Buscado
              </div>

              <div>
                <div className="bg-neutral-900 px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">exemplo-institucional.com.br</span>
                  <div className="w-4" />
                </div>

                <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                  <img
                    src="/assets/images/portfolio_medical_clinic_1792967548050.jpg"
                    alt="Exemplo Site de Apresentação"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                      Site de Apresentação · R$ 900
                    </span>
                    <h3 className="text-base font-extrabold text-white leading-tight mt-0.5">
                      Estrutura Institucional Completa
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                    Galeria de fotos do espaço, lista de serviços prestados, mapa com localização integrada e solicitação de agendamentos.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-400 border-t border-white/10 pt-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Galeria de fotos e trabalhos realizados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Integração de mapa e rota com Google Maps</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de contratar o Site de Apresentação (R$ 900) com a Cloud Creative.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white text-black hover:bg-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                >
                  <span>Pedir Site Apresentação</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Site 3: Site Completo */}
            <div className="bg-black text-white rounded-2xl border border-white/20 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-white/50 transition-all">
              <div>
                <div className="bg-neutral-900 px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">exemplo-catalogo.com.br</span>
                  <div className="w-4" />
                </div>

                <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                  <img
                    src="/assets/images/portfolio_artisanal_bakery_1792967548665.jpg"
                    alt="Exemplo Site Completo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                      Site Completo · R$ 1.800
                    </span>
                    <h3 className="text-base font-extrabold text-white leading-tight mt-0.5">
                      Até 5 Páginas com Catálogo
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                    Catálogo de até 30 produtos ou serviços com solicitação de pedidos enviados direto para o WhatsApp da sua empresa.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-400 border-t border-white/10 pt-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Catálogo de até 30 itens com fotos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Envio de pedidos para WhatsApp sem taxas</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de contratar o Site Completo (R$ 1.800) com a Cloud Creative.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white text-black hover:bg-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                >
                  <span>Pedir Site Completo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: CHATBOTS */}
        {/* ========================================================= */}
        {activeTab === "chatbots" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
            {/* Exemplo 1: Bot Básico */}
            <div className="bg-black text-white rounded-2xl border border-white/20 p-6 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">
                      Modelo Básico · R$ 500
                    </span>
                    <h3 className="text-lg font-bold text-white">Menu de Atendimento Guiado</h3>
                  </div>
                  <span className="px-2.5 py-1 bg-white/10 text-white rounded-lg text-xs font-mono">
                    3–5 dias úteis
                  </span>
                </div>

                <div className="bg-[#0b141a] rounded-xl p-4 border border-white/10 space-y-3 font-sans text-xs my-4">
                  <div className="bg-[#202c33] text-slate-200 p-3 rounded-xl rounded-tl-xs max-w-[90%] leading-relaxed">
                    👋 Olá! Bem-vindo(a) à nossa empresa. Como podemos ajudar você hoje?
                    <br /><br />
                    1 · Horários de atendimento<br />
                    2 · Endereço e localização<br />
                    3 · Conhecer serviços e valores<br />
                    4 · Falar com um atendente
                  </div>

                  <div className="bg-[#005c4b] text-white p-2.5 rounded-xl rounded-tr-xs ml-auto max-w-[65%] text-right font-medium">
                    1 - Horários
                  </div>

                  <div className="bg-[#202c33] text-slate-200 p-3 rounded-xl rounded-tl-xs max-w-[90%] leading-relaxed">
                    ⏰ Nosso horário é de segunda a sexta das 8h às 18h e sábado das 8h às 12h.<br /><br />
                    Digite 4 para falar com uma atendente.
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Ideal para empresas que recebem as mesmas perguntas repetitivas todo dia e querem responder na hora sem deixar ninguém esperando.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <a
                  href={getWhatsAppUrl("Olá! Tenho interesse no Bot Básico de R$ 500 para WhatsApp com a Cloud Creative.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-black hover:bg-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                >
                  <span>Contratar Bot Básico</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Exemplo 2: Bot Avançado com IA */}
            <div className="bg-black text-white rounded-2xl border-2 border-white p-6 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">
                      Modelo Avançado · R$ 800
                    </span>
                    <h3 className="text-lg font-bold text-white">Assistente com Inteligência Artificial</h3>
                  </div>
                  <span className="px-2.5 py-1 bg-blue-600 text-white rounded-lg text-xs font-mono font-bold">
                    5–10 dias úteis
                  </span>
                </div>

                <div className="bg-[#0b141a] rounded-xl p-4 border border-white/10 space-y-3 font-sans text-xs my-4">
                  <div className="bg-[#005c4b] text-white p-2.5 rounded-xl rounded-tr-xs ml-auto max-w-[85%] text-right font-medium">
                    Oi! Vocês fazem atendimento no sábado de manhã? Preciso agendar!
                  </div>

                  <div className="bg-[#202c33] text-slate-200 p-3 rounded-xl rounded-tl-xs max-w-[90%] leading-relaxed">
                    ✨ Olá! Fazemos sim! Aos sábados atendemos das 8h às 12h. Temos horários disponíveis para agendamento. Deseja que eu encaminhe seus dados para nossa equipe confirmar com você?
                  </div>

                  <div className="bg-[#005c4b] text-white p-2.5 rounded-xl rounded-tr-xs ml-auto max-w-[70%] text-right font-medium">
                    Quero sim, por favor!
                  </div>

                  <div className="bg-[#202c33] text-slate-200 p-3 rounded-xl rounded-tl-xs max-w-[90%] leading-relaxed">
                    Perfeito! Já notifiquei nossa equipe humana. Uma atendente continua a conversa por aqui em instantes.
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Compreende perguntas em linguagem natural e responde com base exclusiva no cardápio de serviços, preços e regras da sua empresa.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <a
                  href={getWhatsAppUrl("Olá! Tenho interesse no Bot Avançado com IA de R$ 800 com a Cloud Creative.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-black hover:bg-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                >
                  <span>Contratar Bot com IA</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: GOOGLE */}
        {/* ========================================================= */}
        {activeTab === "google" && (
          <div className="bg-black text-white rounded-2xl border border-white/20 p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">
                  Criação R$ 200 · Otimização R$ 100
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Como sua empresa aparece na Pesquisa Google e no Maps
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Prazo: 1 a 3 dias úteis
              </span>
            </div>

            {/* Google Search Simulation Box */}
            <div className="bg-neutral-900 rounded-xl p-5 border border-white/10 text-xs text-slate-300">
              
              <div className="flex items-center gap-3 bg-black px-4 py-2.5 rounded-full border border-white/10 mb-6">
                <span className="font-bold text-blue-400 text-sm">G</span>
                <span className="text-slate-300 font-medium">sua empresa no google maps</span>
                <Search className="w-3.5 h-3.5 text-slate-500 ml-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <h4 className="text-xl font-black text-white">Sua Empresa Oficial</h4>
                  <div className="flex items-center gap-1.5 text-amber-400 my-1 font-bold">
                    <span>★ 4.9</span>
                    <div className="flex text-amber-400 text-xs">
                      {"★".repeat(5)}
                    </div>
                    <span className="text-slate-400 font-normal">(Avaliações verificadas)</span>
                  </div>

                  <p className="text-slate-300 text-xs mt-1">
                    Categoria comercial correta · Endereço completo no mapa · Telefone e WhatsApp atualizados
                  </p>

                  <div className="flex items-center gap-2 mt-3">
                    <span className="px-2 py-0.5 rounded-xs bg-emerald-950 text-emerald-400 font-semibold text-[11px]">
                      Aberto agora
                    </span>
                    <span className="text-slate-400 text-[11px]">· Seg a Sáb, 8h às 19h</span>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-bold rounded-lg text-xs">
                      <Phone className="w-3.5 h-3.5" />
                      <span>Ligar</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-bold rounded-lg text-xs">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Rotas no Mapa</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-bold rounded-lg text-xs">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Ver Website</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 rounded-xl overflow-hidden aspect-4/3 bg-black border border-white/10">
                  <img
                    src="/assets/images/portfolio_fitness_gym_1792967549615.jpg"
                    alt="Fotos do espaço no Google"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Seus clientes encontram o endereço certo e entram em contato com um clique.
              </span>
              <a
                href={getWhatsAppUrl("Olá! Gostaria de configurar/otimizar o Perfil da minha empresa no Google com a Cloud Creative.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-white text-black hover:bg-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors text-center"
              >
                Melhorar Perfil no Google
              </a>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: ARTES PARA REDES SOCIAIS */}
        {/* ========================================================= */}
        {activeTab === "artes" && (
          <div className="animate-in fade-in duration-300">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              
              {/* Arte 1 */}
              <div className="bg-black text-white rounded-2xl border border-white/20 p-5 aspect-square flex flex-col justify-between shadow-xl hover:border-white transition-all">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase">
                  <span>Feed</span>
                  <span className="text-blue-400">Promoção</span>
                </div>
                <div className="my-auto py-2">
                  <div className="text-2xl font-black text-white leading-none">30% OFF</div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                    Condição especial válida até domingo. Garanta sua vaga!
                  </p>
                </div>
                <div className="text-[10px] font-bold text-blue-400">
                  Chamar no WhatsApp →
                </div>
              </div>

              {/* Arte 2 */}
              <div className="bg-black text-white rounded-2xl border border-white/20 p-5 aspect-square flex flex-col justify-between shadow-xl hover:border-white transition-all">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase">
                  <span>Feed</span>
                  <span className="text-blue-400">Lançamento</span>
                </div>
                <div className="my-auto py-2">
                  <div className="text-lg font-black text-white leading-tight">Novo Cardápio</div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                    Novidades artesanais disponíveis no balcão e delivery.
                  </p>
                </div>
                <div className="text-[10px] font-bold text-blue-400">
                  Pedir no WhatsApp →
                </div>
              </div>

              {/* Arte 3 */}
              <div className="bg-black text-white rounded-2xl border border-white/20 p-5 aspect-square flex flex-col justify-between shadow-xl hover:border-white transition-all">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase">
                  <span>Feed / Stories</span>
                  <span className="text-blue-400">Informativo</span>
                </div>
                <div className="my-auto py-2">
                  <div className="text-base font-black text-white leading-tight">Horário Especial</div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                    Seg a Sex: 8h às 18h<br />Sábados: 8h às 12h
                  </p>
                </div>
                <div className="text-[10px] font-bold text-blue-400">
                  Agendar horário →
                </div>
              </div>

              {/* Arte 4 */}
              <div className="bg-black text-white rounded-2xl border border-white/20 p-5 aspect-square flex flex-col justify-between shadow-xl hover:border-white transition-all">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase">
                  <span>Stories</span>
                  <span className="text-blue-400">Oferta</span>
                </div>
                <div className="my-auto py-2">
                  <div className="text-lg font-black text-white leading-tight">Combo Exclusivo</div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                    Por apenas R$ 49,90 no pedido direto.
                  </p>
                </div>
                <div className="text-[10px] font-bold text-blue-400">
                  Arrasta para cima →
                </div>
              </div>

            </div>

            <div className="p-5 rounded-2xl bg-black border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-300">
                Pacotes comerciais: <strong>1 arte (R$ 30)</strong> · <strong>5 artes (R$ 120)</strong> · <strong>10 artes (R$ 200)</strong>. Arquivos finais PNG/JPG inclusos.
              </span>
              <a
                href={getWhatsAppUrl("Olá! Gostaria de contratar um pacote de artes para redes sociais com a Cloud Creative.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-white text-black hover:bg-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors text-center shrink-0"
              >
                Pedir Pacote de Artes
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
