import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Select from "../components/ui/Select";
import { MdArrowBack } from "react-icons/md";
import { Header } from "../components/layout/Header";

// Mock data
const subjects = [
  { value: "math", label: "Matemática" },
  { value: "portuguese", label: "Português" },
  { value: "science", label: "Ciências" },
  { value: "history", label: "História" },
  { value: "geography", label: "Geografia" },
  { value: "english", label: "Inglês" },
  { value: "arts", label: "Artes" },
  { value: "pe", label: "Educação Física" },
];

const classes = [
  { value: "5a", label: "5º ano A" },
  { value: "5b", label: "5º ano B" },
  { value: "6a", label: "6º ano A" },
  { value: "6b", label: "6º ano B" },
];

// Mock activities data
const activities = [
  {
    id: 1,
    title: "Mapa Mundi: Desafio das Capitais",
    subject: "geography",
    class: "5a",
    status: "in-progress",
    completedCount: 2,
    totalCount: 5,
  },
  {
    id: 2,
    title: "Fusos Horários e a Roda do Tempo",
    subject: "geography",
    class: "5a",
    status: "pending",
    completedCount: 0,
    totalCount: 5,
  },
  {
    id: 3,
    title: "Forças da Natureza: Vulcões, Terremotos e Tsunamis",
    subject: "geography",
    class: "5a",
    status: "completed",
    completedCount: 5,
    totalCount: 5,
  },
  {
    id: 4,
    title: "Operações com Frações",
    subject: "math",
    class: "5a",
    status: "in-progress",
    completedCount: 3,
    totalCount: 5,
  },
  {
    id: 5,
    title: "Interpretação de Texto",
    subject: "portuguese",
    class: "5b",
    status: "pending",
    completedCount: 0,
    totalCount: 5,
  },
];

const ClassesStudentsPage = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(e.target.value);
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(e.target.value);
  };

  const handleSearch = () => {
    if (selectedSubject && selectedClass) {
      setSearchPerformed(true);
    }
  };

  // Filter activities based on selected subject and class
  const filteredActivities = activities.filter(
    (activity) =>
      (!selectedSubject || activity.subject === selectedSubject) &&
      (!selectedClass || activity.class === selectedClass)
  );

  // Get the subject and class labels for display
  const selectedSubjectLabel = subjects.find(
    (subject) => subject.value === selectedSubject
  )?.label;
  const selectedClassLabel = classes.find(
    (cls) => cls.value === selectedClass
  )?.label;

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-[#61E865]";
      case "in-progress":
        return "bg-[#52C2EB]";
      case "pending":
        return "bg-[#A1C5D2]";
      default:
        return "bg-gray-300";
    }
  };

  // Get status text
  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "CONCLUÍDO";
      case "in-progress":
        return "EM PROGRESSO";
      case "pending":
        return "PENDENTE";
      default:
        return "DESCONHECIDO";
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate("/teacher-dashboard")}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <MdArrowBack className="mr-1" /> Voltar
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-6">Turmas e Alunos</h1>

        {/* Search Section */}
        <div className="bg-[#F5F5F5] rounded-[20px] p-6 mb-8">
          <h2 className="text-base font-bold mb-4">
            Buscar atividades da turma
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Select
                options={subjects}
                placeholder="Selecione a matéria"
                value={selectedSubject}
                onChange={handleSubjectChange}
                fullWidth
              />
            </div>

            <div className="relative">
              <Select
                options={classes}
                placeholder="Selecione a turma"
                value={selectedClass}
                onChange={handleClassChange}
                fullWidth
              />
            </div>

            <Button
              onClick={handleSearch}
              className="bg-[#B3FF3B] hover:bg-[#a1e535] text-black py-2 px-4 h-[38px] rounded-md font-bold"
            >
              BUSCAR TURMA
            </Button>
          </div>
        </div>

        {/* Results Section */}
        {searchPerformed && selectedSubject && selectedClass && (
          <>
            <div className="mb-4">
              <h2 className="text-base font-bold mb-1">
                {selectedSubjectLabel}
              </h2>
              <h3 className="text-base font-bold">
                Turma {selectedClassLabel}
              </h3>
            </div>

            <div className="bg-[#F5F5F5] rounded-[20px] p-6">
              <div className="grid grid-cols-1 gap-4">
                {filteredActivities.length > 0 ? (
                  filteredActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="bg-[#E2E2E2] p-4 rounded-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    >
                      <div>
                        <h3 className="font-bold text-sm">{activity.title}</h3>
                        <div className="flex items-center mt-2">
                          <div
                            className={`${getStatusColor(
                              activity.status
                            )} text-white py-1 px-2 rounded-md text-xs font-bold mr-2`}
                          >
                            {getStatusText(activity.status)}
                          </div>
                          <span className="text-xs text-gray-600">
                            {activity.completedCount}/{activity.totalCount}{" "}
                            alunos
                          </span>
                        </div>
                      </div>
                      <Link to={`/class-progress/${activity.id}`}>
                        <Button className="bg-[#6952EB] hover:bg-[#5842e6] text-white py-1 px-4 rounded-md text-xs font-bold">
                          VER PROGRESSO
                        </Button>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>Nenhuma atividade encontrada para esta turma e matéria.</p>
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ClassesStudentsPage;
