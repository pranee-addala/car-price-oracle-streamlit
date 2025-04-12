
import { GaugeCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("w-full py-4 bg-gradient-to-r from-car-primary to-car-secondary text-white shadow-lg", className)}>
      <div className="container flex items-center justify-center gap-3">
        <div className="relative">
          <GaugeCircle className="w-8 h-8 text-car-accent glow-icon animate-pulse" />
          <Sparkles className="w-4 h-4 text-car-accent/80 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-car-accent/70 via-car-accent to-car-accent/70 glow-text">Car Price Oracle</h1>
      </div>
    </header>
  );
};

export default Header;
