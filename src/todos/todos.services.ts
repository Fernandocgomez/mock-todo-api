import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dtos/request/create-todo.dto';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(
    private readonly todosRepository: TodosRepository,
  ) {}

  async create(createTodo: CreateTodoDto): Promise<Todo> {
    return this.todosRepository.create(createTodo);
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.todosRepository.getAllTodos();
  }
}
