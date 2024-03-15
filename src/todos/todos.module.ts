import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';
import { TodosService } from './todos.services';
import { todosProviders } from './../database/providers/todos.providers';
import { TodosController } from './todos.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [TodosController],
  providers: [
    TodosService,
    ...todosProviders
  ],
  exports: [],
})
export class TodosModule {}
