import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdArrowBack } from "react-icons/md";
import { useUser } from "../contexts/UserContext";
import { Notification } from "../types/notification";

// Mock notifications for different user roles
const studentNotifications: Notification[] = [
  {
    id: 1,
    type: "activity",
    title: "Nova atividade de Geografia",
    message: "Mapa Mundi: Desafio das Capitais",
    date: "2023-05-10",
    read: false,
  },
  {
    id: 2,
    type: "activity",
    title: "Nova atividade de Geografia",
    message: "Fusos Horários e a Roda do Tempo",
    date: "2023-05-12",
    read: false,
  },
  {
    id: 3,
    type: "activity",
    title: "Nova atividade de Artes",
    message: "Cores e Emoções: A Linguagem das Artes",
    date: "2023-05-15",
    read: false,
  },
];

const parentNotifications: Notification[] = [
  {
    id: 1,
    type: "activity",
    title: "Nova atividade de Geografia",
    message: "Mapa Mundi: Desafio das Capitais",
    date: "2023-05-10",
    read: false,
    childId: 1,
  },
  {
    id: 2,
    type: "activity",
    title: "Nova atividade de Geografia",
    message: "Fusos Horários e a Roda do Tempo",
    date: "2023-05-12",
    read: false,
    childId: 1,
  },
  {
    id: 3,
    type: "activity",
    title: "Nova atividade de Artes",
    message: "Cores e Emoções: A Linguagem das Artes",
    date: "2023-05-15",
    read: false,
    childId: 1,
  },
  {
    id: 4,
    type: "message",
    title: "Mensagem do professor",
    message:
      "Por favor verificar o porque o aluno ainda não conseguiu completar a atividade, é importante que ele finalize a atividade para ser avaliado e a nota final ser definida.",
    date: "2023-05-16",
    read: false,
    childId: 1,
    sender: "Prof. Carlos - Geografia",
  },
];

const teacherNotifications: Notification[] = [
  {
    id: 1,
    type: "alert",
    title: "Aluno com atividade pendente",
    message:
      "João Vitor ainda não completou a atividade 'Mapa Mundi: Desafio das Capitais'",
    date: "2023-05-14",
    read: false,
  },
  {
    id: 2,
    type: "message",
    title: "Mensagem de responsável",
    message:
      "Olá professor, gostaria de saber mais sobre o desempenho do meu filho na última atividade.",
    date: "2023-05-15",
    read: false,
    sender: "Maria Silva (Mãe de João Vitor)",
  },
];

const NotificationsPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, isTeacher, isStudent, isParent } = useUser();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Load notifications based on user role
  useEffect(() => {
    if (user) {
      if (isTeacher()) {
        setNotifications(teacherNotifications);
      } else if (isStudent()) {
        setNotifications(studentNotifications);
      } else if (isParent()) {
        setNotifications(parentNotifications);
      }
    }
  }, [user, isTeacher, isStudent, isParent]);

  const handleDeleteNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const getDashboardLink = () => {
    if (isTeacher()) {
      return "/teacher-dashboard";
    } else if (isStudent()) {
      return "/dashboard";
    } else if (isParent()) {
      return "/parent-dashboard";
    }
    return "/";
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate(getDashboardLink())}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <MdArrowBack className="mr-1" /> Voltar
          </button>
        </div>

        {/* Notifications Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Notificações</h1>
        </div>

        {/* Notifications List */}
        <div className="bg-[#141414] rounded-t-[20px] p-4">
          <h2 className="text-white font-bold text-lg">
            Todas as notificações
          </h2>
        </div>
        <div className="bg-[#F5F5F5] rounded-b-[20px] p-6">
          <div className="grid grid-cols-1 gap-4">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="bg-[#E2E2E2] p-4 rounded-md flex justify-between items-start"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="font-bold text-sm">{notification.title}</h3>
                    <p className="text-sm mt-1">{notification.message}</p>
                    {notification.sender && (
                      <p className="text-xs text-gray-600 mt-2">
                        De: {notification.sender}
                      </p>
                    )}
                    <p className="text-xs text-gray-600 mt-1">
                      {new Date(notification.date).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteNotification(notification.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                    title="Excluir notificação"
                  >
                    <MdDelete className="h-5 w-5" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center py-4">
                Nenhuma notificação encontrada.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotificationsPage;
