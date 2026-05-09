import { IProjectRepository } from '../../domain/project.repository';
import { ProjectEntity } from '../../domain/project.entity';
export declare class GetAllProjectsUseCase {
    private readonly projectRepository;
    constructor(projectRepository: IProjectRepository);
    execute(): Promise<ProjectEntity[]>;
}
