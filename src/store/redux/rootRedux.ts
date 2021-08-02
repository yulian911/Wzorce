
import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { todoReducer } from "./todosReduce";
import { userReducer } from "./userReducer";
import { errorReducer } from "./errorReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  count: countReducer,
  users: userReducer,
  todos: todoReducer,
  error:errorReducer,
  auth:authReducer
});

export type RootState = ReturnType<typeof rootReducer>;
