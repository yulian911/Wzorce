import { useContext } from "react";
import {  FC, useState } from "react";
import { createContext } from "react";
import { ITodo } from "../components/Todo/typesTodo";

const TodoContex = createContext<TodoContexData | null>(null)

export const TodoContexProvider:FC=({children})=>{

    const value =useProviderTodo()

    return(
       <TodoContex.Provider value={value}>
           {children}
       </TodoContex.Provider>
    )
}
const useProviderTodo =()=>{

    const [todos, setTodos] = useState<ITodo[]>([]);
    const [value, setValue] = useState<string>("");

    return{
        todos,setTodos,value,setValue

    }
}


type TodoContexData = ReturnType<typeof useProviderTodo>

export const useTodo =()=>{
    const todo =useContext(TodoContex);
    if(!todo){
        throw new Error('useTodo must be used inside TodoContexProvider')
    }
    return todo
}