import React, { useState, forwardRef } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../utils/utils";

const Select = ({ children }) => {
  return <div>{children}</div>;
};

const SelectGroup = ({ children }) => {
  return <div>{children}</div>;
};

const SelectValue = ({ value }) => {
  return <span>{value}</span>;
};

const SelectTrigger = forwardRef(function SelectTrigger(
  { className, children, onClick },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm",
        className
      )}
      onClick={onClick}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
});

const SelectScrollUpButton = forwardRef(function SelectScrollUpButton(
  { className, onClick },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn("flex items-center justify-center py-1", className)}
      onClick={onClick}
    >
      <ChevronUp className="h-4 w-4" />
    </button>
  );
});

const SelectScrollDownButton = forwardRef(function SelectScrollDownButton(
  { className, onClick },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn("flex items-center justify-center py-1", className)}
      onClick={onClick}
    >
      <ChevronDown className="h-4 w-4" />
    </button>
  );
});

const SelectContent = ({ className, children, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className={cn("relative z-50 max-h-96 min-w-[8rem] rounded-md border bg-white shadow-md", className)}>
      {children}
    </div>
  );
};

const SelectItem = ({ className, children, onClick, isSelected }) => {
  return (
    <div
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm",
        isSelected ? "bg-accent" : "",
        className
      )}
      onClick={onClick}
    >
      {isSelected && (
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <Check className="h-4 w-4" />
        </span>
      )}
      {children}
    </div>
  );
};

const SimpleSelect = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleOpen = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="relative">
      <SelectTrigger onClick={toggleOpen}>
        {selected ? <SelectValue value={selected.label} /> : <span>{placeholder}</span>}
      </SelectTrigger>
      <SelectContent isOpen={isOpen}>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            isSelected={selected && selected.value === option.value}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </div>
  );
};

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectContent,
  SelectItem,
  SimpleSelect,
};
