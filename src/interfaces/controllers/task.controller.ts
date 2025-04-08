import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateTaskUseCase } from '../../application/use-cases/create-task-usecase';
import { TaskRepositoryPrisma } from '../../infrastructure/database/repositories/task.repository.prisma';

@Controller('/tasks')
export class TaskController {
  private readonly createTaskUseCase: CreateTaskUseCase;

  constructor(private readonly taskRepository: TaskRepositoryPrisma) {
    this.createTaskUseCase = new CreateTaskUseCase(taskRepository);
  }

  @Post()
  async create(@Body() body: { title: string }) {
    await this.createTaskUseCase.execute(body);
    return { message: 'Task created successfully' };
  }

  @Get()
  index() {
    return { message: 'ok' };
  }
}
