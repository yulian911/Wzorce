export interface ITodo {
  title: string;
  id: number;
}

export type TodoProps = {
  todos: ITodo[];
  onRemove(id: number): void;
};
export type FormTodoProps = {
  onAdd(title: string): void;
};
