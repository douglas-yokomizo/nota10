import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LoginPage from "./pages/LoginPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";
import ParentDashboardPage from "./pages/ParentDashboardPage";
import TeacherDashboardPage from "./pages/TeacherDashboardPage";
import CreateActivityPage from "./pages/CreateActivityPage";
import ClassesStudentsPage from "./pages/ClassesStudentsPage";
import NotificationsPage from "./pages/NotificationsPage";
import TurmasPage from "./pages/TurmasPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import AssignmentDetailPage from "./pages/AssignmentDetailPage";
import StudentActivitiesPage from "./pages/StudentActivitiesPage";
import ParentViewAssignmentPage from "./pages/ParentViewAssignmentPage";
import ClassProgressPage from "./pages/ClassProgressPage";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Páginas sem Header (ex: Login) */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Páginas com Header */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<StudentDashboardPage />} />
            <Route path="/parent-dashboard" element={<ParentDashboardPage />} />
            <Route
              path="/teacher-dashboard"
              element={<TeacherDashboardPage />}
            />
            <Route path="/create-activity" element={<CreateActivityPage />} />
            <Route path="/classes-students" element={<ClassesStudentsPage />} />
            <Route path="/turmas" element={<TurmasPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route
              path="/student-activities"
              element={<StudentActivitiesPage />}
            />
            <Route path="/assignments" element={<AssignmentsPage />} />
            <Route path="/assignment/:id" element={<AssignmentDetailPage />} />
            <Route
              path="/parent-view-assignment/:id"
              element={<ParentViewAssignmentPage />}
            />
            <Route
              path="/class-progress/:activityId"
              element={<ClassProgressPage />}
            />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
