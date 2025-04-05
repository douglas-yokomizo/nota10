import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import TextArea from "../components/ui/TextArea";
import SideMenu from "../components/layout/SideMenu";
import {
  MdMenu,
  MdClose,
  MdExitToApp,
  MdArrowBack,
  MdNotifications,
  MdCheckBox,
  MdDelete,
  MdEdit,
} from "react-icons/md";
import { useUser } from "../contexts/UserContext";
import { StudentProgress, StudentProgressStatus } from "../types/student";

// Mock data for the class progress
const mockStudentProgress: StudentProgress[] = [
  {
    id: 1,
    name: "João Vitor",
    status: "in-progress",
    notified: true,
    checked: true,
  },
  {
    id: 2,
    name: "Isabela",
    status: "completed",
    notified: true,
    checked: true,
  },
  {
    id: 3,
    name: "Luis",
    status: "in-progress",
    notified: true,
    checked: true,
  },
  {
    id: 4,
    name: "Fernanda",
    status: "pending",
    notified: true,
    checked: true,
  },
  {
    id: 5,
    name: "Roberta",
    status: "pending",
    notified: true,
    checked: true,
  },
];

// Mock activity data
const mockActivity = {
  id: 1,
  title: "Mapa Mundi: Desafio das Capitais",
  subject: "Geografia",
  class: "5º ano A",
};

const ClassProgressPage = () => {
  const navigate = useNavigate();
  const { activityId } = useParams<{ activityId: string }>();
  const { isAuthenticated, logout, user, isTeacher } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentProgress | null>(
    null
  );
  const [studentProgress, setStudentProgress] = useState<StudentProgress[]>(
    mockStudentProgress
  );
  const menuRef = useRef<HTMLDivElement>(null);

  // Redirect to login if not authenticated or not a teacher
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else if (!isTeacher()) {
      navigate("/login");
    }
  }, [isAuthenticated, isTeacher, navigate]);

  // In a real app, fetch the activity and student progress data based on the ID
  useEffect(() => {
    // This would be an API call in a real application
    console.log(`Fetching activity with ID: ${activityId}`);
  }, [activityId]);

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

  const handleNotifyParent = (student: StudentProgress) => {
    setSelectedStudent(student);
    setIsNotifyModalOpen(true);
  };

  const handleSendNotification = () => {
    // In a real app, this would send a notification to the parent
    setIsNotifyModalOpen(false);
    setSelectedStudent(null);
  };

  const handleToggleCheck = (studentId: number) => {
    setStudentProgress(
      studentProgress.map((student) =>
        student.id === studentId
          ? { ...student, checked: !student.checked }
          : student
      )
    );
  };

  const getStatusColor = (status: StudentProgressStatus) => {
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

  const getStatusText = (status: StudentProgressStatus) => {
    switch (status) {
      case "completed":
        return "CONCLUÍDO";
      case "in-progress":
        return "INICIADO";
      case "pending":
        return "PENDENTE";
      default:
        return "DESCONHECIDO";
    }
  };

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
        {/* Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <MdArrowBack className="mr-1" /> Voltar
          </button>
        </div>

        {/* Activity Header */}
        <div className="bg-[#F5F5F5] rounded-[20px] p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-lg font-bold mb-2">{mockActivity.title}</h1>
              <div className="flex flex-wrap gap-4">
                <p className="font-bold">{mockActivity.class}</p>
                <p className="font-bold">{mockActivity.subject}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Button
                className="bg-[#6952EB] hover:bg-[#5842e6] text-white py-1 px-4 rounded-md text-xs font-bold"
                icon={<MdEdit />}
                iconPosition="left"
              >
                EDITAR
              </Button>
            </div>
          </div>
        </div>

        {/* Student Progress List */}
        <div className="bg-[#F5F5F5] rounded-[20px] p-6">
          <h2 className="text-lg font-bold mb-4">Progresso da turma</h2>
          <div className="grid grid-cols-1 gap-4">
            {studentProgress.map((student) => (
              <div
                key={student.id}
                className="bg-[#E2E2E2] p-4 rounded-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div className="font-bold text-sm">{student.name}</div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    className={`${getStatusColor(
                      student.status
                    )} text-white py-1 px-3 rounded-md text-xs font-bold`}
                  >
                    {getStatusText(student.status)}
                  </Button>
                  <Button
                    className="bg-[#FFCD05] hover:bg-[#e6b800] text-white py-1 px-2 rounded-md"
                    onClick={() => handleNotifyParent(student)}
                    title="Notificar responsável"
                  >
                    <MdNotifications className="h-4 w-4" />
                  </Button>
                  <Button
                    className="bg-[#2BE4B0] hover:bg-[#25cca0] text-white py-1 px-2 rounded-md"
                    onClick={() => handleToggleCheck(student.id)}
                    title={student.checked ? "Desmarcar" : "Marcar"}
                  >
                    <MdCheckBox className="h-4 w-4" />
                  </Button>
                  <Button
                    className="bg-[#FF3705] hover:bg-[#e63000] text-white py-1 px-2 rounded-md"
                    title="Excluir"
                  >
                    <MdDelete className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Notification Modal */}
      <Modal
        isOpen={isNotifyModalOpen}
        onClose={() => setIsNotifyModalOpen(false)}
        title={`Notificar responsável de ${selectedStudent?.name}`}
      >
        <div className="space-y-4">
          <TextArea
            placeholder="Digite a mensagem para o responsável..."
            rows={4}
            fullWidth
          />
          <div className="flex justify-end">
            <Button
              type="button"
              onClick={handleSendNotification}
              className="bg-[#B3FF3B] hover:bg-[#a1e535] text-black py-2 px-4 rounded-md font-medium"
            >
              ENVIAR NOTIFICAÇÃO
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ClassProgressPage;
