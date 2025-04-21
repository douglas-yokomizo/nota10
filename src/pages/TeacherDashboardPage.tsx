import { useState, useEffect } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { MdRefresh } from "react-icons/md";
import { PieChartReusable } from "../components/charts/PieChartReusable";
import { BarChartVerticalReusable } from "../components/charts/BarChartVerticalReusable";
import { LineChartReusable } from "../components/charts/LineChartReusable";
import { chartColors } from "../constants/chartColors";

type ClassKey = "5º ano A" | "5º ano B" | "6º ano A";

const TeacherDashboardPage = () => {
  const [selectedClass, setSelectedClass] = useState<ClassKey>("5º ano A");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("performance");

  const classes = [
    { id: 1, name: "5º ano A" },
    { id: 2, name: "5º ano B" },
    { id: 3, name: "6º ano A" },
  ];

  const mockData: Record<
    ClassKey,
    {
      studentPerformance: { name: string; value: number; color: string }[];
      classCompletion: { name: string; value: number; color: string }[];
      classComparison: { name: string; value: number; color: string }[];
      studentProgressData: {
        month: string;
        completed: number;
        pending: number;
        notStarted: number;
      }[];
    }
  > = {
    "5º ano A": {
      studentPerformance: [
        { name: "Ana Silva", value: 8.5, color: chartColors.bar2 },
        { name: "Bruno Costa", value: 7.2, color: chartColors.bar2 },
        { name: "Carla Oliveira", value: 9.0, color: chartColors.bar2 },
        { name: "Daniel Santos", value: 6.8, color: chartColors.bar2 },
        { name: "Eduarda Lima", value: 8.0, color: chartColors.bar2 },
      ],
      classCompletion: [
        { name: "Concluído", value: 15, color: chartColors.completed },
        { name: "Em andamento", value: 8, color: chartColors.inProgress },
        { name: "Não iniciado", value: 5, color: chartColors.notStarted },
      ],
      classComparison: [
        { name: "5º ano A", value: 8.2, color: chartColors.completed },
        { name: "5º ano B", value: 7.5, color: chartColors.inProgress },
        { name: "6º ano A", value: 7.9, color: chartColors.notStarted },
      ],
      studentProgressData: [
        { month: "Jan", completed: 5, pending: 2, notStarted: 3 },
        { month: "Fev", completed: 7, pending: 3, notStarted: 2 },
        { month: "Mar", completed: 10, pending: 4, notStarted: 1 },
        { month: "Abr", completed: 12, pending: 3, notStarted: 0 },
        { month: "Mai", completed: 15, pending: 2, notStarted: 0 },
      ],
    },
    "5º ano B": {
      studentPerformance: [
        { name: "Lucas Silva", value: 6.5, color: chartColors.bar2 },
        { name: "Mariana Souza", value: 7.9, color: chartColors.bar2 },
        { name: "João Pedro", value: 8.3, color: chartColors.bar2 },
        { name: "Larissa Mello", value: 7.1, color: chartColors.bar2 },
        { name: "Felipe Rocha", value: 6.8, color: chartColors.bar2 },
      ],
      classCompletion: [
        { name: "Concluído", value: 10, color: chartColors.completed },
        { name: "Em andamento", value: 12, color: chartColors.inProgress },
        { name: "Não iniciado", value: 3, color: chartColors.notStarted },
      ],
      classComparison: [
        { name: "5º ano A", value: 8.2, color: chartColors.completed },
        { name: "5º ano B", value: 7.5, color: chartColors.inProgress },
        { name: "6º ano A", value: 7.9, color: chartColors.notStarted },
      ],
      studentProgressData: [
        { month: "Jan", completed: 3, pending: 3, notStarted: 4 },
        { month: "Fev", completed: 6, pending: 4, notStarted: 1 },
        { month: "Mar", completed: 8, pending: 5, notStarted: 0 },
        { month: "Abr", completed: 9, pending: 4, notStarted: 0 },
        { month: "Mai", completed: 11, pending: 3, notStarted: 0 },
      ],
    },
    "6º ano A": {
      studentPerformance: [
        { name: "Gabriel Martins", value: 9.0, color: chartColors.bar2 },
        { name: "Sofia Andrade", value: 8.7, color: chartColors.bar2 },
        { name: "Henrique Dias", value: 7.9, color: chartColors.bar2 },
        { name: "Beatriz Lima", value: 8.5, color: chartColors.bar2 },
        { name: "Rafaela Campos", value: 9.2, color: chartColors.bar2 },
      ],
      classCompletion: [
        { name: "Concluído", value: 18, color: chartColors.completed },
        { name: "Em andamento", value: 4, color: chartColors.inProgress },
        { name: "Não iniciado", value: 2, color: chartColors.notStarted },
      ],
      classComparison: [
        { name: "5º ano A", value: 8.2, color: chartColors.completed },
        { name: "5º ano B", value: 7.5, color: chartColors.inProgress },
        { name: "6º ano A", value: 7.9, color: chartColors.notStarted },
      ],
      studentProgressData: [
        { month: "Jan", completed: 6, pending: 1, notStarted: 3 },
        { month: "Fev", completed: 9, pending: 2, notStarted: 0 },
        { month: "Mar", completed: 12, pending: 1, notStarted: 0 },
        { month: "Abr", completed: 14, pending: 0, notStarted: 0 },
        { month: "Mai", completed: 18, pending: 0, notStarted: 0 },
      ],
    },
  };

  const {
    studentPerformance,
    classCompletion,
    classComparison,
    studentProgressData,
  } = mockData[selectedClass];

  const filterData = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  useEffect(() => {
    if (selectedClass) filterData();
  }, [selectedClass]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8" bordered>
          <div className="p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h2 className="text-base font-bold mb-2 md:mb-0">
                Selecione a turma que deseja visualizar
              </h2>
              <div className="flex space-x-2">
                <Button
                  variant="primary"
                  size="small"
                  icon={<MdRefresh />}
                  onClick={filterData}
                  disabled={isLoading}
                >
                  {isLoading ? "Carregando..." : "Atualizar"}
                </Button>
              </div>
            </div>
            <div className="relative">
              <select
                className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-primary sm:text-sm"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value as ClassKey)}
                disabled={isLoading}
              >
                {classes.map((cls) => (
                  <option key={cls.id} value={cls.name}>
                    {cls.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>

        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {["performance", "progress", "comparison"].map((tab) => (
              <button
                key={tab}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? "border-[#6952EB] text-[#6952EB]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "performance"
                  ? "Desempenho"
                  : tab === "progress"
                  ? "Progresso"
                  : "Comparativo"}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === "performance" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card bordered>
              <div className="p-4">
                <h2 className="font-bold mb-2">Desempenho dos Alunos</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Gráfico de barras com notas individuais.
                </p>
                <BarChartVerticalReusable
                  data={studentPerformance}
                  domain={[0, 10]}
                />
              </div>
            </Card>

            <Card bordered>
              <div className="p-4">
                <h2 className="font-bold mb-2">Gráfico da Turma</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Pizza com alunos que concluíram, estão em andamento ou não
                  iniciaram.
                </p>
                <PieChartReusable data={classCompletion} />
              </div>
            </Card>
          </div>
        )}

        {activeTab === "progress" && (
          <Card bordered>
            <div className="p-4">
              <h2 className="font-bold mb-2">Progresso dos Alunos</h2>
              <p className="text-sm text-gray-500 mb-4">
                Gráfico de linha mostrando a evolução mensal.
              </p>
              <LineChartReusable
                data={studentProgressData}
                lines={[
                  {
                    dataKey: "completed",
                    stroke: chartColors.completed,
                    name: "Concluído",
                  },
                  {
                    dataKey: "pending",
                    stroke: chartColors.inProgress,
                    name: "Em andamento",
                  },
                  {
                    dataKey: "notStarted",
                    stroke: chartColors.notStarted,
                    name: "Não iniciado",
                  },
                ]}
              />
            </div>
          </Card>
        )}

        {activeTab === "comparison" && (
          <Card bordered>
            <div className="p-4">
              <h2 className="font-bold mb-2">Média das Turmas</h2>
              <p className="text-sm text-gray-500 mb-4">
                Comparativo entre as médias das turmas.
              </p>
              <BarChartVerticalReusable
                data={classComparison}
                domain={[0, 10]}
              />
            </div>
          </Card>
        )}
      </main>
    </div>
  );
};

export default TeacherDashboardPage;
