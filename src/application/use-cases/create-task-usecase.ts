import { TaskRepository } from '../../domain/repositories/task.repository';
import { Task } from '../../domain/entities/task.entity';
import { CreateTaskDto } from '../../interfaces/dtos/create-task.dto';

export class CreateTaskUseCase {
  constructor(private readonly repository: TaskRepository) {}

  async execute({ title }: CreateTaskDto): Promise<Task> {
    const task = new Task(crypto.randomUUID(), title, 'BACKLOG', new Date());
    await this.repository.create(task);
    return task;
  }
}
