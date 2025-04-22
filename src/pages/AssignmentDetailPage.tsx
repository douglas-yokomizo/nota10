import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBack, MdCheck } from "react-icons/md";
import { useUser } from "../contexts/UserContext";
import { Activity, Question, Option } from "../types/activity";

// Mock activity data
const activityData: Activity[] = [
  {
    id: 1,
    title: "Mapa Mundi: Desafio das Capitais",
    subject: "Geografia",
    class: "5º ano A",
    studentName: "Daniel Santos",
    questions: [
      {
        id: 1,
        text: "Qual é a capital da Austrália?",
        options: [
          { id: 1, text: "Sydney" },
          { id: 2, text: "Melbourne" },
          { id: 3, text: "Canberra", isCorrect: true },
          { id: 4, text: "Brisbane" },
        ],
        selectedOption: 3,
        isCorrect: true,
      },
      {
        id: 2,
        text: "Qual é a capital do Canadá?",
        options: [
          { id: 1, text: "Toronto" },
          { id: 2, text: "Vancouver" },
          { id: 3, text: "Montreal" },
          { id: 4, text: "Ottawa", isCorrect: true },
        ],
        selectedOption: 1,
        isCorrect: false,
      },
    ],
    grade: 7.0,
    status: "in-progress",
  },
  {
    id: 2,
    title: "Fusos Horários e a Roda do Tempo",
    subject: "Geografia",
    class: "5º ano A",
    studentName: "Daniel Santos",
    questions: [
      {
        id: 1,
        text: "Quantos fusos horários existem no Brasil?",
        options: [
          { id: 1, text: "2" },
          { id: 2, text: "3" },
          { id: 3, text: "4", isCorrect: true },
          { id: 4, text: "5" },
        ],
        selectedOption: 3,
        isCorrect: true,
      },
    ],
    grade: 6.5,
    status: "in-progress",
  },
  {
    id: 3,
    title: "Forças da Natureza: Vulcões, Terremotos e Tsunamis",
    subject: "Geografia",
    class: "5º ano A",
    studentName: "Daniel Santos",
    questions: [
      {
        id: 1,
        text: "O que causa os terremotos?",
        options: [
          { id: 1, text: "Chuvas fortes" },
          { id: 2, text: "Movimentos das placas tectônicas", isCorrect: true },
          { id: 3, text: "Vulcões" },
          { id: 4, text: "Tsunamis" },
        ],
        selectedOption: 2,
        isCorrect: true,
      },
    ],
    grade: 7.5,
    status: "in-progress",
  },
  {
    id: 4,
    title: "Desafio dos Números: Multiplicação e Divisão",
    subject: "Matemática",
    class: "5º ano A",
    studentName: "Daniel Santos",
    questions: [
      {
        id: 1,
        text: "Quanto é 6 x 7?",
        options: [
          { id: 1, text: "42", isCorrect: true },
          { id: 2, text: "36" },
          { id: 3, text: "48" },
          { id: 4, text: "54" },
        ],
        selectedOption: 1,
        isCorrect: true,
      },
    ],
    grade: 10.0,
    status: "pending",
  },
  {
    id: 5,
    title: "Cores e Emoções: A Linguagem das Artes",
    subject: "Artes",
    class: "5º ano A",
    studentName: "Daniel Santos",
    questions: [
      {
        id: 1,
        text: "Qual cor representa tranquilidade?",
        options: [
          { id: 1, text: "Vermelho" },
          { id: 2, text: "Azul", isCorrect: true },
          { id: 3, text: "Amarelo" },
          { id: 4, text: "Preto" },
        ],
        selectedOption: 2,
        isCorrect: true,
      },
    ],
    grade: 9.0,
    status: "pending",
  },
  {
    id: 6,
    title: "Caça-Erros: Ortografia",
    subject: "Português",
    class: "5º ano A",
    studentName: "Daniel Santos",
    questions: [
      {
        id: 1,
        text: "Qual palavra está escrita corretamente?",
        options: [
          { id: 1, text: "Excessão" },
          { id: 2, text: "Essesão" },
          { id: 3, text: "Exceção", isCorrect: true },
          { id: 4, text: "Esceção" },
        ],
        selectedOption: 3,
        isCorrect: true,
      },
    ],
    grade: 8.5,
    status: "completed",
  },
  {
    id: 7,
    title: "What's the Word?",
    subject: "Inglês",
    class: "5º ano A",
    studentName: "Daniel Santos",
    questions: [
      {
        id: 1,
        text: "What is the translation of 'apple'?",
        options: [
          { id: 1, text: "Pêra" },
          { id: 2, text: "Maçã", isCorrect: true },
          { id: 3, text: "Banana" },
          { id: 4, text: "Uva" },
        ],
        selectedOption: 2,
        isCorrect: true,
      },
    ],
    grade: 7.0,
    status: "completed",
  },
];

const AssignmentDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useUser();
  const [activity, setActivity] = useState<Activity | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (id) {
      const found = activityData.find((a) => a.id === Number(id));
      setActivity(found || null);
    }
  }, [id]);

  if (!activity) {
    return (
      <div className="p-8">
        <p>Atividade não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <MdArrowBack className="mr-1" /> Voltar
          </button>
        </div>

        <div className="bg-[#F5F5F5] rounded-[20px] p-6 mb-8">
          <h1 className="text-lg font-bold mb-2">{activity.title}</h1>
          <p className="font-bold mb-1">Aluno: {activity.studentName}</p>
          <div className="flex flex-wrap gap-4">
            <p className="font-bold">{activity.class}</p>
            <p className="font-bold">{activity.subject}</p>
          </div>
        </div>

        {activity.questions.map((question: Question) => (
          <div key={question.id} className="mb-8">
            <div className="bg-[#E2E2E2] p-6 rounded-md">
              <h2 className="text-base font-bold mb-4">{question.text}</h2>
              <div className="space-y-3">
                {question.options.map((option: Option) => (
                  <div
                    key={option.id}
                    className={`
                      flex items-center justify-between p-3 rounded-md
                      ${
                        question.selectedOption === option.id
                          ? option.isCorrect
                            ? "bg-[#61E865] bg-opacity-20 border border-[#61E865]"
                            : "bg-[#FF3705] bg-opacity-20 border border-[#FF3705]"
                          : "bg-[#F8F8F8]"
                      }
                    `}
                  >
                    <span className="font-bold text-sm">{option.text}</span>
                    {question.selectedOption === option.id &&
                      option.isCorrect && (
                        <MdCheck className="text-[#61E865] h-5 w-5" />
                      )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {activity.status === "completed" && activity.grade !== undefined && (
          <div className="bg-[#61E865] p-4 rounded-lg text-center">
            <p className="text-white font-bold">
              Nota: {activity.grade.toFixed(1)}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AssignmentDetailPage;
