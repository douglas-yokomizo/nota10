import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import { useUser } from "../contexts/UserContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { MdMenu, MdClose, MdExitToApp } from "react-icons/md";
import SideMenu from "../components/layout/SideMenu";

const StudentDashboardPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, isStudent, logout } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Redirect to login if not authenticated or not a student
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else if (!isStudent()) {
      // If authenticated but not a student, redirect to appropriate dashboard
      navigate("/login");
    }
  }, [isAuthenticated, isStudent, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
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

  // Mock data for the progress pie chart
  const progressData = [
    { name: "Concluído", value: 12, color: "#4CAF50" },
    { name: "Não concluído", value: 5, color: "#FFC107" },
    { name: "Não iniciado", value: 8, color: "#F44336" },
  ];

  // Mock data for the timeline chart
  const timelineData = [
    { month: "Jan", activities: 5 },
    { month: "Fev", activities: 8 },
    { month: "Mar", activities: 12 },
    { month: "Abr", activities: 7 },
    { month: "Mai", activities: 10 },
    { month: "Jun", activities: 15 },
  ];

  // Mock data for the ranking chart
  const rankingData = [
    { name: "Você", value: 85, color: "#B3FF3B" },
    { name: "Média da turma", value: 75, color: "#6952EB" },
    { name: "Melhor aluno", value: 95, color: "#52C2EB" },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Header */}
      <header className="bg-[#141414] shadow-md relative">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
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
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Progress Chart */}
          <Card bordered className="col-span-1">
            <div className="p-4">
              <h2 className="text-base font-bold mb-2">Meu progresso</h2>
              <p className="text-sm text-gray-500 mb-4">
                Gráfico Pizza com as métricas de soma do Aluno das atividades
                que já concluiu, que não concluíu e que não iniciou.
              </p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={progressData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {progressData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>

          {/* Timeline Chart */}
          <Card bordered className="col-span-1">
            <div className="p-4">
              <h2 className="text-base font-bold mb-2">Minha Timeline</h2>
              <p className="text-sm text-gray-500 mb-4">
                Mostrar a participação do aluno durante os meses.
              </p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={timelineData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="activities"
                      stroke="#B3FF3B"
                      activeDot={{ r: 8 }}
                      name="Atividades"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>

          {/* Ranking Chart */}
          <Card bordered className="col-span-1">
            <div className="p-4">
              <h2 className="text-base font-bold mb-2">Ranking</h2>
              <p className="text-sm text-gray-500 mb-4">
                Mostrar Gráfico do Ranking do aluno comparando com os outros
                alunos da turma.
              </p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={rankingData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Pontuação"]}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {rankingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboardPage;
