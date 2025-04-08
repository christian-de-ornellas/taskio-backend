import { TaskRepository } from '../../../domain/repositories/task.repository';
import { PrismaService } from '../../prisma.service';
import { Injectable } from '@nestjs/common';
import { Task } from '../../../domain/entities/task.entity';

@Injectable()
export class TaskRepositoryPrisma implements TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(task: Task): Promise<void> {
    await this.prisma.task.create({ data: { title: task.title } });
  }

  async findById(id: string): Promise<Task | null> {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) return null;
    return new Task(task.title);
  }
}
