import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFoundPage = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        <div className="text-primary text-9xl font-bold mb-2">404</div>
        <h1 className="text-3xl font-bold text-secondary mb-4">
          Página não encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          A página que você está procurando pode ter sido removida, teve seu
          nome alterado ou está temporariamente indisponível.
        </p>
        <Link to="/">
          <Button variant="primary" size="large">
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
