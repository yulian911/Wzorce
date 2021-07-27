export const initialState: TodosState = {
  todos: [],
};
export interface TodosState {
  todos: any[];
}

export enum TodosActionType {
  ADD_TODO = "ADD_TODO",
  DELITE_TODO = "DELITE_TODO",
}
interface addTodoAction {
  type: TodosActionType.ADD_TODO;
  payload: string[];
}
interface deliteTodoAction {
  type: TodosActionType.DELITE_TODO;
  payload: number;
}
export type TodosAction = addTodoAction | deliteTodoAction;

export const todoReducer = (
  state = initialState,
  action: TodosAction
): TodosState => {
  switch (action.type) {
    case TodosActionType.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TodosActionType.DELITE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
