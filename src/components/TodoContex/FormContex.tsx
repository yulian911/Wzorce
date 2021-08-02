import React, { useRef } from 'react'
import { useTodo } from '../../Contex/todoContex'

function FormContex() {
    const {setTodos} =useTodo()

    const ref = useRef<HTMLInputElement>(null);
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleAdd(ref.current!.value);
        ref.current!.value = "";
      }
    };


    const handleAdd = (title: string) => {
        const newTodo = {
          title: title,
          id: Date.now(),
        };
        setTodos((prev) => [...prev, newTodo]);
      };


    return (
        <div>
            <input type='text' ref={ref} onKeyDown={handleKeyDown}/>
           
        </div>
    )
}

export default FormContex
