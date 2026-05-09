import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '../../domain/project.repository';
import { ProjectEntity } from '../../domain/project.entity';

@Injectable()
export class GetAllProjectsUseCase {
  constructor(
    @Inject(IProjectRepository)
    private readonly projectRepository: IProjectRepository,
  ) {}

  async execute(): Promise<ProjectEntity[]> {
    return this.projectRepository.findAll();
  }
}
