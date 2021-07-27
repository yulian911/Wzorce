import React from "react";
import { TodoProps } from "./typesTodo";
import styled from "styled-components";

export const ListTodo = ({ todos, onRemove }: TodoProps) => {
  const handlerDelite = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    onRemove(id);
  };
  return (
    <ListWrapper>
      {todos.map((todo) => (
        <Item key={todo.id}>
          {todo.title}
          <Button onClick={(e) => handlerDelite(e, todo.id)}>Usun</Button>
        </Item>
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: "grey";
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 50px;
  padding: 10px 25px;
  border-radius: 15px;
  border: 2px solid #ee6e73;
  margin: 10px 0;
`;
export const Button = styled.button`
  width: 100px;
  background-color: white;
  border-radius: 15px;
  border: 2px solid #ee6e73;
  :active {
    background-color: #ee6e73;
    color: white;
  }
`;
