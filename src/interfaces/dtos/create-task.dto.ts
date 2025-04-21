import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'New Task created!' })
  title: string;

  @ApiProperty({ example: 'BACKLOG', enum: ['BACKLOG', 'DOING', 'DONE'] })
  status: 'BACKLOG' | 'DOING' | 'DONE';
}