
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-12 bg-car-primary text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-car-muted text-sm">
              &copy; {new Date().getFullYear()} Car Price Oracle
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-car-muted hover:text-car-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <p className="text-car-muted text-sm">
              Built with ML & React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
