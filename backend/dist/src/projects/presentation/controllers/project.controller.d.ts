import { GetAllProjectsUseCase } from '../application/use-cases/get-all-projects.use-case';
export declare class ProjectController {
    private readonly getAllProjectsUseCase;
    constructor(getAllProjectsUseCase: GetAllProjectsUseCase);
    findAll(): Promise<any>;
}
