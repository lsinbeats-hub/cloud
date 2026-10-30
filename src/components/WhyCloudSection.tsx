import React from "react";
import { Layers, ShieldCheck, HeartHandshake, Eye, MessageCircle, FileCheck } from "lucide-react";

export const WhyCloudSection: React.FC = () => {
  const differentials = [
    {
      icon: Layers,
      title: "Soluções reunidas em um só lugar",
      description:
        "Sites, automações de atendimento, Perfil no Google e artes para redes sociais integrados com a mesma identidade visual e coerência comercial.",
    },
    {
      icon: HeartHandshake,
      title: "Projetos sob medida para o seu segmento",
      description:
        "Sem templates engessados ou cópias genéricas. Adaptamos as cores, tipografia e estrutura para a realidade e perfil do seu cliente ideal.",
    },
    {
      icon: MessageCircle,
      title: "Foco total em facilitar o contato comercial",
      description:
        "Toda a arquitetura é pensada para encurtar o caminho entre a dúvida do cliente e a conversa direta com a sua equipe no WhatsApp.",
    },
    {
      icon: Eye,
      title: "Comunicação visual expressiva e atrativa",
      description:
        "Design moderno que valoriza seu posicionamento de mercado, gera credibilidade imediata e faz sua marca ser lembrada com respeito.",
    },
    {
      icon: FileCheck,
      title: "Clareza total de escopo e condições",
      description:
        "Tabela oficial transparente, valores fixos combinados antes de começar e discriminação clara de serviços opcionais e inclusões.",
    },
    {
      icon: ShieldCheck,
      title: "Postura honesta sem promessas vazias",
      description:
        "Não inventamos métricas mágicas ou garantias irreais de faturamento. Focamos em entregar produtos digitais sólidos, úteis e bem acabados.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
            <span>Diferenciais</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Por que a Cloud</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mais do que presença digital. Soluções pensadas para o seu negócio.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed font-normal">
            Nosso propósito é descomplicar a tecnologia e o design para a sua empresa crescer com uma apresentação profissional.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-blue-500/80 hover:bg-slate-800 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
