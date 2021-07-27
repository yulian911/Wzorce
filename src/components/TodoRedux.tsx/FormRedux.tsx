import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { TodosActionType } from "../../store/redux/todosReduce";
import { Button } from "../Todo/ListTodo";

export const FormRedux: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({
      type: TodosActionType.ADD_TODO,
      payload: {
        title: value,
        id: Math.ceil(Math.random() * 100),
      },
    });
    setValue("");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Lista Todo to do wpisz cos i nacisnij ENETER
      </h1>
      <input type="text" value={value} onChange={handleChange} />
      <Button onClick={addHandler}>Dodaj</Button>
    </div>
  );
};
