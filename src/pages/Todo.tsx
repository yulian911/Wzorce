import { useState } from "react";
import { FormTodo } from "../components/Todo/FormTodo";
import { ListTodo } from "../components/Todo/ListTodo";
import { ITodo } from "../components/Todo/typesTodo";

export const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleAdd = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <div style={{ width: "100%" }}>
      <FormTodo onAdd={handleAdd} />
      <ListTodo todos={todos} onRemove={removeHandler} />
    </div>
  );
};
