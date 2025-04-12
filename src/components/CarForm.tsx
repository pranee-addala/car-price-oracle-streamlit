
import { useState } from "react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import CarImage from "@/components/CarImage";

const carBrands = ["Maruti", "Skoda", "Honda", "Hyundai", "Toyota", "Ford", "Renault", 
  "Mahindra", "Tata", "Chevrolet", "Datsun", "Jeep", "Mercedes-Benz", "Mitsubishi", "Audi", 
  "Volkswagen", "BMW", "Nissan", "Lexus", "Jaguar", "Land", "MG", "Volvo", "Daewoo", "Kia", 
  "Fiat", "Force", "Ambassador", "Ashok", "Isuzu", "Opel"];

const fuelTypes = ["Diesel", "Petrol", "LPG", "CNG"];
const sellerTypes = ["Individual", "Dealer", "Trustmark Dealer"];
const transmissionTypes = ["Manual", "Automatic"];
const ownerTypes = ["First Owner", "Second Owner", "Third Owner", "Fourth & Above Owner", "Test Drive Car"];

const currentYear = new Date().getFullYear();

interface CarFormData {
  brand: string;
  year: number;
  kmDriven: number;
  fuel: string;
  sellerType: string;
  transmission: string;
  owner: string;
  mileage: number;
  engine: number;
  maxPower: number;
  seats: number;
}

const initialData: CarFormData = {
  brand: "Maruti",
  year: 2020,
  kmDriven: 50000,
  fuel: "Petrol",
  sellerType: "Individual",
  transmission: "Manual",
  owner: "First Owner",
  mileage: 20,
  engine: 1500,
  maxPower: 100,
  seats: 5
};

const CarForm = () => {
  const [formData, setFormData] = useState<CarFormData>(initialData);
  const [predictedPrice, setPredictedPrice] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSliderChange = (name: string, value: number[]) => {
    setFormData({
      ...formData,
      [name]: value[0]
    });
  };

  const handleSelectChange = (name: string, value: string) => {
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

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatKilometers = (value: number) => {
    return `${value.toLocaleString()} km`;
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
        {/* Car Details Form (LEFT Side) - Swapped position */}
        <div className="lg:col-span-7">
          <Card className="shadow-xl bg-gradient-to-br from-car-primary to-car-secondary border border-car-accent/20 glow-card h-full">
            <CardHeader className="bg-gradient-to-r from-car-accent via-car-accent/90 to-car-accent/70 text-white rounded-t-lg shadow-[0_0_15px_rgba(109,40,219,0.6)]">
              <CardTitle className="flex items-center gap-2">
                <Car className="h-6 w-6 glow-icon" />
                Car Details
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Car Brand */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-car-accent glow-icon-sm" />
                  <h3 className="text-sm font-medium text-car-light">Car Brand</h3>
                </div>
                <Select 
                  value={formData.brand} 
                  onValueChange={(value) => handleSelectChange("brand", value)}
                >
                  <SelectTrigger className="glow-input">
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {carBrands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Year */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-car-accent glow-icon-sm" />
                    <h3 className="text-sm font-medium text-car-light">Year</h3>
                  </div>
                  <span className="text-sm font-semibold text-car-light">{formData.year}</span>
                </div>
                <Slider
                  value={[formData.year]}
                  min={1994}
                  max={currentYear}
                  step={1}
                  onValueChange={(value) => handleSliderChange("year", value)}
                  className="glow-slider"
                />
                <div className="flex justify-between text-xs text-car-muted">
                  <span>1994</span>
                  <span>{currentYear}</span>
                </div>
              </div>
              
              {/* KM Driven */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-car-accent glow-icon-sm" />
                    <h3 className="text-sm font-medium text-car-light">Distance Driven</h3>
                  </div>
                  <span className="text-sm font-semibold text-car-light">{formatKilometers(formData.kmDriven)}</span>
                </div>
                <Slider
                  value={[formData.kmDriven]}
                  min={11}
                  max={200000}
                  step={1000}
                  onValueChange={(value) => handleSliderChange("kmDriven", value)}
                  className="glow-slider"
                />
                <div className="flex justify-between text-xs text-car-muted">
                  <span>11 km</span>
                  <span>200,000 km</span>
                </div>
              </div>

              {/* Fuel Type */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Fuel className="h-4 w-4 text-car-accent glow-icon-sm" />
                  <h3 className="text-sm font-medium text-car-light">Fuel Type</h3>
                </div>
                <Select 
                  value={formData.fuel} 
                  onValueChange={(value) => handleSelectChange("fuel", value)}
                >
                  <SelectTrigger className="glow-input">
                    <SelectValue placeholder="Select fuel type" />
                  </SelectTrigger>
                  <SelectContent>
                    {fuelTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Seller Type */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-car-accent glow-icon-sm" />
                  <h3 className="text-sm font-medium text-car-light">Seller Type</h3>
                </div>
                <Select 
                  value={formData.sellerType} 
                  onValueChange={(value) => handleSelectChange("sellerType", value)}
                >
                  <SelectTrigger className="glow-input">
                    <SelectValue placeholder="Select seller type" />
                  </SelectTrigger>
                  <SelectContent>
                    {sellerTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Transmission */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cog className="h-4 w-4 text-car-accent glow-icon-sm" />
                  <h3 className="text-sm font-medium text-car-light">Transmission</h3>
                </div>
                <Select 
                  value={formData.transmission} 
                  onValueChange={(value) => handleSelectChange("transmission", value)}
                >
                  <SelectTrigger className="glow-input">
                    <SelectValue placeholder="Select transmission type" />
                  </SelectTrigger>
                  <SelectContent>
                    {transmissionTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Owner */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-car-accent glow-icon-sm" />
                  <h3 className="text-sm font-medium text-car-light">Owner</h3>
                </div>
                <Select 
                  value={formData.owner} 
                  onValueChange={(value) => handleSelectChange("owner", value)}
                >
                  <SelectTrigger className="glow-input">
                    <SelectValue placeholder="Select owner type" />
                  </SelectTrigger>
                  <SelectContent>
                    {ownerTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Mileage */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-car-accent glow-icon-sm" />
                    <h3 className="text-sm font-medium text-car-light">Mileage (km/l)</h3>
                  </div>
                  <span className="text-sm font-semibold text-car-light">{formData.mileage} km/l</span>
                </div>
                <Slider
                  value={[formData.mileage]}
                  min={10}
                  max={40}
                  step={1}
                  onValueChange={(value) => handleSliderChange("mileage", value)}
                  className="glow-slider"
                />
                <div className="flex justify-between text-xs text-car-muted">
                  <span>10 km/l</span>
                  <span>40 km/l</span>
                </div>
              </div>

              {/* Engine */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cog className="h-4 w-4 text-car-accent glow-icon-sm" />
                    <h3 className="text-sm font-medium text-car-light">Engine (CC)</h3>
                  </div>
                  <span className="text-sm font-semibold text-car-light">{formData.engine} CC</span>
                </div>
                <Slider
                  value={[formData.engine]}
                  min={700}
                  max={5000}
                  step={100}
                  onValueChange={(value) => handleSliderChange("engine", value)}
                  className="glow-slider"
                />
                <div className="flex justify-between text-xs text-car-muted">
                  <span>700 CC</span>
                  <span>5000 CC</span>
                </div>
              </div>

              {/* Max Power */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-car-accent glow-icon-sm" />
                    <h3 className="text-sm font-medium text-car-light">Max Power (bhp)</h3>
                  </div>
                  <span className="text-sm font-semibold text-car-light">{formData.maxPower} bhp</span>
                </div>
                <Slider
                  value={[formData.maxPower]}
                  min={0}
                  max={200}
                  step={1}
                  onValueChange={(value) => handleSliderChange("maxPower", value)}
                  className="glow-slider"
                />
                <div className="flex justify-between text-xs text-car-muted">
                  <span>0 bhp</span>
                  <span>200 bhp</span>
                </div>
              </div>

              {/* Seats */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-car-accent glow-icon-sm" />
                    <h3 className="text-sm font-medium text-car-light">Seats</h3>
                  </div>
                  <span className="text-sm font-semibold text-car-light">{formData.seats}</span>
                </div>
                <Slider
                  value={[formData.seats]}
                  min={5}
                  max={10}
                  step={1}
                  onValueChange={(value) => handleSliderChange("seats", value)}
                  className="glow-slider"
                />
                <div className="flex justify-between text-xs text-car-muted">
                  <span>5 seats</span>
                  <span>10 seats</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end pt-4 pb-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      onClick={handleSubmit} 
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
        </div>

        {/* Right Column (Car Visualization + Price Prediction) - Swapped position */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Car Image Section (Top Right) */}
          <Card className="shadow-xl bg-gradient-to-br from-car-primary to-car-secondary border border-car-accent/20 glow-card">
            <CardHeader className="bg-gradient-to-r from-car-accent via-car-accent/90 to-car-accent/70 text-white rounded-t-lg shadow-[0_0_15px_rgba(109,40,219,0.6)]">
              <CardTitle className="flex items-center gap-2">
                <Car className="h-6 w-6 glow-icon" />
                Car Visualization
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex items-center justify-center h-full">
              <CarImage brand={formData.brand} type={formData.fuel} />
            </CardContent>
          </Card>

          {/* Results Panel (Bottom Right) */}
          <Card className="shadow-xl bg-gradient-to-br from-car-primary to-car-secondary border border-car-accent/20 glow-card">
            <CardHeader className="bg-gradient-to-r from-car-accent via-car-accent/90 to-car-accent/70 text-white rounded-t-lg shadow-[0_0_15px_rgba(109,40,219,0.6)]">
              <CardTitle className="flex items-center gap-2">
                <IndianRupee className="h-6 w-6 glow-icon" />
                Price Prediction
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center h-full">
                {isLoading ? (
                  <div className="flex flex-col items-center gap-3 py-6">
                    <div className="w-16 h-16 border-4 border-car-light border-t-car-accent rounded-full animate-spin glow-spinner" />
                    <p className="text-car-muted">Calculating your car's value...</p>
                  </div>
                ) : predictedPrice ? (
                  <div className="text-center space-y-4 py-6">
                    <p className="text-car-muted">Estimated Price:</p>
                    <div className="text-3xl font-bold text-car-accent glow-text">
                      {formatCurrency(predictedPrice)}
                    </div>
                    <div className="border border-car-accent/30 rounded-lg p-4 bg-car-primary/40 backdrop-blur-sm mt-4">
                      <p className="text-xs text-car-muted text-center">
                        This price is based on machine learning predictions using similar vehicles in the market.
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="mt-4 glow-button"
                      onClick={() => setPredictedPrice(null)}
                    >
                      Reset
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4 py-6 text-center">
                    <IndianRupee className="w-12 h-12 text-car-accent opacity-70 glow-icon" />
                    <div>
                      <h3 className="font-medium text-lg text-car-light">No Prediction Yet</h3>
                      <p className="text-car-muted text-sm mt-1">
                        Fill in your car details and click "Predict Price" to get an estimate.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CarForm;
