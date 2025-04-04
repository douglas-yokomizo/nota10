import React from 'react';

const DashboardPage = () => {
  // Mock data for the dashboard
  const courses = [
    { id: 1, name: 'Desenvolvimento Web', progress: 75, image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { id: 2, name: 'Inteligência Artificial', progress: 45, image: 'https://images.unsplash.com/photo-1677442135968-6d89469c6409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { id: 3, name: 'Banco de Dados', progress: 90, image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  ];
  
  const assignments = [
    { id: 1, title: 'Projeto Final - Web', course: 'Desenvolvimento Web', dueDate: '2023-12-15', status: 'pending' },
    { id: 2, title: 'Exercício 3 - Redes Neurais', course: 'Inteligência Artificial', dueDate: '2023-11-30', status: 'completed' },
    { id: 3, title: 'Prova - SQL Avançado', course: 'Banco de Dados', dueDate: '2023-12-05', status: 'pending' },
  ];
  
  const announcements = [
    { id: 1, title: 'Semana de Tecnologia', date: '2023-11-20', content: 'Não perca a Semana de Tecnologia FIAP que acontecerá entre os dias 20 e 24 de novembro.' },
    { id: 2, title: 'Alteração na data de entrega', date: '2023-11-15', content: 'A data de entrega do Projeto Final de Desenvolvimento Web foi alterada para 15/12/2023.' },
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-primary text-2xl font-bold">NOTA</span>
              <span className="text-black text-2xl font-bold">10</span>
            </div>
            <nav className="ml-10 hidden md:flex space-x-8">
              <a href="/dashboard" className="text-primary font-medium">Dashboard</a>
              <a href="/courses" className="text-gray-500 hover:text-gray-900">Cursos</a>
              <a href="/calendar" className="text-gray-500 hover:text-gray-900">Calendário</a>
              <a href="/grades" className="text-gray-500 hover:text-gray-900">Notas</a>
            </nav>
          </div>
          <div className="flex items-center">
            <button className="text-gray-500 hover:text-gray-900 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center">
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User profile" />
              <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">João Silva</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Bem-vindo de volta, João!</h2>
              <p className="text-gray-600 mb-4">Você tem 3 atividades pendentes esta semana.</p>
              <div className="flex space-x-4">
                <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors">
                  Ver atividades
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors">
                  Ver calendário
                </button>
              </div>
            </div>
            
            {/* Courses Progress */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Meus Cursos</h2>
                <a href="/courses" className="text-primary hover:text-primary-dark text-sm font-medium">Ver todos</a>
              </div>
              <div className="space-y-4">
                {courses.map(course => (
                  <div key={course.id} className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <img src={course.image} alt={course.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                    <div className="flex-1">
                      <h3 className="text-gray-800 font-medium">{course.name}</h3>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{course.progress}% completo</p>
                    </div>
                    <button className="ml-4 text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Upcoming Assignments */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Próximas Atividades</h2>
                <a href="/assignments" className="text-primary hover:text-primary-dark text-sm font-medium">Ver todas</a>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Atividade</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curso</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Entrega</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {assignments.map(assignment => (
                      <tr key={assignment.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{assignment.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.course}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(assignment.dueDate).toLocaleDateString('pt-BR')}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {assignment.status === 'pending' ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Pendente
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Concluído
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Calendar */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Calendário</h2>
                <a href="/calendar" className="text-primary hover:text-primary-dark text-sm font-medium">Ver completo</a>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-lg font-semibold text-gray-800 mb-2">Novembro 2023</div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  <div className="text-xs text-gray-500">Dom</div>
                  <div className="text-xs text-gray-500">Seg</div>
                  <div className="text-xs text-gray-500">Ter</div>
                  <div className="text-xs text-gray-500">Qua</div>
                  <div className="text-xs text-gray-500">Qui</div>
                  <div className="text-xs text-gray-500">Sex</div>
                  <div className="text-xs text-gray-500">Sáb</div>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {[...Array(30)].map((_, i) => {
                    const day = i + 1;
                    const isToday = day === 15; // Assuming today is the 15th
                    const hasEvent = [5, 12, 20].includes(day);
                    
                    return (
                      <div 
                        key={i} 
                        className={`
                          h-8 flex items-center justify-center text-sm rounded-full
                          ${isToday ? 'bg-primary text-white' : ''}
                          ${hasEvent && !isToday ? 'text-primary font-semibold' : ''}
                        `}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Announcements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Avisos</h2>
                <a href="/announcements" className="text-primary hover:text-primary-dark text-sm font-medium">Ver todos</a>
              </div>
              <div className="space-y-4">
                {announcements.map(announcement => (
                  <div key={announcement.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <h3 className="text-gray-800 font-medium">{announcement.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">{new Date(announcement.date).toLocaleDateString('pt-BR')}</p>
                    <p className="text-sm text-gray-600">{announcement.content}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Links Rápidos</h2>
              <div className="grid grid-cols-2 gap-3">
                <a href="/library" className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-sm text-gray-700">Biblioteca</span>
                </a>
                <a href="/forum" className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span className="text-sm text-gray-700">Fórum</span>
                </a>
                <a href="/support" className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="text-sm text-gray-700">Suporte</span>
                </a>
                <a href="/settings" className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-gray-700">Configurações</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
