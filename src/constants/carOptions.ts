
export const carBrands = ["Maruti", "Skoda", "Honda", "Hyundai", "Toyota", "Ford", "Renault", 
  "Mahindra", "Tata", "Chevrolet", "Datsun", "Jeep", "Mercedes-Benz", "Mitsubishi", "Audi", 
  "Volkswagen", "BMW", "Nissan", "Lexus", "Jaguar", "Land", "MG", "Volvo", "Daewoo", "Kia", 
  "Fiat", "Force", "Ambassador", "Ashok", "Isuzu", "Opel"];

export const fuelTypes = ["Diesel", "Petrol", "LPG", "CNG"];
export const sellerTypes = ["Individual", "Dealer", "Trustmark Dealer"];
export const transmissionTypes = ["Manual", "Automatic"];
export const ownerTypes = ["First Owner", "Second Owner", "Third Owner", "Fourth & Above Owner", "Test Drive Car"];

export const currentYear = new Date().getFullYear();

export interface CarFormData {
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

export const initialData: CarFormData = {
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
