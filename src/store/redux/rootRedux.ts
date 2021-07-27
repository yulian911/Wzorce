import { useReducer } from "react";
import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { todoReducer } from "./todosReduce";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  count: countReducer,
  users: userReducer,
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
