import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { MdArrowBack, MdCheck } from "react-icons/md";
import { useUser } from "../contexts/UserContext";
import { Activity, Question, Option } from "../types/activity";

// Mock activity data
const activitiesData: Activity[] = [
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
      {
        id: 3,
        text: "Qual é a capital do Japão?",
        options: [
          { id: 1, text: "Osaka" },
          { id: 2, text: "Kyoto" },
          { id: 3, text: "Tokyo", isCorrect: true },
          { id: 4, text: "Hiroshima" },
        ],
        selectedOption: 3,
        isCorrect: true,
      },
    ],
    grade: 7.0,
    status: "in-progress", // 'in-progress', 'pending', 'completed'
    childId: 1,
  },
  {
    id: 10,
    title: "Números de 1 a 10",
    subject: "Matemática",
    class: "5º ano A",
    studentName: "Daniel Santos",
    questions: [
      {
        id: 1,
        text: "Quantas maçãs estão na imagem?",
        options: [
          { id: 1, text: "5" },
          { id: 2, text: "7", isCorrect: true },
          { id: 3, text: "8" },
          { id: 4, text: "10" },
        ],
        selectedOption: 2,
        isCorrect: true,
      },
      {
        id: 2,
        text: "Qual é o número que vem depois do 6?",
        options: [
          { id: 1, text: "5" },
          { id: 2, text: "6" },
          { id: 3, text: "7", isCorrect: true },
          { id: 4, text: "8" },
        ],
        selectedOption: 3,
        isCorrect: true,
      },
    ],
    grade: 9.0,
    status: "completed",
    childId: 2,
  },
];

const ParentViewAssignmentPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated, isParent } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activity, setActivity] = useState<Activity | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Redirect to login if not authenticated or not a parent
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else if (!isParent()) {
      navigate("/login");
    }
  }, [isAuthenticated, isParent, navigate]);

  // In a real app, fetch the activity data based on the ID
  useEffect(() => {
    if (id) {
      const foundActivity = activitiesData.find((act) => act.id === Number(id));
      if (foundActivity) {
        setActivity(foundActivity);
      } else {
        // Activity not found, redirect to activities page
        navigate("/student-activities");
      }
    }
  }, [id, navigate]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  if (!activity) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <p>Carregando atividade...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <MdArrowBack className="mr-1" /> Voltar
          </button>
        </div>

        {/* Activity Header */}
        <div className="bg-[#F5F5F5] rounded-[20px] p-6 mb-8">
          <h1 className="text-lg font-bold mb-2">{activity.title}</h1>
          <p className="font-bold mb-1">Aluno: {activity.studentName}</p>
          <div className="flex flex-wrap gap-4">
            <p className="font-bold">{activity.class}</p>
            <p className="font-bold">{activity.subject}</p>
          </div>
        </div>

        {/* Questions */}
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

        {/* Grade */}
        {activity.status === "completed" && activity.grade !== undefined && (
          <div className="bg-[#61E865] p-4 rounded-lg text-center">
            <p className="text-white font-bold">
              Nota: {activity.grade.toFixed(1)}
            </p>
          </div>
        )}

        {/* Parent Actions */}
        <div className="mt-8 flex justify-center">
          <Button
            className="bg-[#6952EB] hover:bg-[#5842e6] text-white py-2 px-6 rounded-md font-bold"
            onClick={() =>
              window.open(
                `mailto:professor@escola.com?subject=Sobre a atividade: ${activity.title}&body=Olá professor(a), gostaria de conversar sobre a atividade "${activity.title}" do meu filho(a) ${activity.studentName}.`
              )
            }
          >
            Contatar Professor
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ParentViewAssignmentPage;
