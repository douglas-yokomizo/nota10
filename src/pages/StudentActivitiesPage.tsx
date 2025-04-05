import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Select from "../components/ui/Select";
import SideMenu from "../components/layout/SideMenu";
import { MdMenu, MdClose, MdExitToApp } from "react-icons/md";
import { useUser } from "../contexts/UserContext";

// Mock children data for parent
const children = [
  { id: 1, name: "João Vitor", class: "5º ano A" },
  { id: 2, name: "Maria Clara", class: "3º ano B" },
];

// Mock activities data
const inProgressActivities = [
  {
    id: 1,
    title: "Mapa Mundi: Desafio das Capitais",
    subject: "Geografia",
    class: "5º ano A",
    dueDate: "2023-05-15",
    childId: 1,
  },
  {
    id: 2,
    title: "Fusos Horários e a Roda do Tempo",
    subject: "Geografia",
    class: "5º ano A",
    dueDate: "2023-05-20",
    childId: 1,
  },
  {
    id: 3,
    title: "Forças da Natureza: Vulcões, Terremotos e Tsunamis",
    subject: "Geografia",
    class: "5º ano A",
    dueDate: "2023-05-25",
    childId: 1,
  },
  {
    id: 8,
    title: "Alfabeto e Sons",
    subject: "Português",
    class: "3º ano B",
    dueDate: "2023-05-18",
    childId: 2,
  },
];

const pendingActivities = [
  {
    id: 4,
    title: "Desafio dos Números: Multiplicação e Divisão",
    subject: "Matemática",
    class: "5º ano A",
    dueDate: "2023-06-01",
    childId: 1,
  },
  {
    id: 5,
    title: "Cores e Emoções: A Linguagem das Artes",
    subject: "Artes",
    class: "5º ano A",
    dueDate: "2023-06-05",
    childId: 1,
  },
  {
    id: 9,
    title: "Contando Histórias",
    subject: "Português",
    class: "3º ano B",
    dueDate: "2023-06-03",
    childId: 2,
  },
];

const completedActivities = [
  {
    id: 6,
    title: "Caça-Erros: Ortografia",
    subject: "Português",
    class: "5º ano A",
    dueDate: "2023-04-20",
    grade: 8.5,
    childId: 1,
  },
  {
    id: 7,
    title: "What's the Word?",
    subject: "Inglês",
    class: "5º ano A",
    dueDate: "2023-04-15",
    grade: 7.0,
    childId: 1,
  },
  {
    id: 10,
    title: "Números de 1 a 10",
    subject: "Matemática",
    class: "3º ano B",
    dueDate: "2023-04-10",
    grade: 9.0,
    childId: 2,
  },
];

const StudentActivitiesPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user, isParent } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedChild, setSelectedChild] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Redirect to login if not authenticated or not a parent
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else if (!isParent()) {
      navigate("/login");
    } else {
      // Set the first child as selected by default
      if (children.length > 0 && !selectedChild) {
        setSelectedChild(children[0].id);
      }
    }
  }, [isAuthenticated, isParent, navigate, selectedChild]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleChildChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChild(Number(e.target.value));
  };

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

  // Filter activities based on selected child
  const filteredInProgressActivities = inProgressActivities.filter(
    (activity) => !selectedChild || activity.childId === selectedChild
  );

  const filteredPendingActivities = pendingActivities.filter(
    (activity) => !selectedChild || activity.childId === selectedChild
  );

  const filteredCompletedActivities = completedActivities.filter(
    (activity) => !selectedChild || activity.childId === selectedChild
  );

  // Get the selected child's name
  const selectedChildName = children.find(
    (child) => child.id === selectedChild
  )?.name;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-[#141414] shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-white text-2xl font-bold">N</span>
              <span className="text-white text-2xl font-normal">ota10</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user && (
              <div className="text-white text-sm hidden md:block">
                {user.name}
              </div>
            )}
            <button
              className="text-gray-400 hover:text-white"
              onClick={handleLogout}
              title="Sair"
            >
              <MdExitToApp className="h-6 w-6" />
            </button>
            <button
              className="text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <MdClose className="h-6 w-6" />
              ) : (
                <MdMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Side Menu */}
        <div ref={menuRef}>
          <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Child Selector */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Atividades do aluno</h1>
          {children.length > 1 && (
            <div className="bg-[#F5F5F5] rounded-[20px] p-6 mb-4">
              <h2 className="text-base font-bold mb-4">Selecione o aluno</h2>
              <div className="max-w-xs">
                <Select
                  options={children.map((child) => ({
                    value: child.id.toString(),
                    label: `${child.name} - ${child.class}`,
                  }))}
                  value={selectedChild?.toString() || ""}
                  onChange={handleChildChange}
                  fullWidth
                />
              </div>
            </div>
          )}
          {selectedChildName && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">
                Atividades de {selectedChildName}
              </h2>
            </div>
          )}
        </div>

        {/* In Progress Activities Section */}
        <div className="mb-8">
          <div className="bg-[#141414] rounded-t-[20px] p-4">
            <h2 className="text-white font-bold text-lg">Atividades em progresso</h2>
          </div>
          <div className="bg-[#F5F5F5] rounded-b-[20px] p-6">
            <div className="grid grid-cols-1 gap-4">
              {filteredInProgressActivities.length > 0 ? (
                filteredInProgressActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="bg-[#E2E2E2] p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-bold text-sm">{activity.title}</h3>
                      <p className="text-xs text-gray-600">{activity.subject}</p>
                    </div>
                    <Link to={`/parent-view-assignment/${activity.id}`}>
                      <Button className="bg-[#6952EB] hover:bg-[#5842e6] text-white py-1 px-4 rounded-md text-xs font-bold">
                        ABRIR
                      </Button>
                    </Link>
                  </div>
                ))
              ) : (
                <p>Nenhuma atividade em progresso.</p>
              )}
            </div>
          </div>
        </div>

        {/* Pending Activities Section */}
        <div className="mb-8">
          <div className="bg-[#52C2EB] rounded-t-[20px] p-4">
            <h2 className="text-black font-bold text-lg">Atividades Pendentes</h2>
          </div>
          <div className="bg-[#F5F5F5] rounded-b-[20px] p-6">
            <div className="grid grid-cols-1 gap-4">
              {filteredPendingActivities.length > 0 ? (
                filteredPendingActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="bg-[#E2E2E2] p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-bold text-sm">{activity.title}</h3>
                      <p className="text-xs text-gray-600">{activity.subject}</p>
                    </div>
                    <Link to={`/parent-view-assignment/${activity.id}`}>
                      <Button className="bg-[#6952EB] hover:bg-[#5842e6] text-white py-1 px-4 rounded-md text-xs font-bold">
                        ABRIR
                      </Button>
                    </Link>
                  </div>
                ))
              ) : (
                <p>Nenhuma atividade pendente.</p>
              )}
            </div>
          </div>
        </div>

        {/* Completed Activities Section */}
        <div className="mb-8">
          <div className="bg-[#B3FF3B] rounded-t-[20px] p-4">
            <h2 className="text-black font-bold text-lg">Atividades Concluídas</h2>
          </div>
          <div className="bg-[#F5F5F5] rounded-b-[20px] p-6">
            <div className="grid grid-cols-1 gap-4">
              {filteredCompletedActivities.length > 0 ? (
                filteredCompletedActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="bg-[#E2E2E2] p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-bold text-sm">{activity.title}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-gray-600">{activity.subject}</p>
                        <p className="text-xs font-bold text-green-600">
                          Nota: {activity.grade?.toFixed(1)}
                        </p>
                      </div>
                    </div>
                    <Link to={`/parent-view-assignment/${activity.id}`}>
                      <Button className="bg-[#6952EB] hover:bg-[#5842e6] text-white py-1 px-4 rounded-md text-xs font-bold">
                        ABRIR
                      </Button>
                    </Link>
                  </div>
                ))
              ) : (
                <p>Nenhuma atividade concluída.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentActivitiesPage;
