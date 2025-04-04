import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import TeacherDashboardPage from "./pages/TeacherDashboardPage";
import CreateActivityPage from "./pages/CreateActivityPage";
import ClassesStudentsPage from "./pages/ClassesStudentsPage";
import NotificationsPage from "./pages/NotificationsPage";
import TurmasPage from "./pages/TurmasPage";
import NotFoundPage from "./pages/NotFoundPage";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Routes with MainLayout (header and footer) */}
          <Route path="/home" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            {/* Add more routes with layout as needed */}
          </Route>

          {/* Routes without MainLayout */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboardPage />} />
          <Route path="/create-activity" element={<CreateActivityPage />} />
          <Route path="/classes-students" element={<ClassesStudentsPage />} />
          <Route path="/turmas" element={<TurmasPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
