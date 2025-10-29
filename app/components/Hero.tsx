'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const heroImage =
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=2100&q=80';

export function Hero() {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setParallaxOffset(scrollPos * 0.35);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" id="top">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Signature H&H fragrance bottle with luxurious lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ transform: `translateY(${parallaxOffset * 0.35}px) scale(1.05)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/65" />
      </div>

      <div className="relative main-container grid grid-cols-1 gap-10 py-36 text-white lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="tag mb-6 uppercase tracking-[0.6em] text-xs text-white/80 backdrop-blur-sm">
            Atelier Collection 2024
          </p>
          <h1 className="font-display text-[clamp(3rem,6vw,4.75rem)] leading-[1.05] text-white drop-shadow-xl">
            Evoke the <span className="accent-underline">essence</span> of timeless allure.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85">
            Introducing <span className="font-semibold">Nocturne Amethyst</span>, the signature fragrance of H&H. Crafted with
            Madagascan vanilla, velvet iris, and whispering cedarwood for an unforgettable silage that lingers like a memory.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <button className="accent-button">
              Explore the Collection
            </button>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full border border-white/40">
                <Image
                  src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=500&q=80"
                  alt="Perfumer profile"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.25em] uppercase text-white">Maison Héritage</p>
                <p className="text-sm text-white/70">Master perfumers since 1954</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card self-center text-left text-[var(--color-text)]">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-accent)]">Olfactory Pyramid</p>
          <h2 className="mt-3 font-display text-3xl text-[var(--color-text)]">Nocturne Amethyst</h2>
          <div className="mt-6 grid gap-4 text-sm text-[var(--color-text)]/80">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-[var(--color-text)]">Top Notes</p>
              <p className="mt-1 leading-relaxed">Blackcurrant bud, Sicilian bergamot, cold-pressed grapefruit zest</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-[var(--color-text)]">Heart Notes</p>
              <p className="mt-1 leading-relaxed">Velvet iris accord, midnight jasmine, rose de mai absolute</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-[var(--color-text)]">Base Notes</p>
              <p className="mt-1 leading-relaxed">Smoked cedarwood, Madagascan vanilla bean, ambergris infusion</p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-[rgba(51,51,51,0.08)] pt-5">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-text)]/60">Eau de Parfum</p>
              <p className="mt-1 text-2xl font-semibold text-[var(--color-text)]">$320</p>
            </div>
            <button className="accent-button text-xs">
              Reserve Now
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[var(--color-background)]" />
    </section>
  );
}
