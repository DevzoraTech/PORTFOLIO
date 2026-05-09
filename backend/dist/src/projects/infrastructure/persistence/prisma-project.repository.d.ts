import { PrismaService } from '../../../prisma/prisma.service';
import { ProjectEntity } from '../../domain/project.entity';
import { IProjectRepository } from '../../domain/project.repository';
export declare class PrismaProjectRepository implements IProjectRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<ProjectEntity>): Promise<ProjectEntity>;
    findAll(): Promise<ProjectEntity[]>;
    findById(id: string): Promise<ProjectEntity | null>;
    findBySlug(slug: string): Promise<ProjectEntity | null>;
    update(id: string, data: Partial<ProjectEntity>): Promise<ProjectEntity>;
    delete(id: string): Promise<boolean>;
}
