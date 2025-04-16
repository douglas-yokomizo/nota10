import React from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdAdd,
  MdPeople,
  MdNotifications,
  MdExitToApp,
  MdAssignment,
} from "react-icons/md";
import { useUser } from "../../contexts/UserContext";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const { user, isTeacher, isStudent, isParent } = useUser();

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 z-50 bg-[#141414] text-white shadow-md">
      {/* Menu Items */}
      <div className="container mx-auto px-4 pt-0 pb-6">
        <div className="mb-6"></div>
        <nav className="space-y-6">
          {/* Teacher Menu Items */}
          {user && isTeacher() && (
            <>
              <Link
                to="/teacher-dashboard"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdDashboard className="mr-3 h-5 w-5" />
                <span>Dashboard</span>
              </Link>

              <Link
                to="/create-activity"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdAdd className="mr-3 h-5 w-5" />
                <span>Criar atividade</span>
              </Link>

              <Link
                to="/classes-students"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdPeople className="mr-3 h-5 w-5" />
                <span>Turmas e Alunos</span>
              </Link>

              <Link
                to="/notifications"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdNotifications className="mr-3 h-5 w-5" />
                <span>Notificações</span>
              </Link>
            </>
          )}

          {/* Student Menu Items */}
          {user && isStudent() && (
            <>
              <Link
                to="/dashboard"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdDashboard className="mr-3 h-5 w-5" />
                <span>Dashboard</span>
              </Link>

              <Link
                to="/assignments"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdAssignment className="mr-3 h-5 w-5" />
                <span>Minhas atividades</span>
              </Link>

              <Link
                to="/notifications"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdNotifications className="mr-3 h-5 w-5" />
                <span>Notificações</span>
              </Link>
            </>
          )}

          {/* Parent Menu Items */}
          {user && isParent() && (
            <>
              <Link
                to="/parent-dashboard"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdDashboard className="mr-3 h-5 w-5" />
                <span>Dashboard</span>
              </Link>

              <Link
                to="/student-activities"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdAssignment className="mr-3 h-5 w-5" />
                <span>Atividades do aluno</span>
              </Link>

              <Link
                to="/notifications"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdNotifications className="mr-3 h-5 w-5" />
                <span>Notificações</span>
              </Link>
            </>
          )}

          {/* Logout button for all users */}
          <div className="pt-6 mt-6 border-t border-gray-700">
            <Link
              to="/login"
              className="flex items-center text-white hover:text-gray-300 transition-colors"
              onClick={onClose}
            >
              <MdExitToApp className="mr-3 h-5 w-5" />
              <span>Sair</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
