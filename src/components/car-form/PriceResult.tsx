
import { IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/utils/formatters";

interface PriceResultProps {
  isLoading: boolean;
  predictedPrice: number | null;
  resetPrediction: () => void;
}

const PriceResult = ({ isLoading, predictedPrice, resetPrediction }: PriceResultProps) => {
  return (
    <Card className="shadow-xl bg-gradient-to-br from-car-primary to-car-secondary border border-car-accent/20 glow-card">
      <CardHeader className="bg-gradient-to-r from-car-accent to-car-accent/70 text-white rounded-t-lg">
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
                onClick={resetPrediction}
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
  );
};

export default PriceResult;
