
import { Github, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-12 bg-gradient-to-r from-car-primary to-car-secondary text-white shadow-lg">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Car Price Oracle
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-car-accent transition-colors glow-icon-sm"
            >
              <Github size={20} />
            </a>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-car-accent/80 glow-icon-sm" />
              <p className="text-gray-400 text-sm">
                Built with ML & React
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
