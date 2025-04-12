
import { 
  Car, 
  IndianRupee, 
  Calendar, 
  Activity, 
  Gauge, 
  Fuel, 
  User, 
  Cog, 
  BarChart, 
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CarFormData } from "@/constants/carOptions";
import SelectField from "./SelectField";
import SliderField from "./SliderField";
import { formatKilometers } from "@/utils/formatters";

interface CarDetailsFormProps {
  formData: CarFormData;
  onFieldChange: (name: string, value: string | number) => void;
  onSubmit: () => void;
  isLoading: boolean;
  brands: string[];
  fuelTypes: string[];
  sellerTypes: string[];
  transmissionTypes: string[];
  ownerTypes: string[];
  currentYear: number;
}

const CarDetailsForm = ({
  formData,
  onFieldChange,
  onSubmit,
  isLoading,
  brands,
  fuelTypes,
  sellerTypes,
  transmissionTypes,
  ownerTypes,
  currentYear
}: CarDetailsFormProps) => {
  
  const handleSliderChange = (name: string, value: number[]) => {
    onFieldChange(name, value[0]);
  };

  const handleSelectChange = (name: string, value: string) => {
    onFieldChange(name, value);
  };

  return (
    <Card className="shadow-xl bg-gradient-to-br from-car-primary to-car-secondary border border-car-accent/20 glow-card h-full">
      <CardHeader className="bg-gradient-to-r from-car-accent to-car-accent/70 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <Car className="h-6 w-6 glow-icon" />
          Car Details
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        <SelectField
          label="Car Brand"
          icon={<Car className="h-4 w-4 text-car-accent glow-icon-sm" />}
          value={formData.brand}
          options={brands}
          onChange={(value) => handleSelectChange("brand", value)}
        />
        
        <SliderField
          label="Year"
          icon={<Calendar className="h-4 w-4 text-car-accent glow-icon-sm" />}
          value={formData.year}
          min={1994}
          max={currentYear}
          step={1}
          onChange={(value) => handleSliderChange("year", value)}
        />
        
        <SliderField
          label="Distance Driven"
          icon={<Activity className="h-4 w-4 text-car-accent glow-icon-sm" />}
          value={formData.kmDriven}
          min={11}
          max={200000}
          step={1000}
          onChange={(value) => handleSliderChange("kmDriven", value)}
          unit="km"
          minLabel="11 km"
          maxLabel="200,000 km"
        />

        <SelectField
          label="Fuel Type"
          icon={<Fuel className="h-4 w-4 text-car-accent glow-icon-sm" />}
          value={formData.fuel}
          options={fuelTypes}
          onChange={(value) => handleSelectChange("fuel", value)}
        />
        
        <SelectField
          label="Seller Type"
          icon={<User className="h-4 w-4 text-car-accent glow-icon-sm" />}
          value={formData.sellerType}
          options={sellerTypes}
          onChange={(value) => handleSelectChange("sellerType", value)}
        />

        <SelectField
          label="Transmission"
          icon={<Cog className="h-4 w-4 text-car-accent glow-icon-sm" />}
          value={formData.transmission}
          options={transmissionTypes}
          onChange={(value) => handleSelectChange("transmission", value)}
        />

        <SelectField
          label="Owner"
          icon={<Users className="h-4 w-4 text-car-accent glow-icon-sm" />}
          value={formData.owner}
          options={ownerTypes}
          onChange={(value) => handleSelectChange("owner", value)}
        />

        <SliderField
          label="Mileage (km/l)"
          icon={<Gauge className="h-4 w-4 text-car-accent glow-icon-sm" />}
          value={formData.mileage}
          min={10}
          max={40}
          step={1}
          onChange={(value) => handleSliderChange("mileage", value)}
          unit="km/l"
        />

        <SliderField
          label="Engine (CC)"
          icon={<Cog className="h-4 w-4 text-car-accent glow-icon-sm" />}
          value={formData.engine}
          min={700}
          max={5000}
          step={100}
          onChange={(value) => handleSliderChange("engine", value)}
          unit="CC"
        />

        <SliderField
          label="Max Power (bhp)"
          icon={<BarChart className="h-4 w-4 text-car-accent glow-icon-sm" />}
          value={formData.maxPower}
          min={0}
          max={200}
          step={1}
          onChange={(value) => handleSliderChange("maxPower", value)}
          unit="bhp"
        />

        <SliderField
          label="Seats"
          icon={<Users className="h-4 w-4 text-car-accent glow-icon-sm" />}
          value={formData.seats}
          min={5}
          max={10}
          step={1}
          onChange={(value) => handleSliderChange("seats", value)}
          unit="seats"
          minLabel="5 seats"
          maxLabel="10 seats"
        />
      </CardContent>
      <CardFooter className="flex justify-end pt-4 pb-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                onClick={onSubmit} 
                className="bg-car-accent hover:bg-car-accent/90 text-white glow-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Processing...</>
                ) : (
                  <>
                    <IndianRupee className="mr-2 h-4 w-4" />
                    Predict Price
                  </>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Get an estimated price based on your inputs</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default CarDetailsForm;
