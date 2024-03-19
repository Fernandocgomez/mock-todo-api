import { Todo } from './../../interfaces/todo.interface';

export class GetAllTodosDto {
  readonly doneTodos: Todo[];
  readonly pendingTodos: Todo[];
}
