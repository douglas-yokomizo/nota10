import React from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdAdd,
  MdPeople,
  MdNotifications,
  MdExitToApp,
  MdClass,
  MdAssignment,
  MdSchool,
  MdPerson,
  MdForum,
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
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6"></div>
        <nav className="space-y-6">
          {/* Common menu items for all users */}
          <Link
            to={user && isTeacher() ? "/teacher-dashboard" : "/dashboard"}
            className="flex items-center text-white hover:text-gray-300 transition-colors"
            onClick={onClose}
          >
            <MdDashboard className="mr-3 h-5 w-5" />
            <span>Dashboard</span>
          </Link>

          {/* Teacher-specific menu items */}
          {user && isTeacher() && (
            <>
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
            </>
          )}

          {/* Menu items for teachers and students */}
          {user && (isTeacher() || isStudent()) && (
            <Link
              to="/turmas"
              className="flex items-center text-white hover:text-gray-300 transition-colors"
              onClick={onClose}
            >
              <MdClass className="mr-3 h-5 w-5" />
              <span>Turmas</span>
            </Link>
          )}

          {/* Student-specific menu items */}
          {user && isStudent() && (
            <>
              <Link
                to="/assignments"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdAssignment className="mr-3 h-5 w-5" />
                <span>Atividades</span>
              </Link>

              <Link
                to="/grades"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdSchool className="mr-3 h-5 w-5" />
                <span>Notas</span>
              </Link>
            </>
          )}

          {/* Parent-specific menu items */}
          {user && isParent() && (
            <>
              <Link
                to="/children"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdPerson className="mr-3 h-5 w-5" />
                <span>Meus Filhos</span>
              </Link>

              <Link
                to="/parent-teacher"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                onClick={onClose}
              >
                <MdForum className="mr-3 h-5 w-5" />
                <span>Comunicação</span>
              </Link>
            </>
          )}

          {/* Common menu items for all users */}
          <Link
            to="/notifications"
            className="flex items-center text-white hover:text-gray-300 transition-colors"
            onClick={onClose}
          >
            <MdNotifications className="mr-3 h-5 w-5" />
            <span>Notificações</span>
          </Link>

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
