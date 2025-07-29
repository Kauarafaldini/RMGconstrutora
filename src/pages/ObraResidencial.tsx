import React from "react";
import { Card } from "@/components/ui/card";
import { Home, Heart, Shield, Palette, ChevronRight, Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ResidentialProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <main>
      {/* Hero Section */}
      <section className="bg-black text-white py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        <div className="container mx-auto px-8 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Obras Residenciais</h1>
            <div className="section-divider mb-6"></div>
            <p className="text-gray-300 text-lg leading-7 max-w-2xl">
              Transformamos sonhos em lares, com projetos residenciais
              personalizados que combinam estética, conforto e funcionalidade.
            </p>
          </div>
        </div>
      </section>

      {/* Priority Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="flex items-center gap-16">
            {/* Content */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Seu lar, nossa prioridade
                </h2>
                <p className="text-gray-600 text-sm leading-6 mb-4">
                  Criamos espaços residenciais que refletem personalidade,{" "}
                  <br />
                  estilo de vida e necessidades de cada cliente.
                </p>
                <div className="section-divider"></div>
              </div>

              <p className="text-gray-600 text-sm leading-6 mb-6">
                Na RGM Construtora, entendemos que uma casa é muito mais <br />
                que uma estrutura física. É o espaço onde memórias são <br />
                criadas, onde o conforto se encontra com a funcionalidade, e{" "}
                <br />
                onde sua personalidade se expressa em cada detalhe.
              </p>

              <p className="text-gray-600 text-sm leading-6 mb-8">
                Nossa abordagem para projetos residenciais combina design <br />
                contemporâneo, materiais de qualidade e técnicas construtivas{" "}
                <br />
                avançadas para criar ambientes que superam expectativas e <br />
                resistem ao teste do tempo.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-red"></div>
                  <span className="text-gray-700 text-sm">
                    Casas de alto padrão
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-red"></div>
                  <span className="text-gray-700 text-sm">
                    Condomínios residenciais
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-red"></div>
                  <span className="text-gray-700 text-sm">
                    Reformas completas
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-red"></div>
                  <span className="text-gray-700 text-sm">
                    Projetos personalizados
                  </span>
                </div>
              </div>

              <Button onClick={() => navigate("/fale-conosco")} className="btn-primary">
                Agende uma consulta
              </Button>
            </div>

            {/* Images */}
            <div className="flex-1 relative">
              {/* Indicadores */}
              <div className="absolute -top-8 left-0 flex gap-4 z-10">
                <div className="bg-primary-red text-white rounded-full px-4 py-2 shadow-lg text-sm font-semibold flex items-center">
                  <span>10 anos de experiência</span>
                </div>
                <div className="bg-primary-red text-white border border-primary-red rounded-full px-4 py-2 shadow-lg text-sm font-semibold flex items-center">
                  <span>+50 contratos</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                  alt="Casa moderna"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                  alt="Interior residencial"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                  alt="Sala de estar"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                  alt="Área externa"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Nossa Abordagem
            </h2>
            <p className="text-gray-600 text-sm">
              Como trabalhamos para criar o lar dos seus sonhos
            </p>
            <div className="section-divider mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Personalization */}
            <Card className="p-8 text-center shadow-md">
              <div className="icon-container mx-auto mb-6">
                <Home className="w-8 h-8 text-primary-red" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">
                Personalização
              </h3>
              <p className="text-gray-600 text-sm text-center leading-6">
                Cada projeto é único, <br />
                desenvolvido de <br />
                acordo com as <br />
                necessidades e <br />
                desejos específicos <br />
                de cada cliente.
              </p>
            </Card>

            {/* Comfort */}
            <Card className="p-8 text-center shadow-md">
              <div className="icon-container mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-red" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">Conforto</h3>
              <p className="text-gray-600 text-sm text-center leading-6">
                Priorizamos o <br />
                bem-estar com soluções <br />
                que garantem <br />
                conforto térmico, <br />
                acústico e visual.
              </p>
            </Card>

            {/* Durability */}
            <Card className="p-8 text-center shadow-md">
              <div className="icon-container mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-red" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">
                Durabilidade
              </h3>
              <p className="text-gray-600 text-sm text-center leading-6">
                Utilizamos materiais <br />
                de alta qualidade e <br />
                técnicas que <br />
                garantem a <br />
                longevidade da <br />
                construção.
              </p>
            </Card>

            {/* Aesthetics */}
            <Card className="p-8 text-center shadow-md">
              <div className="icon-container mx-auto mb-6">
                <Palette className="w-8 h-8 text-primary-red" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">Estética</h3>
              <p className="text-gray-600 text-sm text-center leading-6">
                Design <br />
                contemporâneo que <br />
                valoriza a beleza sem <br />
                comprometer a <br />
                funcionalidade dos <br />
                espaços.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-[1020px] mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Terrenos e Construções
            </h2>
            <p className="text-gray-600 mb-6">
              Processo completo do terreno à casa dos seus sonhos
            </p>
            <div className="section-divider"></div>
          </div>

          {/* Flowchart Container */}
          <div className="relative">
            {/* Desktop Flowchart */}
            <div className="hidden lg:block">
              {/* First Row */}
              <div className="flex items-center justify-between mb-16">
                {/* Step 1 */}
                <div className="flex-1 max-w-xs">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                    <div className="relative mb-3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop"
                          alt="Análise do terreno"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-primary-red text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                    </div>
                    <h3 className="font-bold text-black text-sm mb-1">
                      Análise do Terreno
                    </h3>
                    <p className="text-gray-600 text-xs">
                      Estudo completo do terreno
                    </p>
                  </div>
                </div>

                {/* Arrow 1 to 2 */}
                <div className="flex items-center px-4">
                  <ChevronRight className="w-6 h-6 text-primary-red" />
                </div>

                {/* Step 2 */}
                <div className="flex-1 max-w-xs">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                    <div className="relative mb-3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop"
                          alt="Fundação"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-primary-red text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                    </div>
                    <h3 className="font-bold text-black text-sm mb-1">
                      Fundação
                    </h3>
                    <p className="text-gray-600 text-xs">
                      Preparação e construção da base
                    </p>
                  </div>
                </div>

                {/* Arrow 2 to 3 */}
                <div className="flex items-center px-4">
                  <ChevronRight className="w-6 h-6 text-primary-red" />
                </div>

                {/* Step 3 */}
                <div className="flex-1 max-w-xs">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                    <div className="relative mb-3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop"
                          alt="Estrutura"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-primary-red text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                    </div>
                    <h3 className="font-bold text-black text-sm mb-1">
                      Estrutura
                    </h3>
                    <p className="text-gray-600 text-xs">
                      Pilares, vigas e lajes
                    </p>
                  </div>
                </div>

                {/* Arrow 3 to 4 */}
                <div className="flex items-center px-4">
                  <ChevronRight className="w-6 h-6 text-primary-red" />
                </div>

                {/* Step 4 */}
                <div className="flex-1 max-w-xs">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                    <div className="relative mb-3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop"
                          alt="Acabamento"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-primary-red text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                    </div>
                    <h3 className="font-bold text-black text-sm mb-1">
                      Acabamento
                    </h3>
                    <p className="text-gray-600 text-xs">
                      Revestimentos e instalações
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical Arrow Down */}
              <div className="flex justify-center mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-primary-red"></div>
                  <div className="w-3 h-3 bg-primary-red transform rotate-45 border-r border-b border-primary-red"></div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex items-center justify-center space-x-16">
                {/* Step 5 */}
                <div className="flex-1 max-w-xs">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                    <div className="relative mb-3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=250&fit=crop"
                          alt="Instalações"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-primary-red text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        5
                      </div>
                    </div>
                    <h3 className="font-bold text-black text-sm mb-1">
                      Instalações
                    </h3>
                    <p className="text-gray-600 text-xs">
                      Sistemas elétricos e hidráulicos
                    </p>
                  </div>
                </div>

                {/* Arrow 5 to 6 */}
                <div className="flex items-center">
                  <ChevronRight className="w-6 h-6 text-primary-red" />
                </div>

                {/* Step 6 */}
                <div className="flex-1 max-w-xs">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                    <div className="relative mb-3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop"
                          alt="Paisagismo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-primary-red text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        6
                      </div>
                    </div>
                    <h3 className="font-bold text-black text-sm mb-1">
                      Paisagismo
                    </h3>
                    <p className="text-gray-600 text-xs">
                      Jardins e ambientação externa
                    </p>
                  </div>
                </div>

                {/* Arrow 6 to 7 */}
                <div className="flex items-center">
                  <ChevronRight className="w-6 h-6 text-primary-red" />
                </div>

                {/* Step 7 */}
                <div className="flex-1 max-w-xs">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border-2 border-primary-red">
                    <div className="relative mb-3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=250&fit=crop"
                          alt="Casa Entregue"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-primary-red text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        7
                      </div>
                    </div>
                    <h3 className="font-bold text-black text-sm mb-1">
                      Entrega
                    </h3>
                    <p className="text-gray-600 text-xs">
                      Casa pronta para morar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Flowchart */}
            <div className="lg:hidden space-y-6">
              {[
                {
                  num: 1,
                  title: "Análise do Terreno",
                  desc: "Estudo completo do terreno",
                  img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
                },
                {
                  num: 2,
                  title: "Fundação",
                  desc: "Preparação e construção da base",
                  img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop",
                },
                {
                  num: 3,
                  title: "Estrutura",
                  desc: "Pilares, vigas e lajes",
                  img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop",
                },
                {
                  num: 4,
                  title: "Acabamento",
                  desc: "Revestimentos e instalações",
                  img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop",
                },
                {
                  num: 5,
                  title: "Instalações",
                  desc: "Sistemas elétricos e hidráulicos",
                  img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=250&fit=crop",
                },
                {
                  num: 6,
                  title: "Paisagismo",
                  desc: "Jardins e ambientação externa",
                  img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
                },
                {
                  num: 7,
                  title: "Entrega",
                  desc: "Casa pronta para morar",
                  img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=250&fit=crop",
                },
              ].map((step, index) => (
                <div key={step.num} className="relative">
                  <div
                    className={`bg-white rounded-lg shadow-sm p-4 ${
                      step.num === 7 ? "border-2 border-primary-red" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0 w-20 h-16">
                        <img
                          src={step.img}
                          alt={step.title}
                          className="w-full h-full object-cover rounded"
                        />
                        <div className="absolute -top-1 -left-1 bg-primary-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                          {step.num}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-black text-sm mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-xs">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                  {index < 6 && (
                    <div className="flex justify-center my-3">
                      <div className="w-0.5 h-6 bg-primary-red"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Nosso Processo
            </h2>
            <p className="text-gray-600 text-sm">
              Como trabalhamos para transformar seu sonho em realidade
            </p>
            <div className="section-divider mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-lg font-bold text-black mb-2">
                      Consulta Inicial
                    </h3>
                    <p className="text-gray-600 text-sm leading-6">
                      Entendemos suas necessidades, preferências e <br />
                      orçamento para alinhar expectativas.
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary-red border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8">
                    <h3 className="text-lg font-bold text-black mb-2">
                      Projeto Conceitual
                    </h3>
                    <p className="text-gray-600 text-sm leading-6">
                      Desenvolvimento do conceito inicial e estudo preliminar{" "}
                      <br />
                      do projeto.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-lg font-bold text-black mb-2">
                      Projeto Detalhado
                    </h3>
                    <p className="text-gray-600 text-sm leading-6">
                      Elaboração dos projetos executivos com todas as <br />
                      especificações técnicas.
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8">
                    <h3 className="text-lg font-bold text-black mb-2">
                      Construção
                    </h3>
                    <p className="text-gray-600 text-sm leading-6">
                      Execução da obra com acompanhamento rigoroso de <br />
                      cada etapa.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-lg font-bold text-black mb-2">
                      Entrega
                    </h3>
                    <p className="text-gray-600 text-sm leading-6">
                      Finalização dos detalhes e entrega do projeto pronto{" "}
                      <br />
                      para ser habitado.
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A365D] text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para construir ou reformar sua casa?
          </h2>
          <p className="text-gray-300 text-lg leading-7 max-w-4xl mx-auto mb-8">
            Entre em contato conosco para uma consulta gratuita e descubra como
            podemos transformar sua visão em realidade.
          </p>
          <Button onClick={() => navigate("/fale-conosco")} className="btn-primary">
            Agende uma visita
          </Button>
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
                <span className="text-primary-red text-lg font-bold">
                  CONSTRUTORA
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-6">
                Especializada em obras empresariais, corporativas e
                residenciais, além de serviços de terceirização.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 social-icon" />
                <Instagram className="w-5 h-5 social-icon" />
                <Linkedin className="w-5 h-5 social-icon" />
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/obra-empresarial" className="footer-link">
                    Obra Empresarial
                  </a>
                </li>
                <li>
                  <a href="/obra-corporativa" className="footer-link">
                    Obra Corporativa
                  </a>
                </li>
                <li>
                  <a href="/obra-residencial" className="footer-link">
                    Obra Residencial
                  </a>
                </li>
                <li>
                  <a href="/facilities" className="footer-link">
                    Facilities
                  </a>
                </li>
                <li>
                  <a href="/sobre-nos" className="footer-link">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="/fale-conosco" className="footer-link">
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
                  <MapPin className="w-5 h-5 text-primary-red" />
                  <span className="text-gray-300 text-sm">
                    Av. Paulista, 1000, São Paulo - SP
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-red" />
                  <span className="text-gray-300 text-sm">(11) 5555-5555</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-red" />
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
              2025 RMG Construtora. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  </div>
  );
};

export default ResidentialProjects;
