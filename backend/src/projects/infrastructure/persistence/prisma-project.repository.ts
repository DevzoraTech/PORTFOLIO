import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ProjectEntity } from '../../domain/project.entity';
import { IProjectRepository } from '../../domain/project.repository';

@Injectable()
export class PrismaProjectRepository implements IProjectRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<ProjectEntity>): Promise<ProjectEntity> {
    return this.prisma.project.create({
      data: {
        title: data.title!,
        description: data.description!,
        slug: data.slug!,
        imageUrl: data.imageUrl,
        techStack: data.techStack || [],
        githubUrl: data.githubUrl,
        liveUrl: data.liveUrl,
        featured: data.featured,
        order: data.order,
      },
    }) as Promise<ProjectEntity>;
  }

  async findAll(): Promise<ProjectEntity[]> {
    return this.prisma.project.findMany({
      orderBy: { order: 'asc' },
    }) as Promise<ProjectEntity[]>;
  }

  async findById(id: string): Promise<ProjectEntity | null> {
    return this.prisma.project.findUnique({
      where: { id },
    }) as Promise<ProjectEntity | null>;
  }

  async findBySlug(slug: string): Promise<ProjectEntity | null> {
    return this.prisma.project.findUnique({
      where: { slug },
    }) as Promise<ProjectEntity | null>;
  }

  async update(id: string, data: Partial<ProjectEntity>): Promise<ProjectEntity> {
    return this.prisma.project.update({
      where: { id },
      data: {
        ...data,
      },
    }) as Promise<ProjectEntity>;
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.project.delete({ where: { id } });
    return true;
  }
}
