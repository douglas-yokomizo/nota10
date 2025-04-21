import Card from "../components/ui/Card";
import { useUser } from "../contexts/UserContext";
import { PieChartReusable } from "../components/charts/PieChartReusable";
import { LineChartReusable } from "../components/charts/LineChartReusable";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { chartColors } from "../constants/chartColors";

const ParentDashboardPage = () => {
  const { user } = useUser();

  const studentProgressData = [
    { name: "Concluído", value: 12, color: chartColors.completed },
    { name: "Não concluído", value: 5, color: chartColors.inProgress },
    { name: "Não iniciado", value: 8, color: chartColors.notStarted },
  ];

  const timelineData = [
    { month: "Jan", activities: 5 },
    { month: "Fev", activities: 8 },
    { month: "Mar", activities: 12 },
    { month: "Abr", activities: 7 },
    { month: "Mai", activities: 10 },
    { month: "Jun", activities: 15 },
  ];

  const performanceData = [
    { subject: "Matemática", score: 80, fullMark: 100 },
    { subject: "Português", score: 90, fullMark: 100 },
    { subject: "Ciências", score: 85, fullMark: 100 },
    { subject: "História", score: 70, fullMark: 100 },
    { subject: "Geografia", score: 75, fullMark: 100 },
    { subject: "Inglês", score: 95, fullMark: 100 },
  ];

  const childName = "Daniel Santos";

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Bem-vindo(a), {user?.name}
          </h1>
          <p className="text-gray-600">
            Acompanhe o desempenho escolar de {childName}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <Card bordered>
            <div className="p-4">
              <h2 className="text-base font-bold mb-2">Gráfico do Aluno</h2>
              <p className="text-sm text-gray-500 mb-4">
                Status das atividades do aluno.
              </p>
              <PieChartReusable data={studentProgressData} />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Card bordered>
            <div className="p-4">
              <h2 className="text-base font-bold mb-2">Gráfico Timeline</h2>
              <p className="text-sm text-gray-500 mb-4">
                Participação ao longo dos meses.
              </p>
              <LineChartReusable
                data={timelineData}
                lines={[
                  {
                    dataKey: "activities",
                    stroke: chartColors.bar3,
                    name: "Atividades",
                  },
                ]}
              />
            </div>
          </Card>

          <Card bordered>
            <div className="p-4">
              <h2 className="text-base font-bold mb-2">Desempenho do Aluno</h2>
              <p className="text-sm text-gray-500 mb-4">
                Matérias com melhor desempenho.
              </p>
              <div className="h-64 w-full">
                <ResponsiveContainer>
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={performanceData}
                  >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Daniel Santos"
                      dataKey="score"
                      stroke={chartColors.bar3}
                      fill={chartColors.bar3}
                      fillOpacity={0.6}
                    />
                    <Tooltip />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ParentDashboardPage;
