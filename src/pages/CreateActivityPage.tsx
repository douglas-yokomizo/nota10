import { useState } from "react";
import Button from "../components/ui/Button";

function CreateActivityPage() {
  const [turma, setTurma] = useState("");
  const [materia, setMateria] = useState("");
  const [titulo, setTitulo] = useState("");
  const [questoes, setQuestoes] = useState([
    { titulo: "", alternativas: ["", "", "", ""] },
  ]);

  const handleAddQuestao = () => {
    setQuestoes([...questoes, { titulo: "", alternativas: ["", "", "", ""] }]);
  };

  const handleQuestaoChange = (index: number, field: string, value: string) => {
    const novasQuestoes = [...questoes];
    if (field === "titulo") {
      novasQuestoes[index].titulo = value;
    } else {
      const altIndex = parseInt(field);
      novasQuestoes[index].alternativas[altIndex] = value;
    }
    setQuestoes(novasQuestoes);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ turma, materia, titulo, questoes });
  };

  const handleRemoveQuestao = (index: number) => {
    const novasQuestoes = [...questoes];
    novasQuestoes.splice(index, 1);
    setQuestoes(novasQuestoes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-4xl my-5 mx-auto bg-gray-100 p-6 rounded-3xl space-y-6">
        <h3 className="text-3 font-bold">Nova atividade</h3>

        <select
          className="w-full p-3 rounded-md bg-white"
          value={turma}
          onChange={(e) => setTurma(e.target.value)}
          required
        >
          <option value="">Selecione a turma</option>
          <option value="5a">5º ano A</option>
          <option value="5b">5º ano B</option>
          <option value="6a">6º ano A</option>
        </select>

        <select
          className="w-full p-3 rounded-md bg-white"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
          required
        >
          <option value="">Selecione a matéria</option>
          <option value="matematica">Matemática</option>
          <option value="portugues">Português</option>
          <option value="ciencias">Ciências</option>
          <option value="historia">História</option>
          <option value="geografia">Geografia</option>
          <option value="ingles">Inglês</option>
          <option value="artes">Artes</option>
          <option value="pe">Educação Física</option>
        </select>

        <input
          type="text"
          placeholder="Digite o nome da Atividade"
          className="w-full p-3 rounded-md bg-white"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        {questoes.map((questao, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg space-y-3">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">Questão {index + 1}</p>
              <button
                type="button"
                onClick={() => handleRemoveQuestao(index)}
                className="hover:text-purpleOne font-bold cursor-pointer"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4 0.613417C16.88 0.0934167 16.04 0.0934167 15.52 0.613417L8.99996 7.12008L2.47996 0.600083C1.95996 0.080083 1.11996 0.080083 0.599961 0.600083C0.079961 1.12008 0.079961 1.96008 0.599961 2.48008L7.11996 9.00008L0.599961 15.5201C0.079961 16.0401 0.079961 16.8801 0.599961 17.4001C1.11996 17.9201 1.95996 17.9201 2.47996 17.4001L8.99996 10.8801L15.52 17.4001C16.04 17.9201 16.88 17.9201 17.4 17.4001C17.92 16.8801 17.92 16.0401 17.4 15.5201L10.88 9.00008L17.4 2.48008C17.9066 1.97342 17.9066 1.12008 17.4 0.613417Z"
                    fill="#B2B2B2"
                  />
                </svg>
              </button>
            </div>
            <input
              type="text"
              placeholder="Título da questão"
              className="w-full p-3 rounded-md bg-white"
              value={questao.titulo}
              onChange={(e) =>
                handleQuestaoChange(index, "titulo", e.target.value)
              }
              required
            />
            {questao.alternativas.map((alt, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Alternativa ${i + 1}`}
                className="w-full p-3 rounded-md bg-white"
                value={alt}
                onChange={(e) =>
                  handleQuestaoChange(index, i.toString(), e.target.value)
                }
                required
              />
            ))}
          </div>
        ))}

        <Button
          type="button"
          onClick={handleAddQuestao}
          variant="secondary"
          className="w-full"
        >
          ADICIONAR NOVA QUESTÃO
        </Button>
      </div>

      <div className="max-w-4xl my-5 mx-auto ">
        <Button type="submit" variant="primary" className="w-full">
          CADASTRAR ATIVIDADE
        </Button>
      </div>
    </form>
  );
}

export default CreateActivityPage;
