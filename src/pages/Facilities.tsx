import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import {
  Wrench,
  ClipboardList,
  Heart,
  Shield,
  Settings,
  Users,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Facilities = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black"></div>
        <div className="relative max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Facilities</h1>
            <div className="w-20 h-1 bg-red-900 mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl">
              Soluções completas de terceirização para gestão e manutenção de
              instalações, garantindo eficiência operacional e redução de
              custos.
            </p>
          </div>
        </div>
      </section>

      {/* Gestão Completa de Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Gestão completa de facilities
                </h2>
                <p className="text-gray-600 mb-4">
                  Soluções integradas para otimizar a operação e manutenção de
                  suas instalações.
                </p>
                <div className="w-20 h-1 bg-red-900"></div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600">
                  A RMG Construtora oferece serviços abrangentes de facilities
                  management, permitindo que você concentre seus recursos no
                  core business da sua empresa, enquanto cuidamos de toda a
                  infraestrutura e serviços de apoio.
                </p>

                <p className="text-gray-600">
                  Nossa abordagem integrada combina gestão eficiente, tecnologia
                  avançada e equipes especializadas para garantir o
                  funcionamento perfeito de suas instalações, reduzir custos
                  operacionais e aumentar a vida útil dos ativos.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-900 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">
                    Manutenção predial
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-900 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">
                    Gestão de utilidades
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-900 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">
                    Serviços de limpeza
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-900 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">
                    Segurança patrimonial
                  </span>
                </div>
              </div>

              <Button className="bg-red-900 hover:bg-red-800 text-white mt-8">
                Solicite uma proposta
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Gestão de Facilities"
                className="w-full h-80 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">+30%</div>
                <div className="text-sm">Redução de custos operacionais</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços de Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Nossos Serviços de Facilities
            </h2>
            <p className="text-gray-600 mb-6">
              Soluções completas para gestão e manutenção de instalações
            </p>
            <div className="w-20 h-1 bg-red-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-red-900">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-900" />
                </div>
                <CardTitle className="text-lg">Manutenção Predial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Serviços preventivos e corretivos para sistemas elétricos,
                  hidráulicos, ar condicionado e estrutura predial.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-900">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <ClipboardList className="w-6 h-6 text-red-900" />
                </div>
                <CardTitle className="text-lg">Gestão de Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Planejamento, coordenação e supervisão de todos os serviços
                  relacionados à infraestrutura e operações.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-900">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-red-900" />
                </div>
                <CardTitle className="text-lg">Limpeza e Conservação</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Serviços especializados de limpeza para ambientes
                  corporativos, industriais e comerciais.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-900">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-900" />
                </div>
                <CardTitle className="text-lg">Segurança Patrimonial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Proteção de ativos físicos com equipes treinadas e sistemas de
                  segurança integrados.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-900">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-red-900" />
                </div>
                <CardTitle className="text-lg">Gestão de Utilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Administração eficiente de água, energia elétrica, gás e
                  outros recursos, visando economia e sustentabilidade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-900">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-900" />
                </div>
                <CardTitle className="text-lg">Serviços de Recepção</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Equipes qualificadas para recepção, portaria e controle de
                  acesso em ambientes corporativos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios dos Nossos Serviços */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Benefícios dos Nossos Serviços
            </h2>
            <p className="text-gray-600 mb-6">
              Por que terceirizar seus serviços de facilities com a RMG
              Construtora
            </p>
            <div className="w-20 h-1 bg-red-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-red-900 p-8">
              <CardHeader>
                <CardTitle className="text-lg mb-4">
                  Redução de Custos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Economia com pessoal, encargos e benefícios
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Otimização de processos e recursos
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Ganho de escala em compras e contratos
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-900 p-8">
              <CardHeader>
                <CardTitle className="text-lg mb-4">
                  Foco no Core Business
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Direcionamento de recursos para atividades-fim
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Redução de complexidade administrativa
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Aumento da produtividade organizacional
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-900 p-8">
              <CardHeader>
                <CardTitle className="text-lg mb-4">
                  Expertise Especializada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Acesso a profissionais qualificados e treinados
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Implementação de melhores práticas do mercado
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Conhecimento técnico especializado em cada área
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-900 p-8">
              <CardHeader>
                <CardTitle className="text-lg mb-4">Gestão Eficiente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Indicadores de desempenho claros e mensuráveis
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Sistemas de gestão e controle avançados
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Processos padronizados e documentados
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nosso Processo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Nosso Processo
            </h2>
            <p className="text-gray-600 mb-6">
              Como implementamos e gerenciamos seus serviços de facilities
            </p>
            <div className="w-20 h-1 bg-red-900 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-300"></div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 relative z-10">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Diagnóstico</h3>
                <p className="text-gray-600 text-sm">
                  Avaliação detalhada das instalações e necessidades
                  específicas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Planejamento</h3>
                <p className="text-gray-600 text-sm">
                  Desenvolvimento de estratégia personalizada e plano de
                  implementação.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Implementação</h3>
                <p className="text-gray-600 text-sm">
                  Transição estruturada e treinamento das equipes dedicadas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2">Gestão Contínua</h3>
                <p className="text-gray-600 text-sm">
                  Monitoramento, relatórios e melhoria contínua dos serviços.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">+200</div>
              <div className="text-gray-300">Contratos ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-gray-300">Índice de satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30%</div>
              <div className="text-gray-300">Redução média de custos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">+1500</div>
              <div className="text-gray-300">Profissionais qualificados</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Pronto para otimizar a gestão das suas instalações?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Entre em contato conosco para uma avaliação gratuita e descubra como
            nossos serviços de facilities podem ajudar sua empresa a reduzir
            custos e aumentar a eficiência.
          </p>
          <Button className="bg-red-900 hover:bg-red-800 text-white">
            Solicite uma proposta personalizada
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-lg font-bold">RMG</span>
                <span className="text-lg font-bold text-red-900 ml-1">
                  CONSTRUTORA
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Especializada em obras empresariais, corporativas e
                residenciais, além de serviços de terceirização.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/obra-empresarial"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Obra Empresarial
                  </a>
                </li>
                <li>
                  <a
                    href="/obra-corporativa"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Obra Corporativa
                  </a>
                </li>
                <li>
                  <a
                    href="/obra-residencial"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Obra Residencial
                  </a>
                </li>
                <li>
                  <a
                    href="/facilities"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Facilities
                  </a>
                </li>
                <li>
                  <a
                    href="/sobre-nos"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="/fale-conosco"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Fale Conosco
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-900 mr-3" />
                  <span className="text-gray-400 text-sm">
                    Av. Paulista, 1000, São Paulo - SP
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-900 mr-3" />
                  <span className="text-gray-400 text-sm">(11) 5555-5555</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-red-900 mr-3" />
                  <span className="text-gray-400 text-sm">
                    contato@rmgconstrutora.com.br
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 RMG Construtora. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Facilities;
