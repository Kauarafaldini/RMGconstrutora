import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ChevronDown,
  ChevronUp,
  Link,
} from "lucide-react";

const FaleConosco = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacyAccepted: false,
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("enviando");

    try {
      const response = await fetch("https://localhost/send-form.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          ...formData,
          privacyAccepted: formData.privacyAccepted ? "true" : "false",
        }).toString(),
      });

      const text = await response.text();
      if (text.includes("success")) {
        setStatus("sucesso");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          privacyAccepted: false,
        });
      } else {
        setStatus("erro");
      }
    } catch {
      setStatus("erro");
    }
  };

  const faqData = [
    {
      question: "Quais áreas de atuação da RMG Construtora?",
      answer:
        "A RMG Construtora atua em obras empresariais, corporativas, residenciais e serviços de facilities (terceirização), oferecendo soluções completas para diversos segmentos.",
    },
    {
      question: "Como solicitar um orçamento para meu projeto?",
      answer:
        "Você pode solicitar um orçamento através do formulário de contato em nosso site, por telefone ou e-mail. Nossa equipe entrará em contato para agendar uma reunião e entender melhor suas necessidades.",
    },
    {
      question: "A RMG Construtora atua em quais regiões do Brasil?",
      answer:
        "Atualmente, temos escritórios em São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba e Brasília, mas realizamos projetos em todo o território nacional.",
    },
    {
      question: "Quais garantias a RMG oferece para seus serviços?",
      answer:
        "Oferecemos garantia de 5 anos para problemas estruturais e 1 ano para acabamentos, conforme previsto no Código de Defesa do Consumidor. Além disso, mantemos um serviço de pós-obra para atendimento a qualquer necessidade.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-96 bg-black flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="max-w-2xl">
              <h1 className="text-white text-5xl font-bold mb-6">Fale Conosco</h1>
              <div className="w-20 h-1 bg-[#8B0000] mb-6"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Estamos à disposição para esclarecer dúvidas, receber sugestões e
                iniciar novos projetos. Entre em contato conosco.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-black text-3xl font-bold mb-4">
                    Entre em contato
                  </h2>
                  <p className="text-gray-600 text-sm mb-6">
                    Estamos prontos para atender você
                  </p>
                  <div className="w-20 h-1 bg-[#8B0000]"></div>
                </div>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#8B0000] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-black text-base font-bold mb-1">
                        Endereço
                      </h3>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Av. Paulista, 1000, 10º andar</p>
                        <p>Bela Vista, São Paulo - SP</p>
                        <p>CEP: 01310-100</p>
                      </div>
                    </div>
                  </div>

                  {/* Phones */}
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#8B0000] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-black text-base font-bold mb-1">
                        Telefones
                      </h3>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>+55 (11) 5555-5555</p>
                        <p>+55 (11) 98765-4321</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#8B0000] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-black text-base font-bold mb-1">
                        E-mail
                      </h3>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>contato@rmgconstrutora.com.br</p>
                        <p>comercial@rmgconstrutora.com.br</p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#8B0000] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-black text-base font-bold mb-1">
                        Horário de Atendimento
                      </h3>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 9h às 13h</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-black text-base font-bold mb-4">
                    Redes Sociais
                  </h3>
                  <div className="flex gap-4">
                    <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                      <Facebook className="w-5 h-5 text-black" />
                    </div>
                    <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                      <Instagram className="w-5 h-5 text-black" />
                    </div>
                    <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                      <Youtube className="w-5 h-5 text-black" />
                    </div>
                    <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                      <Linkedin className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="p-8 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="text-black text-xl font-bold mb-6">
                    Envie sua mensagem
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-gray-700 text-xs font-medium"
                      >
                        Nome completo
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-gray-700 text-xs font-medium"
                      >
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-gray-700 text-xs font-medium"
                      >
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="subject"
                        className="text-gray-700 text-xs font-medium"
                      >
                        Assunto
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setFormData({ ...formData, subject: value })
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="orcamento">
                            Solicitar Orçamento
                          </SelectItem>
                          <SelectItem value="obras">
                            Obras Empresariais
                          </SelectItem>
                          <SelectItem value="facilities">
                            Serviços de Facilities
                          </SelectItem>
                          <SelectItem value="duvidas">Dúvidas Gerais</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-gray-700 text-xs font-medium"
                      >
                        Mensagem
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Descreva como podemos ajudar..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.privacyAccepted}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            privacyAccepted: checked as boolean,
                          })
                        }
                      />
                      <Label htmlFor="privacy" className="text-gray-600 text-xs">
                        Concordo com a política de privacidade e termos de uso
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#8B0000] hover:bg-[#660000] text-white py-3"
                      disabled={!formData.privacyAccepted || status === "enviando"}
                    >
                      {status === "enviando" ? "Enviando..." : "Enviar mensagem"}
                    </Button>

                    {status === "sucesso" && (
                      <p className="text-green-600 mt-2">Mensagem enviada com sucesso!</p>
                    )}
                    {status === "erro" && (
                      <p className="text-red-600 mt-2">Erro ao enviar. Tente novamente mais tarde.</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Company Info */}
              <div>
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-white text-lg font-bold">RMG</span>
                  <span className="text-[#8B0000] text-lg font-bold">
                    CONSTRUTORA
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Especializada em obras empresariais, corporativas e
                  residenciais, além de serviços de terceirização.
                </p>
                <div className="flex gap-4">
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
                <h3 className="text-white text-base font-semibold mb-4">
                  Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#8B0000] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">
                      Av. Paulista, 1000, São Paulo - SP
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#8B0000] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">(11) 5555-5555</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#8B0000] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">
                      contato@rmgconstrutora.com.br
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <p className="text-center text-gray-400 text-xs">
                2025 RMG Construtora. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default FaleConosco;
