import React, { useState, useEffect } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import SideMenu from "../components/layout/SideMenu";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { MdMenu, MdFilterList, MdRefresh } from "react-icons/md";

const TeacherDashboardPage = () => {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("performance");

  // Mock data for the dashboard
  const classes = [
    { id: 1, name: "5º ano A" },
    { id: 2, name: "5º ano B" },
    { id: 3, name: "6º ano A" },
  ];

  // Mock data for student performance
  const studentPerformance = [
    { id: 1, name: "Ana Silva", grade: 8.5 },
    { id: 2, name: "Bruno Costa", grade: 7.2 },
    { id: 3, name: "Carla Oliveira", grade: 9.0 },
    { id: 4, name: "Daniel Santos", grade: 6.8 },
    { id: 5, name: "Eduarda Lima", grade: 8.0 },
  ];

  // Mock data for class completion
  const classCompletion = [
    { name: "Concluído", value: 15, color: "#4CAF50" },
    { name: "Em andamento", value: 8, color: "#FFC107" },
    { name: "Não iniciado", value: 5, color: "#F44336" },
  ];

  // Mock data for class comparison
  const classComparison = [
    { name: "5º ano A", average: 8.2 },
    { name: "5º ano B", average: 7.5 },
    { name: "6º ano A", average: 7.9 },
  ];

  // Mock data for student progress over time
  const studentProgressData = [
    { month: "Jan", completed: 5, pending: 2, notStarted: 3 },
    { month: "Fev", completed: 7, pending: 3, notStarted: 2 },
    { month: "Mar", completed: 10, pending: 4, notStarted: 1 },
    { month: "Abr", completed: 12, pending: 3, notStarted: 0 },
    { month: "Mai", completed: 15, pending: 2, notStarted: 0 },
  ];

  // Function to filter data based on selected class
  const filterData = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  // Effect to filter data when class changes
  useEffect(() => {
    if (selectedClass) {
      filterData();
    }
  }, [selectedClass]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Side Menu */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Header */}
      <header className="bg-[#141414] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-white text-2xl font-bold">N</span>
              <span className="text-white text-2xl font-normal">ota10</span>
            </div>
          </div>
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <MdMenu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Class Selection */}
        <Card className="mb-8" bordered>
          <div className="p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h2 className="text-base font-bold mb-2 md:mb-0">
                Selecione a turma que deseja visualizar
              </h2>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="small"
                  icon={<MdRefresh />}
                  onClick={filterData}
                  disabled={isLoading}
                >
                  {isLoading ? "Carregando..." : "Atualizar"}
                </Button>
                <Button variant="outline" size="small" icon={<MdFilterList />}>
                  Filtros
                </Button>
              </div>
            </div>
            <div className="relative">
              <select
                className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                disabled={isLoading}
              >
                <option value="">Selecione a turma</option>
                {classes.map((cls) => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </Card>

        {/* Dashboard Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "performance"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("performance")}
            >
              Desempenho
            </button>
            <button
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "progress"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("progress")}
            >
              Progresso
            </button>
            <button
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "comparison"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("comparison")}
            >
              Comparativo
            </button>
          </nav>
        </div>

        {/* Dashboard Graphs */}
        {activeTab === "performance" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Student Performance */}
            <Card className="col-span-1" bordered>
              <div className="p-4">
                <h2 className="text-base font-bold mb-2">
                  Desempenho dos Alunos
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Gráfico de barras mostrando o desempenho individual dos
                  alunos.
                </p>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={studentPerformance}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" domain={[0, 10]} />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip formatter={(value) => [`${value}`, "Nota"]} />
                      <Bar
                        dataKey="grade"
                        fill="#4F46E5"
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>

            {/* Class Graph */}
            <Card className="col-span-1" bordered>
              <div className="p-4">
                <h2 className="text-base font-bold mb-2">Gráfico da Turma</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Gráfico Pizza com as métricas de soma Alunos que já
                  concluíram, alunos que não concluíram e alunos que não
                  iniciaram.
                </p>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={classCompletion}
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
                        {classCompletion.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value, name) => [`${value} alunos`, name]}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "progress" && (
          <div className="grid grid-cols-1 gap-8">
            {/* Student Progress Over Time */}
            <Card bordered>
              <div className="p-4">
                <h2 className="text-base font-bold mb-2">
                  Progresso dos Alunos ao Longo do Tempo
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Gráfico de linha mostrando o progresso dos alunos nos últimos
                  meses.
                </p>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={studentProgressData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="completed"
                        stroke="#4CAF50"
                        activeDot={{ r: 8 }}
                        name="Concluído"
                      />
                      <Line
                        type="monotone"
                        dataKey="pending"
                        stroke="#FFC107"
                        name="Em andamento"
                      />
                      <Line
                        type="monotone"
                        dataKey="notStarted"
                        stroke="#F44336"
                        name="Não iniciado"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "comparison" && (
          <div className="grid grid-cols-1 gap-8">
            {/* Comparative Graph */}
            <Card bordered>
              <div className="p-4">
                <h2 className="text-base font-bold mb-2">
                  Gráfico comparativo das Turmas
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Gráfico de Barras comparando as turmas por média de
                  aproveitamento.
                </p>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={classComparison}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 10]} />
                      <Tooltip formatter={(value) => [`${value}`, "Média"]} />
                      <Bar
                        dataKey="average"
                        fill="#4CAF50"
                        radius={[4, 4, 0, 0]}
                        name="Média da Turma"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default TeacherDashboardPage;
