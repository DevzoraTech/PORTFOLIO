import { projects } from '@/data/projects';
import CaseStudyPage from '@/components/CaseStudyPage';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Technical Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} Architecture Deep Dive`,
      description: project.description,
      images: [project.image],
    }
  };
}

export async function generateStaticParams() {
  return projects.filter(p => p.deepDive).map((project) => ({
    id: project.id,
  }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project || !project.deepDive) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}
