import { Module } from '@nestjs/common';
import { IProjectRepository } from './domain/project.repository';
import { PrismaProjectRepository } from './infrastructure/persistence/prisma-project.repository';
import { GetAllProjectsUseCase } from './application/use-cases/get-all-projects.use-case';
import { ProjectController } from './presentation/controllers/project.controller';

@Module({
  controllers: [ProjectController],
  providers: [
    GetAllProjectsUseCase,
    {
      provide: IProjectRepository,
      useClass: PrismaProjectRepository,
    },
  ],
})
export class ProjectsModule {}
