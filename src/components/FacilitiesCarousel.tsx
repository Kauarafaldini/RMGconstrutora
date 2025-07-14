import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    name: "Manutenção Predial",
    description: "Serviços preventivos e corretivos para sistemas elétricos, hidráulicos, ar condicionado e estrutura predial.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Gestão de Facilities",
    description: "Planejamento, coordenação e supervisão de todos os serviços relacionados à infraestrutura e operações.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Limpeza e Conservação",
    description: "Serviços especializados de limpeza para ambientes corporativos, industriais e comerciais.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jardinagem",
    description: "Manutenção e cuidado de áreas verdes, jardins e paisagismo corporativo.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Gestão de Utilidades",
    description: "Administração eficiente de água, energia elétrica, gás e outros recursos, visando economia e sustentabilidade.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Serviços de Recepção",
    description: "Equipes qualificadas para recepção, portaria e controle de acesso em ambientes corporativos.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const FacilitiesCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((prev) => (prev - 1 + services.length) % services.length);
  const next = () => setCurrent((prev) => (prev + 1) % services.length);

  return (
    <div className="relative w-full">
      <div className="bg-white rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden transition-all duration-500">
        {/* Imagem */}
        <div className="md:w-1/2 w-full h-64 md:h-80 relative">
          <img
            src={services[current].image}
            alt={services[current].name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Conteúdo */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-8">
          <h4 className="text-2xl font-bold text-black mb-4">{services[current].name}</h4>
          <p className="text-gray-600 text-base mb-6">{services[current].description}</p>
        </div>
      </div>
      {/* Setas */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Anterior"
        style={{ zIndex: 2 }}
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Próximo"
        style={{ zIndex: 2 }}
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
      {/* Indicadores */}
      <div className="flex justify-center mt-6 gap-2">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${idx === current ? "bg-red-900" : "bg-gray-300"}`}
            aria-label={`Ir para ${services[idx].name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FacilitiesCarousel; 