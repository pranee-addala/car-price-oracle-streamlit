
import { Car } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CarImage from "@/components/CarImage";

interface CarVisualizationProps {
  brand: string;
  fuel: string;
}

const CarVisualization = ({ brand, fuel }: CarVisualizationProps) => {
  return (
    <Card className="shadow-xl bg-gradient-to-br from-car-primary to-car-secondary border border-car-accent/20 glow-card">
      <CardHeader className="bg-gradient-to-r from-car-accent to-car-accent/70 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <Car className="h-6 w-6 glow-icon" />
          Car Visualization
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex items-center justify-center h-full">
        <CarImage brand={brand} type={fuel} />
      </CardContent>
    </Card>
  );
};

export default CarVisualization;
