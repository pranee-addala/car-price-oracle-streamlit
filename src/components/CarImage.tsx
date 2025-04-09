
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CarImageProps {
  brand: string;
  type: string;
  className?: string;
}

const CarImage = ({ brand, type, className }: CarImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>("");
  
  useEffect(() => {
    // In a real app, we would fetch the actual image from an API
    // Here we'll use some generic car images based on the type
    
    // This is just a placeholder implementation
    // Each car brand would actually have its own image in a real app
    let imageUrl = "";
    
    if (type === "Diesel") {
      imageUrl = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
    } else if (type === "Petrol") {
      imageUrl = "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1528";
    } else if (type === "CNG" || type === "LPG") {
      imageUrl = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
    } else {
      imageUrl = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470";
    }
    
    setImageSrc(imageUrl);
  }, [brand, type]);
  
  return (
    <div className={cn("w-full h-full flex items-center justify-center", className)}>
      {imageSrc ? (
        <div className="relative w-full aspect-video max-w-md overflow-hidden rounded-lg shadow-md">
          <img 
            src={imageSrc} 
            alt={`${brand} car`} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h3 className="text-white font-bold text-lg">{brand}</h3>
            <p className="text-white/90 text-sm">{type} Model</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full aspect-video max-w-md bg-car-light/50 rounded-lg">
          <Car className="w-16 h-16 text-car-muted opacity-30" />
        </div>
      )}
    </div>
  );
};

export default CarImage;
