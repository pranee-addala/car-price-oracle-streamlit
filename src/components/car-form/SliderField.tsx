
import { Slider } from "@/components/ui/slider";
import FormField from "./FormField";
import { ReactNode } from "react";

interface SliderFieldProps {
  label: string;
  icon: ReactNode;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number[]) => void;
  unit?: string;
  minLabel?: string;
  maxLabel?: string;
}

const SliderField = ({
  label,
  icon,
  value,
  min,
  max,
  step,
  onChange,
  unit = "",
  minLabel,
  maxLabel
}: SliderFieldProps) => {
  const displayValue = unit ? `${value} ${unit}` : value;
  const minDisplay = minLabel || `${min}${unit ? ` ${unit}` : ""}`;
  const maxDisplay = maxLabel || `${max}${unit ? ` ${unit}` : ""}`;

  return (
    <FormField label={label} icon={icon} value={displayValue}>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={onChange}
        className="glow-slider"
      />
      <div className="flex justify-between text-xs text-car-muted">
        <span>{minDisplay}</span>
        <span>{maxDisplay}</span>
      </div>
    </FormField>
  );
};

export default SliderField;
