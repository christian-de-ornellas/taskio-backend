import { Task, TaskStatus } from '../entities/task.entity';

export interface TaskRepository {
  create(task: Task): Promise<void>;
  updateStatus(id: string, status: TaskStatus): Promise<void>;
  findByStatus(status: TaskStatus): Promise<Task[]>;
}
