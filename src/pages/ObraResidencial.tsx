import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Home, Heart, Shield, Palette, ArrowRight } from "lucide-react";

export default function ObraResidencial() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black text-white py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        <div className="container mx-auto px-8 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Obras Residenciais</h1>
            <div className="w-20 h-1 bg-[#8B0000] mb-6"></div>
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
                <div className="w-20 h-1 bg-[#8B0000]"></div>
              </div>

              <p className="text-gray-600 text-sm leading-6 mb-6">
                Na RMG Construtora, entendemos que uma casa é muito mais <br />
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
                  <div className="w-2 h-2 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-700 text-sm">
                    Casas de alto padrão
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-700 text-sm">
                    Condomínios residenciais
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-700 text-sm">
                    Reformas completas
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-700 text-sm">
                    Projetos personalizados
                  </span>
                </div>
              </div>

              <Button className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white">
                Agende uma consulta
              </Button>
            </div>

            {/* Images */}
            <div className="flex-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/api/placeholder/300/200"
                  alt="Casa moderna"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/api/placeholder/300/200"
                  alt="Interior residencial"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/api/placeholder/300/200"
                  alt="Sala de estar"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/api/placeholder/300/200"
                  alt="Área externa"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
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
            <div className="w-20 h-1 bg-[#8B0000] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Personalization */}
            <Card className="p-8 text-center shadow-md">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-[#8B0000]" />
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
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#8B0000]" />
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
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#8B0000]" />
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
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-[#8B0000]" />
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

      {/* Residential Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Projetos Residenciais
            </h2>
            <p className="text-gray-600 text-sm">
              Conheça alguns dos nossos principais projetos residenciais
            </p>
            <div className="w-20 h-1 bg-[#8B0000] mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Project 1 */}
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="/api/placeholder/400/300"
                  alt="Residencial Villa Serena"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-[#8B0000] text-white text-xs px-3 py-1 rounded">
                    Residencial
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">
                  Residencial Villa Serena
                </h3>
                <p className="text-gray-600 text-xs leading-5 mb-4">
                  Condomínio residencial com 48 <br />
                  unidades e completa infraestrutura de <br />
                  lazer.
                </p>
                <div className="flex items-center text-[#1A365D] text-sm font-medium">
                  <span>Ver projeto</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="/api/placeholder/400/300"
                  alt="Casa Moderna Jardins"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-[#8B0000] text-white text-xs px-3 py-1 rounded">
                    Residencial
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">
                  Casa Moderna Jardins
                </h3>
                <p className="text-gray-600 text-xs leading-5 mb-4">
                  Residência contemporânea com 450m² <br />e integração total
                  com a natureza.
                </p>
                <div className="flex items-center text-[#1A365D] text-sm font-medium">
                  <span>Ver projeto</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="/api/placeholder/400/300"
                  alt="Edifício Horizonte"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-[#8B0000] text-white text-xs px-3 py-1 rounded">
                    Residencial
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">
                  Edifício Horizonte
                </h3>
                <p className="text-gray-600 text-xs leading-5 mb-4">
                  Prédio residencial com 15 andares, 2 <br />
                  apartamentos por andar e vista <br />
                  panorâmica.
                </p>
                <div className="flex items-center text-[#1A365D] text-sm font-medium">
                  <span>Ver projeto</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 4 */}
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="/api/placeholder/400/300"
                  alt="Casa de Praia Atlântica"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-[#8B0000] text-white text-xs px-3 py-1 rounded">
                    Residencial
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">
                  Casa de Praia Atlântica
                </h3>
                <p className="text-gray-600 text-xs leading-5 mb-4">
                  Residência de veraneio com 5 suítes, <br />
                  piscina e vista para o mar.
                </p>
                <div className="flex items-center text-[#1A365D] text-sm font-medium">
                  <span>Ver projeto</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>

            {/* Project 5 */}
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="/api/placeholder/400/300"
                  alt="Loft Urban Style"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-[#8B0000] text-white text-xs px-3 py-1 rounded">
                    Residencial
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">
                  Loft Urban Style
                </h3>
                <p className="text-gray-600 text-xs leading-5 mb-4">
                  Apartamento tipo loft com pé direito <br />
                  duplo e design industrial.
                </p>
                <div className="flex items-center text-[#1A365D] text-sm font-medium">
                  <span>Ver projeto</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>

            {/* Project 6 */}
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="/api/placeholder/400/300"
                  alt="Condomínio Green Village"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-[#8B0000] text-white text-xs px-3 py-1 rounded">
                    Residencial
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">
                  Condomínio Green Village
                </h3>
                <p className="text-gray-600 text-xs leading-5 mb-4">
                  Condomínio horizontal com 22 casas e <br />
                  conceito sustentável.
                </p>
                <div className="flex items-center text-[#1A365D] text-sm font-medium">
                  <span>Ver projeto</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>
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
            <div className="w-20 h-1 bg-[#8B0000] mx-auto mt-6"></div>
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
                  <div className="w-8 h-8 rounded-full bg-[#8B0000] border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-8 h-8 rounded-full bg-[#8B0000] border-4 border-white shadow-lg z-10"></div>
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
                  <div className="w-8 h-8 rounded-full bg-[#8B0000] border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-8 h-8 rounded-full bg-[#8B0000] border-4 border-white shadow-lg z-10"></div>
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
                  <div className="w-8 h-8 rounded-full bg-[#8B0000] border-4 border-white shadow-lg z-10"></div>
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
            podemos <br />
            transformar sua visão em realidade.
          </p>
          <Button className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white">
            Agende uma visita
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-lg font-bold text-white">RMG</span>
                <span className="text-lg font-bold text-[#8B0000] ml-1">
                  CONSTRUTORA
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-5 mb-6">
                Especializada em obras empresariais, corporativas <br />e
                residenciais, além de serviços de terceirização.
              </p>
              <div className="flex space-x-4">
                <div className="w-5 h-5 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div className="w-5 h-5 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </div>
                <div className="w-5 h-5 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white font-semibold mb-4">Navegação</h3>
              <div className="space-y-2">
                <a
                  href="/"
                  className="block text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="/obra-empresarial"
                  className="block text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Obra Empresarial
                </a>
                <a
                  href="/obra-corporativa"
                  className="block text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Obra Corporativa
                </a>
                <a
                  href="/obra-residencial"
                  className="block text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Obra Residencial
                </a>
                <a
                  href="#"
                  className="block text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Facilities
                </a>
                <a
                  href="#"
                  className="block text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Sobre Nós
                </a>
                <a
                  href="#"
                  className="block text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Fale Conosco
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#8B0000] mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm">
                    Av. Paulista, 1000, São Paulo - SP
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#8B0000] mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm">(11) 5555-5555</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#8B0000] mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm">
                    contato@rmgconstrutora.com.br
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-xs">
              © 2025 RMG Construtora. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
