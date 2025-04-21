import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import { useUser } from "../contexts/UserContext";
import { PieChartReusable } from "../components/charts/PieChartReusable";
import { LineChartReusable } from "../components/charts/LineChartReusable";
import { BarChartVerticalReusable } from "../components/charts/BarChartVerticalReusable";
import { chartColors } from "../constants/chartColors";

const StudentDashboardPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isStudent } = useUser();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
    else if (!isStudent()) navigate("/login");
  }, [isAuthenticated, isStudent, navigate]);

  const progressData = [
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

  const rankingData = [
    { name: "Você (Daniel)", value: 85, color: chartColors.bar1 },
    { name: "Média da turma", value: 75, color: chartColors.bar2 },
    { name: "Melhor aluno", value: 95, color: chartColors.bar3 },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <Card bordered>
            <div className="p-4">
              <h2 className="text-base font-bold mb-2">Meu progresso</h2>
              <p className="text-sm text-gray-500 mb-4">
                Atividades concluídas, em andamento e não iniciadas.
              </p>
              <PieChartReusable data={progressData} />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Card bordered>
            <div className="p-4">
              <h2 className="text-base font-bold mb-2">Minha Timeline</h2>
              <p className="text-sm text-gray-500 mb-4">
                Participação mensal em atividades.
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
              <h2 className="text-base font-bold mb-2">Ranking</h2>
              <p className="text-sm text-gray-500 mb-4">
                Comparativo entre você e outros alunos.
              </p>
              <BarChartVerticalReusable data={rankingData} domain={[0, 100]} />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboardPage;
