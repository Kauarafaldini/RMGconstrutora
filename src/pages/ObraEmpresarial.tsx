import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import {
  Check,
  Building,
  Clock,
  BarChart3,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const ObraEmpresarial = () => {
  const navigate = useNavigate();
  const mosaicImages = [
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Edifício empresarial moderno",
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Escritório corporativo",
    },
    {
      src: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Espaço de trabalho moderno",
    },
    {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Construção em andamento",
    },
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Galpão industrial",
    },
    {
      src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Centro comercial",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Obras Empresariais
            </h1>
            <div className="w-20 h-1 bg-[#8B0000] mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl">
              Construções de qualidade para empresas de todos os portes, com
              foco em funcionalidade, eficiência e prazo de entrega.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  Soluções para seu negócio
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Oferecemos serviços completos para construção e reforma de
                  espaços empresariais.
                </p>
                <div className="w-20 h-1 bg-[#8B0000]"></div>
              </div>

              {/* Services List */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-[#8B0000] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Construção de escritórios
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Ambientes planejados para maximizar produtividade e
                      conforto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-[#8B0000] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Galpões industriais
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Estruturas robustas e funcionais para operações
                      industriais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-[#8B0000] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Lojas comerciais
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Espaços atrativos que valorizam sua marca e produtos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-[#8B0000] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Reformas e adaptações
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Modernização de ambientes com mínima interrupção das
                      atividades.
                    </p>
                  </div>
                </div>
              </div>

              <Button onClick={() => navigate("/fale-conosco")} className="bg-[#8B0000] hover:bg-red-800 text-white px-6 py-3 text-sm font-medium">
                Solicite um orçamento
              </Button>
            </div>

            {/* Right Image Mosaic */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-4 h-96">
                {/* Top Row - 3 images */}
                <div className="grid gap-4">
                  <div className="relative h-full overflow-hidden rounded-lg group cursor-pointer">
                    <img
                      src={mosaicImages[0].src}
                      alt={mosaicImages[0].alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0"></div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="relative h-full overflow-hidden rounded-lg group cursor-pointer">
                    <img
                      src={mosaicImages[1].src}
                      alt={mosaicImages[1].alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0"></div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="relative h-full overflow-hidden rounded-lg group cursor-pointer">
                    <img
                      src={mosaicImages[2].src}
                      alt={mosaicImages[2].alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Row - 3 images */}
              <div className="grid grid-cols-3 gap-4 h-44 mt-4">
                <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                  <img
                    src={mosaicImages[3].src}
                    alt={mosaicImages[3].alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0"></div>
                </div>
                <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                  <img
                    src={mosaicImages[4].src}
                    alt={mosaicImages[4].alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0"></div>
                </div>
                <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                  <img
                    src={mosaicImages[5].src}
                    alt={mosaicImages[5].alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0"></div>
                </div>
              </div>

              {/* Stats Card Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-[#8B0000] text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold">+150</div>
                <div className="text-sm">Projetos empresariais entregues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Por que escolher a RMG Construtora
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
              Diferenciais que fazem da RMG a escolha certa para seu projeto
              empresarial
            </p>
            <div className="w-20 h-1 bg-[#8B0000] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="w-12 h-12 text-[#8B0000]" />,
                title: "Expertise técnica",
                description:
                  "Nossa equipe possui vasta experiência em projetos empresariais de diferentes complexidades e tamanhos.",
              },
              {
                icon: <Clock className="w-12 h-12 text-[#8B0000]" />,
                title: "Cumprimento de prazos",
                description:
                  "Planejamento rigoroso e gestão eficiente para entregar seu projeto dentro do cronograma estabelecido.",
              },
              {
                icon: <BarChart3 className="w-12 h-12 text-[#8B0000]" />,
                title: "Controle de custos",
                description:
                  "Transparência financeira e processos otimizados para garantir o melhor custo-benefício.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg text-center p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <CardTitle className="text-lg font-bold text-black mb-3">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A365D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Pronto para iniciar seu projeto empresarial?
              </h2>
              <p className="text-gray-300 text-sm">
                Entre em contato conosco para uma avaliação personalizada das
                necessidades do seu negócio.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Button onClick={() => navigate("/fale-conosco")} className="bg-[#8B0000] hover:bg-red-800 text-white px-6 py-3 text-sm font-medium">
                Agende uma consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-white text-lg font-bold">RMG</span>
                <span className="text-[#8B0000] text-lg font-bold">
                  CONSTRUTORA
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-6">
                Especializada em obras empresariais, corporativas e
                residenciais, além de serviços de terceirização.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/obra-empresarial"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Obra Empresarial
                  </a>
                </li>
                <li>
                  <a
                    href="/obra-corporativa"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Obra Corporativa
                  </a>
                </li>
                <li>
                  <a
                    href="/obra-residencial"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Obra Residencial
                  </a>
                </li>
                <li>
                  <a
                    href="/facilities"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Facilities
                  </a>
                </li>
                <li>
                  <a
                    href="/sobre-nos"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="/fale-conosco"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Fale Conosco
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#8B0000]" />
                  <span className="text-gray-300 text-sm">
                    Av. Paulista, 1000, São Paulo - SP
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#8B0000]" />
                  <span className="text-gray-300 text-sm">(11) 5555-5555</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#8B0000]" />
                  <span className="text-gray-300 text-sm">
                    contato@rmgconstrutora.com.br
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400 text-xs">
              © 2025 RMG Construtora. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ObraEmpresarial;
