import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { ActivityListItem } from "../types/activity";
import { Header } from "../components/layout/Header";

// Mock activities data
const inProgressActivities: ActivityListItem[] = [
  {
    id: 1,
    title: "Mapa Mundi: Desafio das Capitais",
    subject: "Geografia",
    class: "5º ano A",
    dueDate: "2023-05-15",
  },
  {
    id: 2,
    title: "Fusos Horários e a Roda do Tempo",
    subject: "Geografia",
    class: "5º ano A",
    dueDate: "2023-05-20",
  },
  {
    id: 3,
    title: "Forças da Natureza: Vulcões, Terremotos e Tsunamis",
    subject: "Geografia",
    class: "5º ano A",
    dueDate: "2023-05-25",
  },
];

const pendingActivities: ActivityListItem[] = [
  {
    id: 4,
    title: "Desafio dos Números: Multiplicação e Divisão",
    subject: "Matemática",
    class: "5º ano A",
    dueDate: "2023-06-01",
  },
  {
    id: 5,
    title: "Cores e Emoções: A Linguagem das Artes",
    subject: "Artes",
    class: "5º ano A",
    dueDate: "2023-06-05",
  },
];

const completedActivities: ActivityListItem[] = [
  {
    id: 6,
    title: "Caça-Erros: Ortografia",
    subject: "Português",
    class: "5º ano A",
    dueDate: "2023-04-20",
    grade: 8.5,
  },
  {
    id: 7,
    title: "What's the Word?",
    subject: "Inglês",
    class: "5º ano A",
    dueDate: "2023-04-15",
    grade: 7.0,
  },
];

const AssignmentsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* In Progress Activities Section */}
        <div className="mb-8">
          <div className="bg-[#141414] rounded-t-[20px] p-4">
            <h2 className="text-white font-bold text-lg">
              Atividades em progresso
            </h2>
          </div>
          <div className="bg-[#F5F5F5] rounded-b-[20px] p-6">
            <div className="grid grid-cols-1 gap-4">
              {inProgressActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-[#E2E2E2] p-4 rounded-md flex justify-between items-center"
                >
                  <h3 className="font-bold text-sm">{activity.title}</h3>
                  <Link to={`/assignment/${activity.id}`}>
                    <Button className="bg-[#6952EB] hover:bg-[#5842e6] text-white py-1 px-4 rounded-md text-xs font-bold">
                      ABRIR
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Activities Section */}
        <div className="mb-8">
          <div className="bg-[#52C2EB] rounded-t-[20px] p-4">
            <h2 className="text-black font-bold text-lg">
              Atividades Pendentes
            </h2>
          </div>
          <div className="bg-[#F5F5F5] rounded-b-[20px] p-6">
            <div className="grid grid-cols-1 gap-4">
              {pendingActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-[#E2E2E2] p-4 rounded-md flex justify-between items-center"
                >
                  <h3 className="font-bold text-sm">{activity.title}</h3>
                  <Link to={`/assignment/${activity.id}`}>
                    <Button className="bg-[#6952EB] hover:bg-[#5842e6] text-white py-1 px-4 rounded-md text-xs font-bold">
                      ABRIR
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Completed Activities Section */}
        <div className="mb-8">
          <div className="bg-[#B3FF3B] rounded-t-[20px] p-4">
            <h2 className="text-black font-bold text-lg">
              Atividades Concluídas
            </h2>
          </div>
          <div className="bg-[#F5F5F5] rounded-b-[20px] p-6">
            <div className="grid grid-cols-1 gap-4">
              {completedActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-[#E2E2E2] p-4 rounded-md flex justify-between items-center"
                >
                  <h3 className="font-bold text-sm">{activity.title}</h3>
                  <Link to={`/assignment/${activity.id}`}>
                    <Button className="bg-[#6952EB] hover:bg-[#5842e6] text-white py-1 px-4 rounded-md text-xs font-bold">
                      ABRIR
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AssignmentsPage;
