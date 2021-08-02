import React, { useRef } from "react";
import { FormTodoProps } from "./typesTodo";

export const FormTodo = ({ onAdd }: FormTodoProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Lista Todo to do wpisz cos i nacisnij ENETER
      </h1>
      <input style={{color:'#20c997'}} type="text" ref={ref} onKeyDown={handleKeyDown} />
    </div>
  );
};
