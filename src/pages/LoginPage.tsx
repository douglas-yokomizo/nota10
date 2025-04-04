import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ username, password });
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
          <div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-[#9FE870] text-white placeholder-gray-500"
              placeholder="Usuário"
              required
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
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#9FE870] hover:bg-[#8FD860] text-black font-medium py-3 px-4 rounded-md transition-colors"
            >
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
