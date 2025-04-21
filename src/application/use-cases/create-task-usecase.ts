import { TaskRepository } from '../../domain/repositories/task.repository';
import { Task } from '../../domain/entities/task.entity';
import { CreateTaskDto } from '../../interfaces/dtos/create-task.dto';

export class CreateTaskUseCase {
  constructor(private readonly repository: TaskRepository) {}

  async execute({ title, status }: CreateTaskDto): Promise<Task> {
    const task = new Task(crypto.randomUUID(), title, status, new Date());
    await this.repository.create(task);
    return task;
  }
}
