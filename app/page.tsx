import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { AboutSection, BlogSection, IngredientsSection, StorySection } from './components/EditorialSections';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <AboutSection />
      <StorySection />
      <IngredientsSection />
      <section id="experience" className="relative overflow-hidden bg-[var(--color-background)] py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,215,0,0.12)] via-transparent to-[rgba(103,58,183,0.12)]" />
        <div className="relative main-container">
          <div className="rounded-[40px] bg-white/80 p-12 shadow-[0_32px_120px_-64px_rgba(0,0,0,0.55)]">
            <p className="section-subheading">Immersive discovery</p>
            <h2 className="section-heading">Sensory ateliers around the globe</h2>
            <div className="grid gap-10 lg:grid-cols-3">
              {[
                {
                  city: 'Paris',
                  description:
                    'Candlelit salons in Saint-Germain host twilight pairings where bespoke accords are painted directly on the skin.'
                },
                {
                  city: 'Kyoto',
                  description:
                    'Washoku tea ceremonies meet olfactory artistry through incense-steeped rituals in our machiya atelier.'
                },
                {
                  city: 'New York',
                  description:
                    'A glass pavilion overlooking the skyline invites guests to sculpt fragrances with molecular perfumery.'
                }
              ].map((experience) => (
                <div key={experience.city} className="rounded-3xl bg-[rgba(249,249,249,0.9)] p-8 shadow-[0_24px_64px_-52px_rgba(0,0,0,0.55)]">
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">{experience.city}</p>
                  <p className="mt-4 font-display text-2xl text-[var(--color-text)]">H&H Maison</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text)]/70">{experience.description}</p>
                  <button className="accent-button mt-6 text-xs">Reserve a private ritual</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <BlogSection />
      <Footer />
    </main>
  );
}
