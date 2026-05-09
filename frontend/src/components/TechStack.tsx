'use client';

import Image from 'next/image';

const techCategories = [
  {
    label: 'Backend',
    techs: [
      { name: 'NestJS', icon: '/icons/nestjs.svg' },
      { name: 'Node.js', icon: '/icons/node-js.svg' },
      { name: 'Express', icon: '/icons/express.png' },
      { name: 'Go', icon: '/icons/go.svg' },
      { name: 'Java', icon: '/icons/java.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb.jpg' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { name: 'Supabase', icon: '/icons/supabase.jpeg' },
      { name: 'Firebase', icon: '/icons/firebase.png' },
      { name: 'Prisma', icon: '/icons/prisma.svg' },
      { name: 'Redis', icon: '/icons/redis.svg' },
      { name: 'Kafka', icon: '/icons/apache-kafka.svg' },
    ],
  },
  {
    label: 'Frontend',
    techs: [
      { name: 'Next.js', icon: '/icons/next.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Tailwind', icon: '/icons/tailwind-css.svg' },
      { name: 'Single-SPA', icon: '/icons/single-spa.png' },
      { name: 'shadcn/ui', icon: '/icons/shadcn.png' },
    ],
  },
  {
    label: 'Mobile',
    techs: [
      { name: 'React Native', icon: '/icons/react-native.png' },
      { name: 'Expo', icon: '/icons/expo.png' },
      { name: 'Flutter', icon: '/icons/flutter.svg' },
      { name: 'Dart', icon: '/icons/dart.svg' },
    ],
  },
  {
    label: 'DevOps & Tools',
    techs: [
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'AWS', icon: '/icons/aws.svg' },
      { name: 'CI/CD', icon: '/icons/ci-cd-pipeline.png' },
      { name: 'Nginx', icon: '/icons/nginx.jpeg' },
      { name: 'Yarn', icon: '/icons/yarn.svg' },
    ],
  },
];

export const TechStack = () => {
  return (
    <section id="skills" className="py-16 bg-surface-elevated border-y border-border-light">
      <div className="section-container">
        <div className="text-center mb-10">
          <div className="section-label justify-center">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Tech Stack
          </div>
          <h2 className="text-2xl font-display font-bold text-text-primary">
            Technologies I work with daily
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category) => (
            <div key={category.label}>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-4 font-medium">
                {category.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex items-center gap-2.5 px-3 py-2 glass-card card-hover cursor-default"
                  >
                    <div className="w-7 h-7 relative flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                      {/* Fallback for missing icons: simple text icon */}
                      <div className="absolute inset-0 flex items-center justify-center bg-surface-muted rounded text-[10px] font-bold text-text-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {tech.name.charAt(0)}
                      </div>
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={20}
                        height={20}
                        className="object-contain relative z-10"
                        onError={(e) => {
                          // Hide image on error to show the fallback div behind it
                          (e.target as any).style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
