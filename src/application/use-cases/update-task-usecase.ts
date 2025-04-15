import { TaskStatus } from '../../domain/entities/task.entity';
import { TaskRepository } from '../../domain/repositories/task.repository';

interface UpdateStatusDTO {
  id: string;
  status: TaskStatus;
}

export class UpdateTaskStatusUseCase {
  constructor(private readonly repository: TaskRepository) {}

  async execute({ id, status }: UpdateStatusDTO): Promise<void> {
    await this.repository.updateStatus(id, status);
  }
}
