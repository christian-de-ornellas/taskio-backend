import { Task } from '../../domain/entities/task.entity';
import { TaskRepository } from '../../domain/repositories/task.repository';


export class CreateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(data: Task): Promise<void> {
    const taskExists = await this.taskRepository.findById(data.title);
    if (taskExists) {
      console.error('Task already exists');
    }
    const task = new Task(data.title);
    await this.taskRepository.create(task);
  }
}
