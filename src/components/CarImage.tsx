
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Car, Sparkles } from "lucide-react";

interface CarImageProps {
  brand: string;
  type: string;
  className?: string;
}

const CarImage = ({ brand, type, className }: CarImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>("");
  
  useEffect(() => {
    // Get brand-specific car images
    let imageUrl = "";
    
    // Match brand to specific images
  switch(brand.toLowerCase()) {
  case "maruti":
    imageUrl = "https://indianautosblog.com/maruti-suzuki-swift-best-selling-car-in-2020-p322083";
    break;
  case "honda":
    imageUrl = "https://unsplash.com/photos/honda-car-turn0search10";
    break;
  case "hyundai":
    imageUrl = "https://unsplash.com/photos/hyundai-car-turn0search10";
    break;
  case "toyota":
    imageUrl = "https://unsplash.com/photos/toyota-car-turn0search5";
    break;
  case "bmw":
    imageUrl = "https://unsplash.com/photos/bmw-car-turn0search10";
    break;
  case "audi":
    imageUrl = "https://unsplash.com/photos/audi-car-turn0search0";
    break;
  case "mercedes-benz":
    imageUrl = "https://unsplash.com/photos/mercedes-benz-car-turn0search1";
    break;
  case "skoda":
    imageUrl = "https://unsplash.com/photos/skoda-car-turn0search4";
    break;
  case "ford":
    imageUrl = "https://unsplash.com/photos/ford-car-turn0search10";
    break;
  case "volkswagen":
    imageUrl = "https://unsplash.com/photos/volkswagen-car-turn0search2";
    break;
  case "tata":
    imageUrl = "https://unsplash.com/photos/tata-car-turn0search10";
    break;
  case "mahindra":
    imageUrl = "https://unsplash.com/photos/mahindra-car-turn0search7";
    break;
  case "kia":
    imageUrl = "https://unsplash.com/photos/kia-car-turn0search9";
    break;
  case "nissan":
    imageUrl = "https://unsplash.com/photos/nissan-car-turn0search11";
    break;
  case "renault":
    imageUrl = "https://unsplash.com/photos/renault-car-turn0search3";
    break;
  case "mg":
    imageUrl = "https://unsplash.com/photos/mg-car-turn0search10";
    break;
  default:
    // Fallback to type-based images if brand not found
    if (type === "Diesel") {
      imageUrl = "https://unsplash.com/photos/diesel-car-turn0search10";
    } else if (type === "Petrol") {
      imageUrl = "https://unsplash.com/photos/petrol-car-turn0search10";
    } else if (type === "CNG" || type === "LPG") {
      imageUrl = "https://unsplash.com/photos/cng-car-turn0search10";
    } else {
      imageUrl = "https://unsplash.com/photos/car-turn0search10";
    }
}

    
    setImageSrc(imageUrl);
  }, [brand, type]);
  
  return (
    <div className={cn("w-full h-full flex items-center justify-center", className)}>
      {imageSrc ? (
        <div className="relative w-full aspect-video max-w-md overflow-hidden rounded-lg shadow-xl">
          <img 
            src={imageSrc} 
            alt={`${brand} car`} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-car-accent glow-icon-sm" />
              <h3 className="text-white font-bold text-lg glow-text-sm">{brand}</h3>
            </div>
            <p className="text-white/90 text-sm">{type} Model</p>
          </div>
          <div className="absolute inset-0 pointer-events-none border border-car-accent/30 rounded-lg glow-border"></div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full aspect-video max-w-md bg-car-primary/50 rounded-lg border border-car-accent/30 glow-border">
          <Car className="w-16 h-16 text-car-accent opacity-60 glow-icon" />
        </div>
      )}
    </div>
  );
};

export default CarImage;
