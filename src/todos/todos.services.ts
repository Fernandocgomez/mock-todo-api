import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dtos/request/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @Inject('TODO_MODEL')
    private todoModel: Model<Todo>,
  ) {}

  async create(createTodo: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel({...createTodo, isComplete: true});

    return createdTodo.save();
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }
}
