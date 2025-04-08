import { Module } from '@nestjs/common';
import { PrismaModule } from './infrastructure/prisma.module';
import { TaskController } from './interfaces/controllers/task.controller';
import { TaskRepositoryPrisma } from './infrastructure/database/repositories/task.repository.prisma';

@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [TaskRepositoryPrisma],
})
export class AppModule {}