import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../../domain/entities/task.entity';

export class UpdateTaskStatusDto {
  @ApiProperty({ example: 'DOING', enum: ['BACKLOG', 'DOING', 'DONE'] })
  status: TaskStatus;
}
