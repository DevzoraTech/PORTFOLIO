'use client';

import React, { useState } from 'react';
import { Mail, Phone, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      setFormStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface-elevated border-t border-border-light relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side: Info */}
          <div className="space-y-10">
            <div>
              <div className="section-label">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Contact Infrastructure
              </div>
              <h2 className="section-title mb-6">
                Let&apos;s architect your <br />
                <span className="gradient-text">next big system</span>
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-lg">
                Whether you&apos;re looking to build a high-performance API, a multi-platform mobile ecosystem, or need strategic technical leadership — I&apos;m ready to help.
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] mb-2">Direct Communication</div>
                
                <a href="mailto:admin@devzoratech.com" className="flex items-center gap-3 p-3 rounded-xl bg-surface-muted border border-border hover:border-primary/30 transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted font-mono uppercase">Primary</div>
                    <div className="text-xs font-bold text-text-primary">admin@devzoratech.com</div>
                  </div>
                </a>

                <a href="tel:+2567555432250" className="flex items-center gap-3 p-3 rounded-xl bg-surface-muted border border-border hover:border-primary/30 transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted font-mono uppercase">Phone</div>
                    <div className="text-xs font-bold text-text-primary">+256 755 543 2250</div>
                  </div>
                </a>
              </div>

              <div className="space-y-4 pt-6 sm:pt-0">
                <div className="font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] mb-2">Technical Channels</div>
                
                <a href="https://github.com/DevzoraTech" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-surface-muted border border-border hover:border-primary/30 transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <GithubIcon size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted font-mono uppercase">GitHub</div>
                    <div className="text-xs font-bold text-text-primary">@DevzoraTech</div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/mpango-hamza-rahman-139b793b1/" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-surface-muted border border-border hover:border-primary/30 transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <LinkedinIcon size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted font-mono uppercase">LinkedIn</div>
                    <div className="text-xs font-bold text-text-primary">Mpango H. Rahman</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Secondary Emails */}
            <div className="pt-4 border-t border-border">
              <div className="font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] mb-3">Fallback Inquiries</div>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:devzoratech@gmail.com" className="text-xs text-text-secondary hover:text-primary transition-colors">devzoratech@gmail.com</a>
                <span className="text-border">•</span>
                <a href="mailto:devzora.software@gmail.com" className="text-xs text-text-secondary hover:text-primary transition-colors">devzora.software@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <div className="glass-card p-8 lg:p-10 border border-primary/10 shadow-2xl shadow-primary/5">
              <h3 className="text-xl font-display font-bold text-text-primary mb-2">Initialize Connection</h3>
              <p className="text-sm text-text-muted mb-8 italic">Secure channel for project inquiries.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-mono text-text-muted uppercase tracking-widest ml-1">Identity</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-surface-muted border border-border rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-mono text-text-muted uppercase tracking-widest ml-1">Secure Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="you@domain.com"
                      className="w-full px-4 py-3 bg-surface-muted border border-border rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-mono text-text-muted uppercase tracking-widest ml-1">Project Parameters / Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={5}
                    placeholder="Describe your vision or technical requirements..."
                    className="w-full px-4 py-3 bg-surface-muted border border-border rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none resize-none"
                  />
                </div>

                <button 
                  disabled={formStatus === 'sending' || formStatus === 'success'}
                  className={`w-full py-4 rounded-xl font-display font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all ${
                    formStatus === 'success' 
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' 
                      : 'btn-primary'
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Synchronizing...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle2 size={18} />
                      Transmission Successful
                    </>
                  ) : (
                    <>
                      Execute Message
                      <ArrowUpRight size={18} />
                    </>
                  )}
                </button>

                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-xs font-medium animate-fade-in bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                    <AlertCircle size={14} />
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
