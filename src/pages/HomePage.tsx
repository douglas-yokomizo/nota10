import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const HomePage = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Bem-vindo ao <span className="text-primary">NOTA10</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                A plataforma educacional que conecta alunos e professores da
                FIAP, facilitando o acesso a materiais, notas e comunicação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="large">
                  Começar agora
                </Button>
                <Button variant="outline" size="large">
                  Saiba mais
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Estudantes FIAP"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Recursos da Plataforma
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo o que você precisa para ter sucesso em sua jornada acadêmica
              em um só lugar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverable className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Materiais de Estudo
              </h3>
              <p className="text-gray-600">
                Acesse materiais de estudo, apresentações, e-books e recursos
                complementares para suas disciplinas.
              </p>
            </Card>

            <Card hoverable className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Acompanhamento de Notas
              </h3>
              <p className="text-gray-600">
                Visualize suas notas, feedback dos professores e progresso
                acadêmico em tempo real.
              </p>
            </Card>

            <Card hoverable className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunicação Direta</h3>
              <p className="text-gray-600">
                Comunique-se diretamente com professores e colegas através de
                mensagens e fóruns de discussão.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-secondary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                10,000+
              </div>
              <div className="text-xl">Alunos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-xl">Professores</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-xl">Cursos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-xl">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              O que dizem nossos alunos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja o que os alunos da FIAP estão falando sobre a plataforma
              NOTA10.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card bordered hoverable>
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "A plataforma NOTA10 revolucionou minha experiência acadêmica.
                Agora consigo acompanhar minhas notas e acessar materiais de
                estudo de forma muito mais fácil."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <div className="font-semibold">Ana Silva</div>
                  <div className="text-sm text-gray-500">
                    Sistemas de Informação
                  </div>
                </div>
              </div>
            </Card>

            <Card bordered hoverable>
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Como professor, o NOTA10 me ajuda a organizar melhor meus
                materiais e a me comunicar de forma eficiente com os alunos. Uma
                ferramenta essencial!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <div className="font-semibold">Prof. Carlos Mendes</div>
                  <div className="text-sm text-gray-500">
                    Engenharia de Software
                  </div>
                </div>
              </div>
            </Card>

            <Card bordered hoverable>
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "A comunicação direta com os professores e o acesso rápido aos
                materiais de estudo fizeram toda a diferença no meu desempenho
                acadêmico."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <div className="font-semibold">Pedro Oliveira</div>
                  <div className="text-sm text-gray-500">Ciência de Dados</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Junte-se a milhares de alunos e professores que já estão usando a
            plataforma NOTA10 para melhorar sua experiência acadêmica.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="large">
              Criar conta
            </Button>
            <Button
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white/10"
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
