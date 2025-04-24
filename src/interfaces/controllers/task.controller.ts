import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskUseCase } from '../../application/use-cases/create-task-usecase';
import { TaskRepositoryPrisma } from '../../infrastructure/database/repositories/task.repository.prisma';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskStatusUseCase } from '../../application/use-cases/update-task-usecase';
import { UpdateTaskStatusDto } from '../dtos/update-task.dto';
import { TaskStatus } from '@prisma/client';

@ApiTags('Tasks')
@Controller('/tasks')
export class TaskController {
  private readonly createTaskUseCase: CreateTaskUseCase;
  private updateTaskStatus: UpdateTaskStatusUseCase;

  constructor(private readonly taskRepository: TaskRepositoryPrisma) {
    this.createTaskUseCase = new CreateTaskUseCase(taskRepository);
    this.updateTaskStatus = new UpdateTaskStatusUseCase(taskRepository);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({ status: 201, description: 'Task created!' })
  async create(@Body() body: CreateTaskDto) {
    return await this.createTaskUseCase.execute(body);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Atualiza status da tarefa' })
  async updateStatus(
    @Param('id') id: string,
    @Body() body: UpdateTaskStatusDto,
  ) {
    await this.updateTaskStatus.execute({ id, status: body.status });
    return { message: 'Status atualizado' };
  }

  @Get()
  @ApiOperation({ summary: 'Lista tarefas por status' })
  async list(@Query('status') status: TaskStatus) {
    return await this.taskRepository.findByStatus(status);
  }
}
