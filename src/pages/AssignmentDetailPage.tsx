import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { MdArrowBack, MdCheck } from "react-icons/md";
import { useUser } from "../contexts/UserContext";
import { Activity, Question, Option } from "../types/activity";
import { Header } from "../components/layout/Header";

// Mock activity data
const activityData: Activity = {
  id: 1,
  title: "Mapa Mundi: Desafio das Capitais",
  subject: "Geografia",
  class: "5º ano A",
  studentName: "João Vitor",
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
  status: "completed", // 'in-progress', 'pending', 'completed'
};

const AssignmentDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useUser();
  const [activity, setActivity] = useState<Activity>(activityData);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // In a real app, fetch the activity data based on the ID
  useEffect(() => {
    // This would be an API call in a real application
    // For now, we're using mock data
    console.log(`Fetching activity with ID: ${id}`);
  }, [id]);

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate("/")}
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
      </main>
    </div>
  );
};

export default AssignmentDetailPage;
