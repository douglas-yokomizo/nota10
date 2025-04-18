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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const ParentDashboardPage = () => {
  const { user } = useUser();

  // Mock data for the student progress pie chart
  const studentProgressData = [
    { name: "Concluído", value: 15, color: "#4CAF50" },
    { name: "Não concluído", value: 7, color: "#FFC107" },
    { name: "Não iniciado", value: 10, color: "#F44336" },
  ];

  // Mock data for the timeline chart
  const timelineData = [
    { month: "Jan", activities: 8 },
    { month: "Fev", activities: 10 },
    { month: "Mar", activities: 15 },
    { month: "Abr", activities: 12 },
    { month: "Mai", activities: 18 },
    { month: "Jun", activities: 20 },
  ];

  // Mock data for the radar chart (student performance by subject)
  const performanceData = [
    { subject: "Matemática", score: 80, fullMark: 100 },
    { subject: "Português", score: 90, fullMark: 100 },
    { subject: "Ciências", score: 85, fullMark: 100 },
    { subject: "História", score: 70, fullMark: 100 },
    { subject: "Geografia", score: 75, fullMark: 100 },
    { subject: "Inglês", score: 95, fullMark: 100 },
  ];

  // Get child name from user context or use a default
  const childName = "João"; // In a real app, this would come from the user context or API

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Bem-vindo(a), {user?.name}
          </h1>
          <p className="text-gray-600">
            Acompanhe o desempenho escolar de {childName}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Student Progress Chart */}
          <Card bordered className="col-span-1">
            <div className="p-4">
              <h2 className="text-base font-bold mb-2">Gráfico do Aluno</h2>
              <p className="text-sm text-gray-500 mb-4">
                Gráfico Pizza com as métricas de soma do Aluno das atividades
                que já concluiu, que não concluíu e que não iniciou.
              </p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={studentProgressData}
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
                      {studentProgressData.map((entry, index) => (
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
              <h2 className="text-base font-bold mb-2">Gráfico Timeline</h2>
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
                      stroke="#6952EB"
                      activeDot={{ r: 8 }}
                      name="Atividades"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>

          {/* Performance Radar Chart */}
          <Card bordered className="col-span-1">
            <div className="p-4">
              <h2 className="text-base font-bold mb-2">Desempenho do Aluno</h2>
              <p className="text-sm text-gray-500 mb-4">
                Gráfico de Radar com as matérias que o aluno tem melhor
                desempenho.
              </p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
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
                      name="Desempenho"
                      dataKey="score"
                      stroke="#52C2EB"
                      fill="#52C2EB"
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
