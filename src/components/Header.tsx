
import { GaugeCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("w-full py-4 bg-car-primary text-white", className)}>
      <div className="container flex items-center justify-center gap-3">
        <GaugeCircle className="w-8 h-8 text-car-accent" />
        <h1 className="text-2xl md:text-3xl font-bold">Car Price Oracle</h1>
      </div>
    </header>
  );
};

export default Header;
