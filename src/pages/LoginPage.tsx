import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    login,
    loading,
    error,
    isAuthenticated,
    isTeacher,
    isStudent,
    isParent,
  } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);

  // Check if user is already authenticated and redirect accordingly
  useEffect(() => {
    if (isAuthenticated) {
      redirectBasedOnRole();
    }
  }, [isAuthenticated, navigate, isTeacher, isStudent, isParent]);

  // Function to redirect based on user role
  const redirectBasedOnRole = () => {
    if (isTeacher()) {
      navigate("/teacher-dashboard");
    } else if (isStudent()) {
      navigate("/dashboard");
    } else if (isParent()) {
      navigate("/dashboard");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    try {
      await login(username, password);
      // Redirect based on user role after successful login
      redirectBasedOnRole();
    } catch (err) {
      if (err instanceof Error) {
        setLoginError(err.message);
      } else {
        setLoginError("Ocorreu um erro durante o login.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-white text-4xl font-bold">Nota</span>
            <span className="text-[#9FE870] text-4xl font-bold">10</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {loginError && (
            <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-500 px-4 py-3 rounded-md text-sm">
              {loginError}
            </div>
          )}

          <div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-[#9FE870] text-white placeholder-gray-500"
              placeholder="Usuário"
              required
              disabled={loading}
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-[#9FE870] text-white placeholder-gray-500"
              placeholder="Senha"
              required
              disabled={loading}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#9FE870] hover:bg-[#8FD860] text-black font-medium py-3 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "ENTRANDO..." : "ENTRAR"}
            </button>
          </div>

          <div className="text-center text-gray-500 text-sm mt-4">
            <p>Usuários para teste:</p>
            <p>professor / 123456</p>
            <p>aluno / 123456</p>
            <p>responsavel / 123456</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
