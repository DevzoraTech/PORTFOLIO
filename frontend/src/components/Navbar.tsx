'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoIcon } from './Logo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <LogoIcon size={32} />
          <div className="flex flex-col">
            <span className="font-display font-black text-text-primary text-sm tracking-tight leading-none">
              HAMZA.RAHMAN
            </span>
            <span className="font-mono text-[9px] text-primary uppercase tracking-[0.2em] font-bold">
              Systems_Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary font-medium rounded-lg hover:bg-surface-muted transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-primary text-sm">
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-border-light">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm text-text-secondary hover:text-text-primary font-medium rounded-lg hover:bg-surface-muted transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-sm mt-2 justify-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
