import React from "react";
import { useUser, mockUsers, UserRole } from "../../contexts/UserContext";

const RoleSwitcher: React.FC = () => {
  const { user, login, logout } = useUser();

  const handleRoleChange = (role: UserRole | "none") => {
    if (role === "none") {
      logout();
    } else {
      const selectedUser =
        role === "teacher"
          ? mockUsers.teacher
          : role === "student"
          ? mockUsers.student
          : mockUsers.parent;

      login(selectedUser);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-3 z-50 border border-gray-200">
      <div className="text-sm font-semibold mb-2 text-center">
        Mudar Perfil (Teste)
      </div>
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => handleRoleChange("teacher")}
          className={`px-3 py-1 rounded-md text-xs ${
            user?.role === "teacher"
              ? "bg-primary text-black"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Professor
        </button>
        <button
          onClick={() => handleRoleChange("student")}
          className={`px-3 py-1 rounded-md text-xs ${
            user?.role === "student"
              ? "bg-primary text-black"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Aluno
        </button>
        <button
          onClick={() => handleRoleChange("parent")}
          className={`px-3 py-1 rounded-md text-xs ${
            user?.role === "parent"
              ? "bg-primary text-black"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Responsável
        </button>
        <button
          onClick={() => handleRoleChange("none")}
          className={`px-3 py-1 rounded-md text-xs ${
            !user ? "bg-primary text-black" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Desconectado
        </button>
      </div>
      {user && (
        <div className="mt-2 text-xs text-gray-500">
          Logado como: <span className="font-medium">{user.name}</span>
        </div>
      )}
    </div>
  );
};

export default RoleSwitcher;
