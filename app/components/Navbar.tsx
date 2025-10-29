'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Our Story', href: '#story' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Blog', href: '#blog' }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[rgba(249,249,249,0.85)] shadow-[0_8px_24px_-16px_rgba(0,0,0,0.35)] text-[var(--color-text)]' : 'bg-transparent text-white'
      }`}
    >
      <div className="main-container flex items-center justify-between py-5">
        <Link
          href="#top"
          className={`font-display text-2xl tracking-[0.35em] uppercase ${
            scrolled ? 'text-[var(--color-text)] drop-shadow-none' : 'text-white drop-shadow-lg'
          }`}
        >
          H&H
        </Link>
        <nav className="hidden gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-semibold tracking-[0.45em] uppercase transition-colors ${
                scrolled ? 'text-[var(--color-text)] hover:text-[var(--color-accent)]' : 'text-white hover:text-[var(--color-accent-alt)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Search"
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition shadow-[0_12px_24px_-12px_rgba(0,0,0,0.45)] ${
            scrolled
              ? 'border-[rgba(103,58,183,0.25)] bg-white/90 text-[var(--color-accent)] hover:bg-white'
              : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" />
            <line x1="15.5" y1="15.5" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
