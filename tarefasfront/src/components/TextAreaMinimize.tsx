import { ChevronDown } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Dispatch, SetStateAction, useState } from "react";
import { twJoin } from "tailwind-merge";

function toggle(setState: Dispatch<SetStateAction<boolean>>) {
  setState((value) => !value);
}

export function TextAreaMinimize() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-end">
      {/* Fazer efeito de girar a seta */}
      <ChevronDown
        onClick={() => toggle(setIsOpen)}
        className={twJoin(
          "duration-500 transition-transform",
          isOpen ? "rotate-180" : "",
        )}
      />
      <Textarea placeholder="Descrição" className={isOpen ? "hidden" : ""} />
    </div>
  );
}
