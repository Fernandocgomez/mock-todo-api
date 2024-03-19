import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dtos/request/create-todo.dto';
import { TodosRepository } from './todos.repository';
import { GetAllTodosDto } from './dtos/response/get-all-todos.dto';

@Injectable()
export class TodosService {
  constructor(private readonly todosRepository: TodosRepository) {}

  async create(createTodo: CreateTodoDto): Promise<Todo> {
    const createdTodo = await this.todosRepository.create(createTodo);
    const { _id, title, content, isComplete } = createdTodo;

    return { id: _id, title, content, isComplete } as Todo;
  }

  async getAllTodos(): Promise<GetAllTodosDto> {
    const doneTodos = [];
    const pendingTodos = [];

    const todos = await this.todosRepository.getAllTodos();

    todos.forEach((todo) => {
      const { _id, title, content, isComplete } = todo;
      const systemTodo = { id: _id, title, content, isComplete };

      if (isComplete) {
        doneTodos.push(systemTodo);
      } else {
        pendingTodos.push(systemTodo);
      }
    });

    return { doneTodos, pendingTodos };
  }
}
