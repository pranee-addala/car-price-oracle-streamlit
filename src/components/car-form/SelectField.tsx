
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FormField from "./FormField";
import { ReactNode } from "react";

interface SelectFieldProps {
  label: string;
  icon: ReactNode;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const SelectField = ({ label, icon, value, options, onChange }: SelectFieldProps) => {
  return (
    <FormField label={label} icon={icon}>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="glow-input">
          <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
};

export default SelectField;
