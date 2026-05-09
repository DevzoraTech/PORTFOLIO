import { Controller, Get } from '@nestjs/common';
import { GetAllProjectsUseCase } from '../application/use-cases/get-all-projects.use-case';

@Controller('projects')
export class ProjectController {
  constructor(private readonly getAllProjectsUseCase: GetAllProjectsUseCase) {}

  @Get()
  async findAll() {
    return this.getAllProjectsUseCase.execute();
  }
}
