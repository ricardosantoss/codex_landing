import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { 
  Menu, 
  X, 
  ChevronDown, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Shield,
  Upload,
  Brain,
  FileCheck,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';
import './App.css';

// Importando as imagens
import heroImage from './assets/hero-image.jpg';
import processInfographic from './assets/process-infographic.jpg';
import teamImage from './assets/team-image.jpg';
import iconRejection from './assets/icon-rejection.png';
import iconTimeWaste from './assets/icon-time-waste.png';
import iconInconsistency from './assets/icon-inconsistency.jpg';
import iconAuditRisk from './assets/icon-audit-risk.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Demonstração agendada com sucesso! Entraremos em contato em breve.');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const problems = [
    {
      icon: iconRejection,
      title: "Glosas e Recusas",
      description: "Erros de codificação que resultam em perdas financeiras diretas."
    },
    {
      icon: iconTimeWaste,
      title: "Tempo Desperdiçado",
      description: "Sua equipe médica gasta horas preciosas em tarefas administrativas em vez de focar nos pacientes."
    },
    {
      icon: iconInconsistency,
      title: "Inconsistência",
      description: "Falta de padronização nos códigos entre diferentes profissionais, gerando dados não confiáveis."
    },
    {
      icon: iconAuditRisk,
      title: "Risco de Auditoria",
      description: "Vulnerabilidade a auditorias por codificação imprecisa ou incompleta."
    }
  ];

  const solutions = [
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "Análise por IA",
      subtitle: "Redução Drástica de Erros",
      description: "Nossa IA é treinada com milhões de documentos clínicos para interpretar o contexto e sugerir os códigos com a máxima precisão, diminuindo as glosas em até 80%."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Integração Simples",
      subtitle: "Eficiência Imediata",
      description: "Integre a CODEX.AI ao seu sistema de Prontuário Eletrônico (PEP) ou ERP em poucos passos e comece a codificar em minutos, não em semanas."
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: "Dashboard de Insights",
      subtitle: "Gestão Baseada em Dados",
      description: "Acompanhe em tempo real os principais indicadores (KPIs) de codificação, identifique gargalos e tome decisões estratégicas."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Envio do Documento",
      description: "Faça o upload do laudo ou prontuário, ou deixe que nossa API puxe os dados automaticamente do seu sistema.",
      icon: <Upload className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Mágica da IA",
      description: "Em segundos, nosso motor de IA analisa o texto, identifica termos clínicos e correlaciona com a base de dados CID.",
      icon: <Brain className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Validação e Confirmação",
      description: "A plataforma sugere os códigos mais relevantes com a justificativa baseada no texto. Sua equipe apenas revisa e confirma com um clique.",
      icon: <FileCheck className="w-8 h-8" />
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Ana Silva",
      position: "CEO & Fundadora",
      description: "Médica com 15 anos de experiência em gestão hospitalar e especialista em codificação CID."
    },
    {
      name: "Carlos Santos",
      position: "CTO",
      description: "Engenheiro de software especializado em IA e machine learning aplicado à saúde."
    },
    {
      name: "Maria Oliveira",
      position: "Head de Produto",
      description: "Especialista em UX/UI com foco em soluções para o setor de saúde."
    },
    {
      name: "João Costa",
      position: "Diretor Comercial",
      description: "Executivo com vasta experiência em vendas B2B para o mercado de saúde."
    }
  ];

  const faqs = [
    {
      question: "A plataforma é segura e compatível com a LGPD?",
      answer: "Sim, nossa plataforma segue todos os protocolos de segurança exigidos pela LGPD e possui certificações de segurança internacionais. Todos os dados são criptografados e armazenados em servidores seguros no Brasil."
    },
    {
      question: "Como funciona a integração com meu sistema atual?",
      answer: "Nossa API é compatível com os principais sistemas de PEP e ERP do mercado. O processo de integração é simples e pode ser realizado em poucos dias com o suporte da nossa equipe técnica."
    },
    {
      question: "Qual o nível de precisão da IA?",
      answer: "Nossa IA possui 99.7% de precisão na codificação CID, baseada em testes com milhões de documentos clínicos reais. A precisão é continuamente melhorada através de machine learning."
    },
    {
      question: "Preciso de uma equipe de TI para implementar?",
      answer: "Não necessariamente. Nossa equipe de suporte técnico auxilia em todo o processo de implementação. Para integrações mais complexas, oferecemos consultoria especializada."
    },
    {
      question: "Existe um período de teste gratuito?",
      answer: "Sim, oferecemos um período de teste de 30 dias totalmente gratuito, sem compromisso. Durante este período, você terá acesso completo à plataforma e suporte técnico."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">
              CODEX.AI
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('funcionalidades')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('equipe')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Equipe
              </button>
              <button 
                onClick={() => scrollToSection('precos')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Preços
              </button>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Agendar Demonstração
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <button 
                  onClick={() => scrollToSection('funcionalidades')}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Funcionalidades
                </button>
                <button 
                  onClick={() => scrollToSection('como-funciona')}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Como Funciona
                </button>
                <button 
                  onClick={() => scrollToSection('equipe')}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Equipe
                </button>
                <button 
                  onClick={() => scrollToSection('precos')}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Preços
                </button>
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="bg-blue-600 hover:bg-blue-700 w-full"
                >
                  Agendar Demonstração
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Elimine Glosas e Acelere o Faturamento com a 
                <span className="text-blue-600"> Codificação CID por IA</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Nossa plataforma de IA analisa laudos, prontuários e documentos médicos em segundos para sugerir os códigos CID corretos, reduzindo erros humanos e otimizando o ciclo de receita da sua instituição.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                  onClick={() => scrollToSection('contato')}
                >
                  Solicitar Demonstração Gratuita
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4"
                  onClick={() => scrollToSection('como-funciona')}
                >
                  Veja a IA em Ação
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="CODEX.AI Platform" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-green-600">99.7%</div>
                <div className="text-sm text-gray-600">Precisão</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600">10x</div>
                <div className="text-sm text-gray-600">Mais Rápido</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Confiança de quem é referência na saúde
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-lg font-semibold text-gray-500">Hospital ABC</div>
            <div className="text-lg font-semibold text-gray-500">Clínica XYZ</div>
            <div className="text-lg font-semibold text-gray-500">Operadora 123</div>
            <div className="text-lg font-semibold text-gray-500">Centro Médico DEF</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              A codificação CID manual está custando caro para sua operação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identifique os principais desafios que sua equipe enfrenta diariamente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src={problem.icon} 
                      alt={problem.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="funcionalidades" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              CODEX.AI: A Precisão da Inteligência Artificial no Coração do seu Faturamento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforme os desafios da codificação em vantagens competitivas
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-blue-600">
                    {solution.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transforme documentos em códigos precisos em 3 passos simples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como é fácil e rápido usar a CODEX.AI
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={processInfographic} 
                alt="Como funciona a CODEX.AI" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      {step.icon}
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Conheça Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especialistas dedicados a revolucionar a codificação médica
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src={teamImage} 
                alt="Equipe CODEX.AI" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Uma equipe multidisciplinar focada na excelência
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa equipe combina expertise médica, tecnológica e comercial para entregar a melhor solução de codificação CID do mercado. Trabalhamos incansavelmente para garantir que sua instituição tenha acesso à tecnologia mais avançada e ao suporte mais qualificado.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">100+</div>
                  <div className="text-sm text-gray-600">Clientes Atendidos</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA and Contact Form */}
      <section id="contato" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Pronto para revolucionar sua codificação e otimizar seu faturamento?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Agende uma demonstração personalizada e sem compromisso. Nossa equipe mostrará como a CODEX.AI pode se adaptar à sua realidade e gerar resultados imediatos.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Agendar Minha Demonstração Agora
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail Corporativo</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Nome da Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="position">Cargo</Label>
                      <Input
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Mensagem (Opcional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Agendar Demonstração
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    Seus dados estão seguros. Não enviamos spam. ✓ Conformidade com a LGPD
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas? Nós respondemos.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encontre respostas para as perguntas mais frequentes sobre a CODEX.AI
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="cursor-pointer" onClick={() => toggleFaq(index)}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">
                CODEX.AI
              </div>
              <p className="text-gray-400 mb-4">
                Inteligência artificial a serviço da saúde.
              </p>
              <div className="flex space-x-4">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#funcionalidades" className="hover:text-white">Funcionalidades</a></li>
                <li><a href="#como-funciona" className="hover:text-white">Como Funciona</a></li>
                <li><a href="#precos" className="hover:text-white">Preços</a></li>
                <li><a href="#" className="hover:text-white">Integrações</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#equipe" className="hover:text-white">Equipe</a></li>
                <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@codex.ai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 CODEX.AI. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
