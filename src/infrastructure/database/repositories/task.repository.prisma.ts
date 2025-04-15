import { TaskRepository } from '../../../domain/repositories/task.repository';
import { PrismaService } from '../../prisma.service';
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from '../../../domain/entities/task.entity';

@Injectable()
export class TaskRepositoryPrisma implements TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(task: Task): Promise<void> {
    await this.prisma.task.create({ data: { ...task } });
  }

  async updateStatus(id: string, status: TaskStatus): Promise<void> {
    await this.prisma.task.update({
      where: { id },
      data: { status },
    });
  }

  async findByStatus(status: TaskStatus): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany({ where: { status } });
    return tasks.map(
      (t) => new Task(t.id, t.title, t.status as TaskStatus, t.createdAt),
    );
  }
}
