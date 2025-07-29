import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Building,
  Users,
  Home,
  BarChart3,
  ArrowRight,
  Quote,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const featuredProjects = [
    {
      category: "Empresarial",
      title: "Centro Empresarial Avenida",
      description:
        "Edifício comercial com 12 andares, fachada moderna e espaços flexíveis para empresas de todos os portes.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Corporativo",
      title: "Sede Corporativa Vision",
      description:
        "Projeto corporativo sofisticado com conceito open space, tecnologia avançada e certificação LEED.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Residencial",
      title: "Residencial Villa Serena",
      description:
        "Condomínio residencial exclusivo com 48 unidades e completa infraestrutura de lazer e segurança.",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length,
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative bg-black text-white py-20 lg:py-32">
          <div className="absolute inset-0 hero-background"></div>
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="hero-title font-bold leading-tight mb-6">
                Construindo o <span className="text-primary-red">futuro</span>
                <br />
                com excelência
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
                Soluções completas em construção empresarial, corporativa,
                residencial e facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => navigate("/fale-conosco")} className="btn-primary">
                  Solicite um orçamento
                </Button>
                <Button
                  onClick={() => navigate("/sobre-nos")}
                  variant="outline"
                  className="btn-outline-primary"
                >
                  Conheça nossa história
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                Nossos Valores
              </h2>
              <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
                Compromisso com qualidade, inovação e sustentabilidade em cada
                projeto.
              </p>
              <div className="section-divider"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8 text-primary-red" />,
                  title: "Qualidade",
                  description:
                    "Comprometimento com os mais altos padrões de qualidade em todos os projetos.",
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-primary-red" />,
                  title: "Inovação",
                  description:
                    "Busca constante por soluções inovadoras e tecnologias avançadas.",
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-primary-red" />,
                  title: "Sustentabilidade",
                  description:
                    "Compromisso com práticas sustentáveis e responsabilidade ambiental.",
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-primary-red" />,
                  title: "Confiança",
                  description:
                    "Relacionamentos de longo prazo baseados em confiança e transparência.",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="card-value"
                >
                  <div className="flex justify-center mb-4">
                    <div className="icon-container">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-black mb-3">
                    {value.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                Nossos Serviços
              </h2>
              <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
                Oferecemos soluções completas para diversos segmentos
              </p>
              <div className="section-divider"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Building className="w-7 h-7 text-primary-red" />,
                  title: "Obra Empresarial",
                  description:
                    "Construções para empresas de todos os portes, com foco em funcionalidade e eficiência.",
                },
                {
                  icon: <Users className="w-7 h-7 text-primary-red" />,
                  title: "Obra Corporativa",
                  description:
                    "Projetos sofisticados para grandes corporações, com acabamentos de alto padrão.",
                },
                {
                  icon: <Home className="w-7 h-7 text-primary-red" />,
                  title: "Obra Residencial",
                  description:
                    "Casas e apartamentos com design personalizado, conforto e qualidade.",
                },
                {
                  icon: <BarChart3 className="w-7 h-7 text-primary-red" />,
                  title: "Facilities",
                  description:
                    "Serviços de terceirização para gestão e manutenção de instalações.",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="card-service"
                >
                  <CardContent className="p-6">
                    <div className="icon-container-lg mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg font-bold text-black mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <button onClick={() => navigate("/facilities")} className="text-primary-red font-medium text-sm hover:text-red-700 transition-colors inline-flex items-center gap-2">
                Ver todos os serviços
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Featured Projects Carousel Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                Projetos em Destaque
              </h2>
              <p className="text-gray-600 text-sm max-w-2xl mb-6">
                Conheça algumas de nossas obras mais recentes
              </p>
              <div className="section-divider"></div>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex carousel-slide"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {featuredProjects.map((project, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Card className="mx-4 bg-white shadow-xl overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0">
                          {/* Image */}
                          <div className="relative h-80 md:h-96">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 project-image-gradient"></div>
                            <div className="absolute bottom-4 left-4">
                                                          <span className="inline-block bg-primary-red text-white text-sm font-medium px-4 py-2 rounded">
                              {project.category}
                            </span>
                            </div>
                          </div>
                          {/* Content */}
                          <CardContent className="p-8 flex flex-col justify-center">
                            <CardTitle className="text-2xl font-bold text-black mb-4">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                              {project.description}
                            </CardDescription>
                          </CardContent>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="carousel-nav-btn prev"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="carousel-nav-btn next"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {featuredProjects.map((_, index) => (
                                  <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`carousel-dot ${
                    index === currentSlide ? "active" : ""
                  }`}
                />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                O que dizem nossos clientes
              </h2>
              <div className="section-divider"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "A RMG Construtora superou todas as nossas expectativas. O projeto foi entregue no prazo e com qualidade excepcional.",
                  author: "Carlos Silva",
                  position: "Diretor, Grupo Empresarial XYZ",
                },
                {
                  quote:
                    "Profissionalismo e atenção aos detalhes são marcas registradas da RMG. Recomendo sem hesitar.",
                  author: "Ana Oliveira",
                  position: "CEO, Corporação ABC",
                },
                {
                  quote:
                    "Nossa nova sede corporativa ficou exatamente como planejamos, graças à dedicação da equipe da RMG.",
                  author: "Roberto Santos",
                  position: "Presidente, Indústrias Santos",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-lg p-6">
                  <Quote className="w-8 h-8 text-primary-red mb-4" />
                  <CardContent className="p-0">
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-black text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.position}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1A365D] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Pronto para transformar seu projeto em realidade?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Entre em contato conosco para uma consulta gratuita e descubra como
              a RMG Construtora pode ajudar no seu próximo projeto.
            </p>
            <Button onClick={() => navigate("/fale-conosco")} className="btn-primary">
              Fale Conosco
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
                    <a
                      href="/"
                      className="footer-link"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/obra-empresarial"
                      className="footer-link"
                    >
                      Obra Empresarial
                    </a>
                  </li>
                  <li>
                    <a
                      href="/obra-corporativa"
                      className="footer-link"
                    >
                      Obra Corporativa
                    </a>
                  </li>
                  <li>
                    <a
                      href="/obra-residencial"
                      className="footer-link"
                    >
                      Obra Residencial
                    </a>
                  </li>
                  <li>
                    <a
                      href="/facilities"
                      className="footer-link"
                    >
                      Facilities
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sobre-nos"
                      className="footer-link"
                    >
                      Sobre Nós
                    </a>
                  </li>
                  <li>
                    <a
                      href="/fale-conosco"
                      className="footer-link"
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

export default Index;
