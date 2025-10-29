import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(103,58,183,0.06)] via-transparent to-[rgba(255,215,0,0.08)]" />
      <div className="relative main-container grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="section-subheading">Heritage of refinement</p>
          <h2 className="section-heading">Artistry from the Riviera to your vanity</h2>
          <p className="text-lg leading-loose text-[var(--color-text)]/75">
            For seven decades, H&H Fragrances has collaborated with botanical artisans along the Côte d’Azur. Our perfumers source rare
            absolutes at dawn, when petals awaken, working in small batches to preserve the bold identity of each extract.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Maison Atelier',
                description: 'Sustainable distillation in copper alembics housed within our 18th century atelier.'
              },
              {
                title: 'Limited Editions',
                description: 'Only 800 bottles per release, individually numbered and hand-finished by master artisans.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/70 p-7 shadow-[0_24px_60px_-44px_rgba(0,0,0,0.65)]">
                <h3 className="font-display text-xl text-[var(--color-text)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text)]/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
            alt="Perfume atelier overlooking the sea"
            fill
            className="rounded-[40px] object-cover shadow-[0_32px_80px_-48px_rgba(0,0,0,0.5)]"
          />
          <div className="absolute -bottom-8 -left-8 hidden w-64 rounded-[28px] bg-white/85 p-6 text-sm text-[var(--color-text)]/70 shadow-[0_32px_90px_-52px_rgba(0,0,0,0.55)] lg:block">
            <p className="uppercase tracking-[0.35em] text-[var(--color-accent)]">Botanical charter</p>
            <p className="mt-3">
              Certified ethically harvested botanicals from Madagascar, Morocco, and the Grasse valley.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StorySection() {
  return (
    <section id="story" className="relative bg-white py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgba(0,0,0,0.05)] to-transparent" />
      <div className="relative main-container grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card relative overflow-hidden">
          <span className="tag mb-6">Maison Legacy</span>
          <h2 className="section-heading">Our story is written in scent</h2>
          <p className="text-sm leading-loose text-[var(--color-text)]/70">
            In 1954, Élise Haviland blended jasmine from her family garden with amber resin collected during voyages along the Levantine
            coast. Guests at her soirées were entranced, and Maison H&H was born. Today, her grandchildren continue the tradition,
            composing each piece as an olfactory narrative layered with familial memories.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-text)]/50">Legacy Editions</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]/70">
                Archive releases are reimagined annually, honoring the original formula while sustaining modern sensibilities.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-text)]/50">Patina Bottles</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]/70">
                Our bottles are mouth-blown crystal, gently smoked to evoke the amber-lit salons of mid-century Paris.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="relative h-80 overflow-hidden rounded-[40px]">
            <Image
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
              alt="Vintage perfume bottles"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 overflow-hidden rounded-[40px]">
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80"
              alt="Lifestyle imagery of H&H fragrances"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-xs rounded-3xl bg-white/80 p-6 text-sm text-[var(--color-text)]/70">
              <p className="uppercase tracking-[0.35em] text-[var(--color-accent)]">Salon Privé</p>
              <p className="mt-3">Hosted fragrance encounters in Paris, New York, and Kyoto invite you to design bespoke accords.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IngredientsSection() {
  const ingredients = [
    {
      name: 'Velvet Iris',
      origin: 'Florence, Italy',
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
      description: 'A luminous, buttery iris concrete aged for 24 months to unlock its powdery melancholy.'
    },
    {
      name: 'Oud Resin',
      origin: 'Assam, India',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      description: 'Sustainably cultivated agarwood distilled in micro batches for smoky sophistication.'
    },
    {
      name: 'Yuzu Zest',
      origin: 'Shikoku, Japan',
      image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80',
      description: 'Sun-charged citrus pressed at dawn for sparkling effervescence and clarity.'
    }
  ];

  return (
    <section id="ingredients" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(103,58,183,0.05)] via-transparent to-[rgba(255,215,0,0.08)]" />
      <div className="relative main-container">
        <div className="mb-16 text-center">
          <p className="section-subheading">Rare botanicals</p>
          <h2 className="section-heading">Our ingredients whisper luxury</h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[var(--color-text)]/70">
            Ethical sourcing is our cornerstone. Each ingredient is traceable to its terroir, ensuring communities thrive and the
            essence remains profoundly pure.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {ingredients.map((ingredient) => (
            <div key={ingredient.name} className="relative overflow-hidden rounded-[36px] bg-white shadow-[0_32px_80px_-48px_rgba(0,0,0,0.5)]">
              <div className="relative h-72">
                <Image src={ingredient.image} alt={ingredient.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                <div className="absolute left-6 bottom-6 text-white">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/70">{ingredient.origin}</p>
                  <h3 className="font-display text-2xl">{ingredient.name}</h3>
                </div>
              </div>
              <div className="space-y-4 p-8 text-sm leading-relaxed text-[var(--color-text)]/70">
                <p>{ingredient.description}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">
                  Harvested with regenerative agriculture principles
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogSection() {
  const entries = [
    {
      title: 'Layering rituals for evening allure',
      excerpt:
        'Discover the maison’s approach to layering eau de parfum with perfumed body silk to extend the blooming hours.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80',
      readTime: '6 min read'
    },
    {
      title: 'Inside the atelier: Mastering maceration',
      excerpt: 'Step into our lab and experience how temperature, time, and texture refine every H&H composition.',
      image: 'https://images.unsplash.com/photo-1508726295874-0ef3c08ba5a0?auto=format&fit=crop&w=1000&q=80',
      readTime: '8 min read'
    },
    {
      title: 'Sourcing rare botanicals with integrity',
      excerpt: 'Our sustainable partnerships ensure pristine ingredients while preserving global ecosystems.',
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1000&q=80',
      readTime: '4 min read'
    }
  ];

  return (
    <section id="blog" className="relative bg-white py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(51,51,51,0.05)]" />
      <div className="relative main-container">
        <div className="mb-16 text-center">
          <p className="section-subheading">Maison Journal</p>
          <h2 className="section-heading">Stories from behind the fragrance</h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[var(--color-text)]/70">
            Explore craftsmanship insights, perfumer interviews, and sensorial rituals curated by the H&H creative collective.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {entries.map((entry) => (
            <article
              key={entry.title}
              className="group overflow-hidden rounded-[32px] bg-white shadow-[0_32px_80px_-48px_rgba(0,0,0,0.55)] transition hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <Image src={entry.image} alt={entry.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-full bg-white/85 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-text)]">
                  {entry.readTime}
                </div>
              </div>
              <div className="space-y-4 p-8">
                <h3 className="font-display text-2xl text-[var(--color-text)]">{entry.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text)]/70">{entry.excerpt}</p>
                <button className="accent-button text-xs">Read Story</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
