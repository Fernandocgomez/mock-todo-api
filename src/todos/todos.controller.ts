import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.services';
import { CreateTodoDto } from './dtos/request/create-todo.dto';
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() createTodo: CreateTodoDto): Promise<Todo> {
    return this.todosService.create(createTodo);
  }

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return this.todosService.getAllTodos();
  }
}
