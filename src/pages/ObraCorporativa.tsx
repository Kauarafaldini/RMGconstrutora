import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building, Award, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ObraCorporativa() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-black text-white py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        <div className="container mx-auto px-8 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Obras Corporativas</h1>
            <div className="w-20 h-1 bg-[#8B0000] mb-6"></div>
            <p className="text-gray-300 text-lg leading-7 max-w-2xl">
              Soluções sofisticadas e personalizadas para grandes corporações,
              com design exclusivo e acabamentos premium.
            </p>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="flex items-center gap-16">
            {/* Images */}
            <div className="flex-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/api/placeholder/300/200"
                  alt="Projeto corporativo"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/api/placeholder/300/200"
                  alt="Interior corporativo"
                  className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Excelência em Projetos <br />
                  Corporativos
                </h2>
                <p className="text-gray-600 text-sm leading-6 mb-4">
                  Criamos ambientes que refletem a identidade e os valores da{" "}
                  <br />
                  sua empresa.
                </p>
                <div className="w-20 h-1 bg-[#8B0000]"></div>
              </div>

              <p className="text-gray-600 text-sm leading-6 mb-6">
                Na RMG Construtora, entendemos que os espaços <br />
                corporativos são muito mais do que simples estruturas físicas.{" "}
                <br />
                São manifestações tangíveis da cultura, da visão e dos valores{" "}
                <br />
                de uma empresa.
              </p>

              <p className="text-gray-600 text-sm leading-6 mb-8">
                Nossa abordagem para projetos corporativos combina design <br />
                arquitetônico de ponta, tecnologia avançada e acabamentos <br />
                sofisticados para criar ambientes que impressionam clientes,{" "}
                <br />
                inspiram colaboradores e otimizam operações.
              </p>

              <Button onClick={() => navigate("/fale-conosco")} className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white">
                Agende uma visita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Soluções Corporativas
            </h2>
            <p className="text-gray-600 text-sm">
              Nossos serviços especializados para o segmento corporativo
            </p>
            <div className="w-20 h-1 bg-[#8B0000] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sedes Corporativas */}
            <Card className="p-8 border-l-4 border-l-[#8B0000] shadow-md">
              <h3 className="text-lg font-bold text-black mb-4">
                Sedes Corporativas
              </h3>
              <p className="text-gray-600 text-sm leading-6 mb-6">
                Desenvolvimento completo de sedes corporativas que <br />
                refletem a identidade da marca, desde o projeto <br />
                arquitetônico até os mínimos detalhes de acabamento.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-600 text-sm">
                    Fachadas exclusivas e imponentes
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-600 text-sm">
                    Áreas de recepção e atendimento
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-600 text-sm">
                    Espaços colaborativos e salas de reunião
                  </span>
                </div>
              </div>
            </Card>

            {/* Edifícios Inteligentes */}
            <Card className="p-8 border-l-4 border-l-[#8B0000] shadow-md">
              <h3 className="text-lg font-bold text-black mb-4">
                Edifícios Inteligentes
              </h3>
              <p className="text-gray-600 text-sm leading-6 mb-6">
                Construção de edifícios com tecnologia integrada, <br />
                automação e sistemas sustentáveis que reduzem custos <br />
                operacionais e aumentam a produtividade.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-600 text-sm">
                    Sistemas de automação predial
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-600 text-sm">
                    Eficiência energética e certificação LEED
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-600 text-sm">
                    Segurança integrada e controle de acesso
                  </span>
                </div>
              </div>
            </Card>

            {/* Retrofit Corporativo */}
            <Card className="p-8 border-l-4 border-l-[#8B0000] shadow-md">
              <h3 className="text-lg font-bold text-black mb-4">
                Retrofit Corporativo
              </h3>
              <p className="text-gray-600 text-sm leading-6 mb-6">
                Modernização de edifícios existentes com novas <br />
                tecnologias, layouts otimizados e sistemas atualizados, <br />
                preservando elementos históricos quando relevantes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-600 text-sm">
                    Atualização de sistemas elétricos e hidráulicos
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-600 text-sm">
                    Redesenho de layouts para novos padrões de <br />
                    trabalho
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-600 text-sm">
                    Revitalização de fachadas e áreas comuns
                  </span>
                </div>
              </div>
            </Card>

            {/* Espaços Corporativos Especializados */}
            <Card className="p-8 border-l-4 border-l-[#8B0000] shadow-md">
              <h3 className="text-lg font-bold text-black mb-4">
                Espaços Corporativos Especializados
              </h3>
              <p className="text-gray-600 text-sm leading-6 mb-6">
                Desenvolvimento de ambientes específicos para <br />
                necessidades corporativas, como centros de <br />
                treinamento, auditórios e espaços de inovação.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-600 text-sm">
                    Auditórios e espaços para eventos
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-600 text-sm">
                    Laboratórios e centros de pesquisa
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]"></div>
                  <span className="text-gray-600 text-sm">
                    Áreas de convivência e bem-estar
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose RMG Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Por que escolher a RMG
            </h2>
            <p className="text-gray-600 text-sm">
              Nossos diferenciais em projetos corporativos
            </p>
            <div className="w-20 h-1 bg-[#8B0000] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Excellence */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-[#8B0000]" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                Excelência <br />
                técnica
              </h3>
              <p className="text-gray-600 text-sm text-center leading-6">
                Equipe multidisciplinar <br />
                com vasta experiência <br />
                em projetos <br />
                corporativos <br />
                complexos.
              </p>
            </div>

            {/* Quality */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-[#8B0000]" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                Qualidade <br />
                premium
              </h3>
              <p className="text-gray-600 text-sm text-center leading-6">
                Compromisso com os <br />
                mais altos padrões de <br />
                qualidade em materiais <br />e acabamentos.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-[#8B0000]" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                Inovação <br />
                constante
              </h3>
              <p className="text-gray-600 text-sm text-center leading-6">
                Aplicação das mais <br />
                recentes tendências e <br />
                tecnologias em <br />
                construção corporativa.
              </p>
            </div>

            {/* Compliance */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#8B0000]" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                Conformidade <br />
                total
              </h3>
              <p className="text-gray-600 text-sm text-center leading-6">
                Rigorosa aderência às <br />
                normas técnicas, <br />
                regulamentações e <br />
                certificações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A365D] text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transforme sua visão corporativa em realidade
          </h2>
          <p className="text-gray-300 text-lg leading-7 max-w-4xl mx-auto mb-8">
            Agende uma consulta com nossos especialistas para discutir seu
            projeto corporativo e <br />
            descobrir como podemos ajudar.
          </p>
          <Button onClick={() => navigate("/fale-conosco")} className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white">
            Solicite uma proposta
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
