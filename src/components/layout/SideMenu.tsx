import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MdDashboard, 
  MdAdd, 
  MdPeople, 
  MdNotifications, 
  MdExitToApp, 
  MdClose 
} from 'react-icons/md';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Menu */}
      <div className="relative flex flex-col w-64 max-w-xs bg-[#141414] text-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center">
            <span className="text-white text-2xl font-bold">N</span>
            <span className="text-white text-2xl font-normal">ota10</span>
          </div>
          <button 
            className="text-gray-400 hover:text-white"
            onClick={onClose}
          >
            <MdClose className="h-6 w-6" />
          </button>
        </div>
        
        {/* Menu Items */}
        <nav className="flex-1 px-4 py-6 space-y-6">
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
