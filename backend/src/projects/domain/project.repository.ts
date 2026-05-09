import { ProjectEntity } from './project.entity';

export interface IProjectRepository {
  create(project: Partial<ProjectEntity>): Promise<ProjectEntity>;
  findAll(): Promise<ProjectEntity[]>;
  findById(id: string): Promise<ProjectEntity | null>;
  findBySlug(slug: string): Promise<ProjectEntity | null>;
  update(id: string, project: Partial<ProjectEntity>): Promise<ProjectEntity>;
  delete(id: string): Promise<boolean>;
}

export const IProjectRepository = Symbol('IProjectRepository');
