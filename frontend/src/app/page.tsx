import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { LogoIcon } from "@/components/Logo";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/SocialIcons";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Clients />
        <About />
        <TechStack />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* ─── Footer ─── */}
      <footer className="py-12 border-t border-border-light bg-surface-muted/50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <LogoIcon size={32} />
                <span className="font-display font-bold text-text-primary text-base">
                  Mpango H. Rahman
                </span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                Senior Systems Engineer & IT Lead. Specialized in architecting 
                high-availability ecosystems and technical leadership.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <div className="font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] mb-6 font-bold">
                Navigation
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['About', 'Services', 'Work', 'Experience', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-text-secondary hover:text-primary transition-colors py-1 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-px bg-border group-hover:w-3 group-hover:bg-primary transition-all" />
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] mb-6 font-bold">
                Connect_Infrastructure
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/DevzoraTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-muted border border-border text-text-muted hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mpango-hamza-rahman-139b793b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-muted border border-border text-text-muted hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-muted border border-border text-text-muted hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <XIcon size={18} />
                  </a>
                </div>
                <div className="text-[10px] font-mono text-text-muted uppercase">
                  Based in Uganda • Available Globally
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-border-light flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
              © {new Date().getFullYear()} Devzora Technologies. Engineered by Mpango Hamza.
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-text-muted uppercase tracking-widest">
              Status: <span className="text-green-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Production_Ready</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

