export type TaskStatus = 'BACKLOG' | 'DOING' | 'DONE' | 'TRASH';

export class Task {
  constructor(
    public readonly id: string,
    public title: string,
    public status: TaskStatus,
    public readonly createdAt: Date,
  ) {}
}
