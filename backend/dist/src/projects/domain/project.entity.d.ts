export declare class ProjectEntity {
    id: string;
    title: string;
    description: string;
    slug: string;
    imageUrl?: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}
