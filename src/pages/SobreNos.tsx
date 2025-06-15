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
  Target,
  Award,
  Users,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black"></div>
        <div className="relative max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Sobre Nós</h1>
            <div className="w-20 h-1 bg-red-900 mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl">
              Conheça a história, valores e diferenciais da RMG Construtora, sua
              parceira em projetos empresariais, corporativos e residenciais.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Nossa História
                </h2>
                <p className="text-gray-600 mb-4">
                  Mais de duas décadas construindo o futuro
                </p>
                <div className="w-20 h-1 bg-red-900"></div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600">
                  Fundada em 1998, a RMG Construtora nasceu com o propósito de
                  transformar o setor da construção civil no Brasil, trazendo
                  inovação, qualidade e compromisso com prazos como pilares
                  fundamentais.
                </p>

                <p className="text-gray-600">
                  Começando com pequenos projetos residenciais, rapidamente
                  expandimos nossa atuação para o setor empresarial e
                  corporativo, graças à nossa reputação de excelência e
                  confiabilidade.
                </p>

                <p className="text-gray-600">
                  Hoje, com mais de 500 projetos concluídos e uma equipe de mais
                  de 300 profissionais altamente qualificados, a RMG Construtora
                  se estabeleceu como referência no mercado da construção civil,
                  sempre buscando superar as expectativas dos clientes e inovar
                  em cada novo desafio.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-900 mr-3" />
                  <span className="text-gray-700 text-sm">Fundada em 1998</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-900 mr-3" />
                  <span className="text-gray-700 text-sm">
                    +500 projetos concluídos
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-900 mr-3" />
                  <span className="text-gray-700 text-sm">
                    +300 colaboradores
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-900 mr-3" />
                  <span className="text-gray-700 text-sm">
                    Presente em 5 estados
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Nossa História"
                className="w-full h-80 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-2xl font-bold text-red-900">25 anos</div>
                <div className="text-sm text-gray-600">
                  de experiência no mercado
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-gray-600 mb-6">
              Os pilares que norteiam nossa atuação
            </p>
            <div className="w-20 h-1 bg-red-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-red-900" />
                </div>
                <CardTitle className="text-lg">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Construir espaços que transformam vidas e negócios, com
                  excelência técnica, inovação e sustentabilidade, superando as
                  expectativas dos nossos clientes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-900" />
                </div>
                <CardTitle className="text-lg">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Ser reconhecida como a construtora mais inovadora e confiável
                  do Brasil, referência em qualidade, prazo e satisfação do
                  cliente em todos os segmentos de atuação.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-900" />
                </div>
                <CardTitle className="text-lg">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-left space-y-2">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-red-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">
                      Integridade e ética em todas as relações
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-red-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">
                      Excelência técnica e inovação constante
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-red-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">
                      Compromisso com a sustentabilidade
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-red-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">
                      Valorização das pessoas
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Nossa Equipe</h2>
            <p className="text-gray-600 mb-6">
              Conheça os profissionais por trás da RMG Construtora
            </p>
            <div className="w-20 h-1 bg-red-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Roberto Gomes Mendes"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Roberto Gomes Mendes</CardTitle>
                <CardDescription className="text-red-900 font-medium">
                  Fundador e CEO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  Com mais de 30 anos de experiência no setor da construção
                  civil, Roberto fundou a RMG com a visão de transformar o
                  mercado.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Ana Cristina Alves"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Ana Cristina Alves</CardTitle>
                <CardDescription className="text-red-900 font-medium">
                  Diretora de Operações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  Engenheira civil com especialização em gestão de projetos, Ana
                  lidera nossas operações com excelência há 15 anos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Carlos Eduardo Santos"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Carlos Eduardo Santos</CardTitle>
                <CardDescription className="text-red-900 font-medium">
                  Diretor Técnico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  Arquiteto com mestrado em construções sustentáveis, Carlos é
                  responsável pela inovação técnica em nossos projetos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Mariana Costa"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Mariana Costa</CardTitle>
                <CardDescription className="text-red-900 font-medium">
                  Diretora Comercial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  Com vasta experiência em marketing e vendas, Mariana lidera
                  nossa equipe comercial com foco em resultados e satisfação do
                  cliente.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Trajetória */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Nossa Trajetória
            </h2>
            <p className="text-gray-600 mb-6">
              Os principais marcos na história da RMG Construtora
            </p>
            <div className="w-20 h-1 bg-red-900 mx-auto"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-300"></div>

            <div className="space-y-16">
              {/* 1998 */}
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-lg font-bold mb-2">1998</h3>
                  <p className="text-gray-600 text-sm">
                    Fundação da RMG Construtora com foco inicial em projetos
                    residenciais de pequeno porte.
                  </p>
                </div>
                <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg relative z-10">
                  1
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2005 */}
              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg relative z-10">
                  2
                </div>
                <div className="flex-1 text-left pl-8">
                  <h3 className="text-lg font-bold mb-2">2005</h3>
                  <p className="text-gray-600 text-sm">
                    Expansão para o segmento empresarial com a construção do
                    primeiro edifício comercial de grande porte.
                  </p>
                </div>
              </div>

              {/* 2010 */}
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-lg font-bold mb-2">2010</h3>
                  <p className="text-gray-600 text-sm">
                    Início das operações no segmento de facilities, oferecendo
                    serviços completos de terceirização.
                  </p>
                </div>
                <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg relative z-10">
                  3
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2015 */}
              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg relative z-10">
                  4
                </div>
                <div className="flex-1 text-left pl-8">
                  <h3 className="text-lg font-bold mb-2">2015</h3>
                  <p className="text-gray-600 text-sm">
                    Conquista da certificação ISO 9001 e início da expansão para
                    outros estados do Brasil.
                  </p>
                </div>
              </div>

              {/* 2023 */}
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-lg font-bold mb-2">2023</h3>
                  <p className="text-gray-600 text-sm">
                    Celebração de 25 anos de atuação com mais de 500 projetos
                    concluídos e presença em 5 estados brasileiros.
                  </p>
                </div>
                <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg relative z-10">
                  5
                </div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações e Reconhecimentos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Certificações e Reconhecimentos
            </h2>
            <p className="text-gray-600 mb-6">
              Nossa excelência reconhecida pelo mercado
            </p>
            <div className="w-20 h-1 bg-red-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ISO</span>
                  </div>
                </div>
                <CardTitle className="text-base">ISO 9001</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  Certificação de Gestão da Qualidade, garantindo processos
                  padronizados e eficientes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ISO</span>
                  </div>
                </div>
                <CardTitle className="text-base">ISO 14001</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  Certificação de Gestão Ambiental, demonstrando nosso
                  compromisso com a sustentabilidade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">LEED</span>
                  </div>
                </div>
                <CardTitle className="text-base">LEED</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  Certificação para construções sustentáveis, com diversos
                  projetos certificados.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">OHSAS</span>
                  </div>
                </div>
                <CardTitle className="text-base">OHSAS 18001</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  Certificação de Segurança e Saúde Ocupacional, priorizando o
                  bem-estar dos colaboradores.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Faça parte da nossa história
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Conheça mais sobre a RMG Construtora e descubra como podemos ajudar
            a transformar seu projeto em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-900 hover:bg-red-800 text-white">
              Entre em contato
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              Conheça nossos projetos
            </Button>
          </div>
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

export default SobreNos;
