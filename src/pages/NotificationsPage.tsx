import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import SideMenu from "../components/layout/SideMenu";
import { MdMenu, MdArrowBack, MdClose } from "react-icons/md";

const NotificationsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-[#141414] shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-white text-2xl font-bold">N</span>
              <span className="text-white text-2xl font-normal">ota10</span>
            </div>
          </div>
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

        {/* Side Menu */}
        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center">
          <Link
            to="/teacher-dashboard"
            className="text-gray-500 hover:text-gray-700 mr-2"
          >
            <MdArrowBack className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Notificações</h1>
        </div>

        <Card bordered>
          <div className="p-6">
            <p className="text-gray-500 mb-4">
              Esta página está em desenvolvimento. Aqui você poderá visualizar e
              gerenciar notificações.
            </p>
            <Button variant="primary">Voltar ao Dashboard</Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default NotificationsPage;
