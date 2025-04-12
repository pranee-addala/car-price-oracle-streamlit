
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
        imageUrl = "https://images.unsplash.com/photo-1621771670023-55fdc94836a4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "honda":
        imageUrl = "https://images.unsplash.com/photo-1617814065893-00757125efab?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "hyundai":
        imageUrl = "https://images.unsplash.com/photo-1629897048514-3dd7414efc45?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "toyota":
        imageUrl = "https://images.unsplash.com/photo-1559416523-140ddc3d238c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "bmw":
        imageUrl = "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "audi":
        imageUrl = "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "mercedes-benz":
        imageUrl = "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "skoda":
        imageUrl = "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "ford":
        imageUrl = "https://images.unsplash.com/photo-1551830820-330a71634c3d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "volkswagen":
        imageUrl = "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "tata":
        imageUrl = "https://images.unsplash.com/photo-1609712861205-f029838638e5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "mahindra":
        imageUrl = "https://images.unsplash.com/photo-1600752891629-7320c2597dd7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "kia":
        imageUrl = "https://images.unsplash.com/photo-1600959907490-3d1e77c88a9c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "nissan":
        imageUrl = "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "renault":
        imageUrl = "https://images.unsplash.com/photo-1560009320-c01920eef9f3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      case "mg":
        imageUrl = "https://images.unsplash.com/photo-1668148021684-63cdc3517fc0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        break;
      default:
        // Fallback to type-based images if brand not found
        if (type === "Diesel") {
          imageUrl = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        } else if (type === "Petrol") {
          imageUrl = "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1528";
        } else if (type === "CNG" || type === "LPG") {
          imageUrl = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
        } else {
          imageUrl = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
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
