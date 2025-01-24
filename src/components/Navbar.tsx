import { Link } from "react-router-dom";
import { Dumbbell } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-secondary py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Dumbbell className="w-6 h-6 text-primary" />
          <span className="text-white font-bold text-xl">FitConnect</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link
            to="/buscar-personal"
            className="text-white hover:text-primary transition-colors"
          >
            Encontrar Personal
          </Link>
          <Link
            to="/para-personal"
            className="text-white hover:text-primary transition-colors"
          >
            Para Personal
          </Link>
          <Link
            to="/para-influencer"
            className="text-white hover:text-primary transition-colors"
          >
            Para Influencer
          </Link>
          <button className="bg-primary hover:bg-primary-dark text-secondary px-4 py-2 rounded-lg transition-colors">
            Baixar App
          </button>
        </div>
      </div>
    </nav>
  );
};