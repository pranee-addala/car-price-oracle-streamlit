
import Header from "@/components/Header";
import CarForm from "@/components/CarForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col car-form-bg">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-car-accent mb-2 glow-text">Car Price Prediction</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our advanced machine learning model analyzes your car's details to predict its market value.
            Fill in the information below to get an estimate.
          </p>
        </div>
        
        <CarForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
