import React from 'react'
import styled from 'styled-components'
import { useTodo } from '../../Contex/todoContex'

function ListContex() {

    const {todos,setTodos} =useTodo()

    const removeHandler = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      };

    return (
        <ListWrapper>
                {todos.map(todo =><Item key={todo.id}>
      {todo.title}
      <Button onClick={()=>removeHandler(todo.id)}>Usuń</Button>
    </Item>)}

        </ListWrapper>
    )
}

export default ListContex
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
