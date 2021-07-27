import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { TodosActionType } from "../../store/redux/todosReduce";
import { useTypeSelector } from "../hook/useTypeSelector";

export const ListRedux = () => {
  const { todos } = useTypeSelector((state) => state.todos);
  const dispatch = useDispatch();

  const delitehandler = (id: { id: any }) => {
    dispatch({ type: TodosActionType.DELITE_TODO, payload: id });
  };
  return (
    <ListWrapper>
      {todos.map((todo) => (
        <Item key={todo.id}>
          {todo.id}.{todo.title}
          <Button onClick={() => delitehandler(todo.id)}>Usun</Button>
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
const Button = styled.button`
  width: 100px;
  background-color: white;
  border-radius: 15px;
  border: 2px solid #ee6e73;
  :active {
    background-color: #ee6e73;
    color: white;
  }
`;
