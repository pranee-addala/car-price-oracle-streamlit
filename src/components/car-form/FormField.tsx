
import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  icon: ReactNode;
  value?: string | number;
  children: ReactNode;
}

const FormField = ({ label, icon, value, children }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-sm font-medium text-car-light">{label}</h3>
        </div>
        {value !== undefined && (
          <span className="text-sm font-semibold text-car-light">{value}</span>
        )}
      </div>
      {children}
    </div>
  );
};

export default FormField;
