'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { 
  ArrowLeft, 
  ExternalLink, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Database, 
  Smartphone, 
  Server,
  Activity,
  Terminal,
  Code2,
  Lock,
  Globe,
  Clock
} from 'lucide-react';
import { ProjectData } from '@/data/projects';
import { GithubIcon } from '@/components/SocialIcons';

const iconMap: Record<string, any> = {
  server: Server,
  smartphone: Smartphone,
  database: Database,
  shield: ShieldCheck,
  zap: Zap,
  layers: Layers,
  cpu: Cpu,
  activity: Activity,
};

export default function CaseStudyPage({ project }: { project: ProjectData }) {
  if (!project.deepDive) return null;

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-primary/40 selection:text-white font-sans overflow-x-hidden">
      {/* Structural Engineering Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Coordinate Markers */}
        <div className="absolute top-20 left-10 text-[8px] font-mono text-white/10 uppercase tracking-widest">LAT_REF: 0.3476 / LNG_REF: 32.5825</div>
        <div className="absolute bottom-10 right-10 text-[8px] font-mono text-white/10 uppercase tracking-widest">BUILD_STAMP: 2026.05.09_04:08</div>
        
        {/* Large Geometric Background Text */}
        <div className="absolute -top-20 -right-20 text-[20rem] font-display font-black text-white/[0.01] select-none leading-none">
          {project.title.charAt(0)}
        </div>
      </div>

      {/* Industrial Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-2xl bg-black/40">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/#work" className="group flex items-center gap-3 text-[10px] font-mono text-white/40 hover:text-white transition-all tracking-[0.2em]">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              SYSTEM_EXIT
            </Link>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div className="hidden sm:flex flex-col">
              <span className="text-[9px] font-mono text-primary font-bold uppercase tracking-widest">Audit_Report</span>
              <span className="text-[11px] font-mono text-white/60 tracking-[0.1em]">{project.id.toUpperCase()} // PRODUCTION_ENVIRONMENT</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 border border-white/10 rounded-sm font-mono text-[10px] text-white/40 hover:text-white hover:bg-white/5 transition-all"
            >
              ACCESS_SOURCE
            </a>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-sm font-mono text-[10px] text-primary hover:bg-primary/20 transition-all flex items-center gap-2"
            >
              <Globe size={12} />
              LIVE_NODE
            </a>
          </div>
        </div>
      </nav>

      <main className="relative pt-40 pb-60">
        <article className="max-w-[1400px] mx-auto px-6">
          {/* Hero Section - Industrial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-primary" />
                  <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-[0.4em]">Architecture Deep Dive</span>
                </div>
                
                <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-display font-black tracking-tight mb-12 leading-[0.85] text-white">
                  {project.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-12 mb-16">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-white/30 uppercase mb-2">Primary_Domain</span>
                    <span className="text-lg font-display font-bold text-white uppercase tracking-wider">{project.subtitle}</span>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-white/30 uppercase mb-2">Security_Clearance</span>
                    <span className="text-lg font-display font-bold text-emerald-500 uppercase tracking-wider">LEVEL_04_PUBLIC</span>
                  </div>
                </div>

                <p className="text-2xl text-white/40 leading-relaxed max-w-3xl font-light mb-12">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/[0.03] border border-white/5 font-mono text-[10px] text-white/40 rounded-sm">
                      :: {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4 lg:pt-12">
              <div className="sticky top-40 space-y-8">
                {/* Data Strip 1 */}
                <div className="p-6 bg-white/[0.02] border border-white/10 rounded-sm backdrop-blur-md">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">System_Specs</span>
                    <Cpu size={14} className="text-primary" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-white/5 pb-2">
                      <span className="text-[9px] font-mono text-white/20">STATUS</span>
                      <span className="text-xs font-mono text-emerald-400">OPERATIONAL</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/5 pb-2">
                      <span className="text-[9px] font-mono text-white/20">TENURE</span>
                      <span className="text-xs font-mono text-white">8_YEARS_EXP</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/5 pb-2">
                      <span className="text-[9px] font-mono text-white/20">REGION</span>
                      <span className="text-xs font-mono text-white">GLOBAL_SYNC</span>
                    </div>
                  </div>
                </div>

                {/* System Image Plate */}
                <div className="relative aspect-square rounded-sm overflow-hidden border border-white/10 group">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    unoptimized
                    className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000_100%)] opacity-60" />
                  <div className="absolute top-4 right-4 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    <div className="w-1.5 h-1.5 bg-primary/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Technical Metrics Grid */}
          <section className="mb-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 divide-x divide-white/10 bg-white/[0.01]">
              {project.deepDive.metrics.map((metric, i) => (
                <div key={i} className="p-12 hover:bg-primary/[0.02] transition-all group">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-2 border border-primary/40 flex items-center justify-center">
                      <div className="w-0.5 h-0.5 bg-primary" />
                    </div>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em]">{metric.label}</span>
                  </div>
                  <div className="text-6xl font-display font-black text-white mb-4 tracking-tighter group-hover:text-primary transition-colors">
                    {metric.value}
                  </div>
                  <p className="text-sm text-white/40 font-mono leading-relaxed max-w-[200px]">{metric.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Audit Content Blocks */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40">
            <div className="lg:col-span-4 space-y-24">
              {/* Problem Statement */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="px-2 py-1 bg-secondary/10 border border-secondary/30 text-secondary text-[9px] font-mono font-bold">ERR_0404</div>
                  <h3 className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-[0.3em]">Critical_Challenge</h3>
                </div>
                <p className="text-xl text-white/60 leading-relaxed font-light italic border-l-2 border-secondary/20 pl-8">
                  &ldquo;{project.deepDive.problem}&rdquo;
                </p>
              </div>

              {/* Stack Breakdown */}
              <div className="space-y-12">
                <h3 className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.3em]">Infrastructure_Pulse</h3>
                <div className="space-y-4">
                  {project.deepDive.stack.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group">
                      <div className="mt-1 text-white/20 group-hover:text-primary transition-colors">
                        <Terminal size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">{item.name}</div>
                        <div className="text-[10px] font-mono text-white/40 leading-relaxed">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Implementation Showcase */}
            <div className="lg:col-span-8 space-y-20">
              <div className="space-y-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Code2 size={20} className="text-primary" />
                    <h3 className="text-2xl font-display font-bold text-white uppercase tracking-widest italic">Core_Logic_Extraction</h3>
                  </div>
                  <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Source_Type: TypeScript/Production</div>
                </div>

                <p className="text-lg text-white/40 leading-relaxed max-w-2xl">
                  {project.deepDive.solution}
                </p>

                {/* Syntax Highlighter Console */}
                <div className="space-y-12 mt-16">
                  {project.deepDive.codeSnippets.map((snippet, i) => (
                    <div key={i} className="relative group">
                      {/* Terminal Accents */}
                      <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-white/20" />
                      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-white/20" />
                      
                      <div className="rounded-sm overflow-hidden bg-black border border-white/10 shadow-[0_0_50px_rgba(0,0,0,1)]">
                        <div className="bg-[#0a0a0a] px-8 py-5 flex items-center justify-between border-b border-white/10">
                          <div className="flex items-center gap-6">
                            <div className="flex gap-2">
                              <div className="w-3 h-3 rounded-full bg-white/5 border border-white/10" />
                              <div className="w-3 h-3 rounded-full bg-white/5 border border-white/10" />
                              <div className="w-3 h-3 rounded-full bg-white/5 border border-white/10" />
                            </div>
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">{snippet.title}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Lock size={12} className="text-emerald-500/40" />
                            <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Encrypted_View</span>
                          </div>
                        </div>
                        <div className="p-10 text-[14px] leading-relaxed font-mono">
                          <SyntaxHighlighter 
                            language={snippet.language} 
                            style={atomDark}
                            customStyle={{ background: 'transparent', padding: 0, margin: 0 }}
                          >
                            {snippet.code.trim()}
                          </SyntaxHighlighter>
                        </div>
                        {/* Interactive Scan Line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-scan opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Global Footprint Section */}
          <section className="mb-40 pt-40 border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h3 className="text-4xl font-display font-black text-white uppercase tracking-tight mb-8">
                  Engineering <span className="text-primary">Without Borders.</span>
                </h3>
                <p className="text-lg text-white/40 leading-relaxed mb-8">
                  This system was designed with a global perspective, ensuring that latency, security, and scalability 
                  meet international standards. From regional deployments in East Africa to globally accessible nodes.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 border border-white/5 bg-white/[0.01]">
                    <Clock size={20} className="text-primary mb-4" />
                    <div className="text-[9px] font-mono text-white/20 uppercase mb-2">Service_Uptime</div>
                    <div className="text-xl font-display font-bold text-white">99.98%_SLO</div>
                  </div>
                  <div className="p-6 border border-white/5 bg-white/[0.01]">
                    <Globe size={20} className="text-primary mb-4" />
                    <div className="text-[9px] font-mono text-white/20 uppercase mb-2">Sync_Reach</div>
                    <div className="text-xl font-display font-bold text-white">MULTI_REGION</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/10] bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden">
                {/* Visual Placeholder for Architectural Diagram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full p-10 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-primary rounded-full animate-ping" />
                    <div className="absolute inset-0 border-[1px] border-white/10 grid grid-cols-8 grid-rows-8" />
                    <div className="w-full h-full border border-primary/20 flex items-center justify-center font-mono text-[10px] text-primary">
                      SYSTEM_ARCHITECTURE_MAP_V2.0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sequential Footnote */}
          <footer className="text-center">
            <div className="inline-flex flex-col items-center gap-12 group cursor-pointer">
              <div className="w-[1px] h-32 bg-gradient-to-b from-primary to-transparent" />
              <Link href="/#work">
                <div className="relative">
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-[1em] mb-4">Final_Entry_Verified</div>
                  <h4 className="text-3xl font-display font-black text-white hover:text-primary transition-colors tracking-tight uppercase italic">
                    Return_to_Nexus
                  </h4>
                </div>
              </Link>
              <div className="text-[8px] font-mono text-white/10 uppercase tracking-widest">
                Devzora_Technologies © 2026 // ALL_SYSTEMS_GO
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}
