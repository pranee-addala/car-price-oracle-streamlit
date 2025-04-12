
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { 
  carBrands, 
  fuelTypes, 
  sellerTypes, 
  transmissionTypes, 
  ownerTypes, 
  currentYear, 
  initialData,
  CarFormData
} from "@/constants/carOptions";
import CarDetailsForm from "./car-form/CarDetailsForm";
import CarVisualization from "./car-form/CarVisualization";
import PriceResult from "./car-form/PriceResult";

const CarForm = () => {
  const [formData, setFormData] = useState<CarFormData>(initialData);
  const [predictedPrice, setPredictedPrice] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (name: string, value: string | number) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock prediction - in a real app, this would come from the backend
      const randomPrice = Math.floor(Math.random() * 1000000) + 300000;
      setPredictedPrice(randomPrice);
      setIsLoading(false);
      
      toast({
        title: "Prediction Complete",
        description: "Your car valuation is ready!"
      });
    }, 1500);
  };

  const resetPrediction = () => {
    setPredictedPrice(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Add road markings and traffic light effects */}
      <div className="road-marking"></div>
      <div className="traffic-light">
        <div className="traffic-light-dot traffic-light-red"></div>
        <div className="traffic-light-dot traffic-light-yellow"></div>
        <div className="traffic-light-dot traffic-light-green"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Car Details Form (LEFT Side) */}
        <div className="lg:col-span-7">
          <CarDetailsForm 
            formData={formData}
            onFieldChange={handleFieldChange}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            brands={carBrands}
            fuelTypes={fuelTypes}
            sellerTypes={sellerTypes}
            transmissionTypes={transmissionTypes}
            ownerTypes={ownerTypes}
            currentYear={currentYear}
          />
        </div>

        {/* Right Column (Car Visualization + Price Prediction) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Car Image Section (Top Right) */}
          <CarVisualization brand={formData.brand} fuel={formData.fuel} />

          {/* Results Panel (Bottom Right) */}
          <PriceResult 
            isLoading={isLoading} 
            predictedPrice={predictedPrice} 
            resetPrediction={resetPrediction} 
          />
        </div>
      </div>
    </div>
  );
};

export default CarForm;
