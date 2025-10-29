'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  family: 'Floral' | 'Woody' | 'Oriental' | 'Fresh';
  intensity: 'Light' | 'Moderate' | 'Bold';
  lifestyleImage: string;
  notes: string[];
  image: string;
  frames360: string[];
};

const products: Product[] = [
  {
    id: 'nocturne-amethyst',
    name: 'Nocturne Amethyst',
    description: 'Sumptuous velvet iris enveloped in smoked cedarwood and ambergris.',
    price: 320,
    family: 'Oriental',
    intensity: 'Bold',
    lifestyleImage: 'https://images.unsplash.com/photo-1523419409543-0c1df022bdd7?auto=format&fit=crop&w=1400&q=80',
    notes: ['Velvet Iris', 'Blackcurrant Bud', 'Smoked Cedarwood'],
    image: 'https://images.unsplash.com/photo-1618889485999-5771675f1b33?auto=format&fit=crop&w=1200&q=80',
    frames360: [
      'https://images.unsplash.com/photo-1525286116112-b59af11adad1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512138664757-360e0aad5132?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'atelier-rose',
    name: 'Atelier Rose Blanche',
    description: 'Morning dew florals layered with sheer musks and damask rose absolute.',
    price: 240,
    family: 'Floral',
    intensity: 'Moderate',
    lifestyleImage: 'https://images.unsplash.com/photo-1505156888004-25bd10c81671?auto=format&fit=crop&w=1400&q=80',
    notes: ['Damask Rose', 'Pink Pepper', 'Sheer Musks'],
    image: 'https://images.unsplash.com/photo-1445265005361-90412189e272?auto=format&fit=crop&w=1200&q=80',
    frames360: [
      'https://images.unsplash.com/photo-1459664018906-085c36f472af?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1459257868276-5e65389e2722?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'citrine-lumiere',
    name: 'Citrine Lumière',
    description: 'A cascade of neroli and yuzu brightened with crystalized ginger.',
    price: 180,
    family: 'Fresh',
    intensity: 'Light',
    lifestyleImage: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1400&q=80',
    notes: ['Neroli Blossom', 'Yuzu Zest', 'Crystal Ginger'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    frames360: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1587017539503-3f9cc8b7efe1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'bois-de-minuit',
    name: 'Bois de Minuit',
    description: 'Charred guiacwood illuminated with saffron and oud resin.',
    price: 295,
    family: 'Woody',
    intensity: 'Bold',
    lifestyleImage: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1400&q=80',
    notes: ['Guiacwood Smoke', 'Oud Resin', 'Saffron Threads'],
    image: 'https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=1200&q=80',
    frames360: [
      'https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505576391880-aaa0e0ef0f0b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1494173853739-c21f58b16055?auto=format&fit=crop&w=900&q=80'
    ]
  }
];

const families = ['Floral', 'Woody', 'Oriental', 'Fresh'] as const;
const intensities = ['Light', 'Moderate', 'Bold'] as const;

type FilterState = {
  families: string[];
  intensities: string[];
  price: number;
  search: string;
};

function FilterCheckbox({
  label,
  checked,
  onChange
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-[var(--color-text)] shadow-[0_12px_32px_-20px_rgba(0,0,0,0.4)] transition hover:bg-white/90">
      <span>{label}</span>
      <input
        type="checkbox"
        className="accent-[var(--color-accent)]"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
    </label>
  );
}

function ProductCard({ product, onOpen360 }: { product: Product; onOpen360: () => void }) {
  return (
    <article className="group relative overflow-hidden rounded-[32px] bg-white shadow-[0_32px_64px_-36px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:shadow-[0_40px_80px_-48px_rgba(0,0,0,0.55)]">
      <div className="relative h-96 overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.name} bottle`}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        <div className="absolute left-6 bottom-6 flex flex-col gap-2 text-white">
          <span className="tag bg-white/20 text-xs text-white">{product.family}</span>
          <h3 className="font-display text-3xl">{product.name}</h3>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-8">
        <p className="text-sm leading-relaxed text-[var(--color-text)]/70">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          {product.notes.map((note) => (
            <span key={note} className="tag bg-[rgba(103,58,183,0.08)] text-[var(--color-accent)]">
              {note}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-[rgba(51,51,51,0.08)] pt-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-text)]/45">Starting from</p>
            <p className="mt-1 text-2xl font-semibold text-[var(--color-text)]">${product.price}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onOpen360}
              className="rounded-full border border-[rgba(103,58,183,0.3)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] transition hover:bg-[rgba(103,58,183,0.08)]"
            >
              View 360°
            </button>
            <button className="accent-button text-xs">Add to Ritual</button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-5 top-5 rounded-[28px] border border-white/40 bg-white/10 p-4 text-white transition opacity-0 group-hover:opacity-100">
        <p className="text-xs uppercase tracking-[0.35em] text-white/70">Intensity</p>
        <p className="mt-1 font-semibold tracking-[0.4em] uppercase">{product.intensity}</p>
      </div>
    </article>
  );
}

export function ProductShowcase() {
  const [filters, setFilters] = useState<FilterState>({
    families: [],
    intensities: [],
    price: 350,
    search: ''
  });
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeFrame, setActiveFrame] = useState(0);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesFamily = filters.families.length ? filters.families.includes(product.family) : true;
      const matchesIntensity = filters.intensities.length ? filters.intensities.includes(product.intensity) : true;
      const matchesPrice = product.price <= filters.price;
      const matchesSearch = filters.search
        ? `${product.name} ${product.description} ${product.notes.join(' ')}`
            .toLowerCase()
            .includes(filters.search.toLowerCase())
        : true;
      return matchesFamily && matchesIntensity && matchesPrice && matchesSearch;
    });
  }, [filters]);

  return (
    <section id="shop" className="relative bg-[var(--color-background)] py-32">
      <div className="absolute -top-48 right-[-10%] h-96 w-96 rounded-full bg-[rgba(103,58,183,0.1)] blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-15%] h-80 w-80 rounded-full bg-[rgba(255,215,0,0.12)] blur-3xl" />

      <div className="relative main-container grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="blurred-panel space-y-8 self-start">
          <div>
            <p className="section-subheading">Curate your ritual</p>
            <h2 className="section-heading">Faceted Discovery</h2>
            <p className="text-sm leading-relaxed text-[var(--color-text)]/70">
              Refine the collection by olfactive family, intensity, and investment to reveal scents tailored to your sensorial mood.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-text)]/50">
              Fragrance Family
            </p>
            <div className="grid gap-2">
              {families.map((family) => (
                <FilterCheckbox
                  key={family}
                  label={family}
                  checked={filters.families.includes(family)}
                  onChange={(checked) =>
                    setFilters((prev) => ({
                      ...prev,
                      families: checked
                        ? [...prev.families, family]
                        : prev.families.filter((value) => value !== family)
                    }))
                  }
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-text)]/50">Intensity</p>
            <div className="grid grid-cols-3 gap-2">
              {intensities.map((intensity) => (
                <FilterCheckbox
                  key={intensity}
                  label={intensity}
                  checked={filters.intensities.includes(intensity)}
                  onChange={(checked) =>
                    setFilters((prev) => ({
                      ...prev,
                      intensities: checked
                        ? [...prev.intensities, intensity]
                        : prev.intensities.filter((value) => value !== intensity)
                    }))
                  }
                />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-text)]/50">
              <span>Investment</span>
              <span>${filters.price}</span>
            </div>
            <input
              type="range"
              min={150}
              max={350}
              value={filters.price}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  price: Number(event.target.value)
                }))
              }
              className="w-full accent-[var(--color-accent)]"
            />
            <p className="text-xs text-[var(--color-text)]/55">
              Slide to reveal fragrances within your preferred investment, curated from $150 to $350.
            </p>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-text)]/50">
              Search Notes
            </label>
            <div className="relative">
              <input
                type="search"
                placeholder="Iris, vanilla, bergamot..."
                value={filters.search}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    search: event.target.value
                  }))
                }
                className="w-full rounded-full border border-[rgba(51,51,51,0.08)] bg-white/80 px-5 py-3 text-sm transition focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-accent)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" />
                <line x1="15.5" y1="15.5" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </aside>

        <div className="space-y-12">
          <div className="rounded-[36px] bg-gradient-to-r from-[rgba(255,255,255,0.85)] to-[rgba(249,249,249,0.55)] p-12 shadow-[0_40px_120px_-56px_rgba(0,0,0,0.55)]">
            <p className="section-subheading">Signature Selections</p>
            <h2 className="section-heading">Curated for the connoisseur</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-[var(--color-text)]/70">
              Each composition is hand-poured in Grasse and macerated for 45 days to reveal its full symphonic resonance. Hover to
              explore intricate detailing and unveil each bottle’s 360° craftsmanship.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpen360={() => {
                  setActiveProduct(product);
                  setActiveFrame(0);
                }}
              />
            ))}
          </div>

          <div className="grid gap-6 rounded-[36px] bg-white/70 p-10 shadow-[0_36px_120px_-64px_rgba(0,0,0,0.5)] lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-text)]/50">Lifestyle Imagery</p>
              <h3 className="font-display text-3xl text-[var(--color-text)]">Fragrance moments captured in light</h3>
              <p className="text-sm leading-relaxed text-[var(--color-text)]/70">
                Each bottle is photographed within its natural habitat to reveal the olfactive story. From sun-soaked ateliers in
                Provence to twilight rooftops in New York, the imagery captures the aura you carry when adorned with our scents.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {(filteredProducts.length ? filteredProducts : products).slice(0, 3).map((product) => (
                <div
                  key={`${product.id}-lifestyle`}
                  className="relative h-48 overflow-hidden rounded-[28px] shadow-[0_24px_80px_-58px_rgba(0,0,0,0.6)]"
                >
                  <Image src={product.lifestyleImage} alt={`${product.name} lifestyle scene`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 max-w-[90%] text-white">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/70">{product.family}</p>
                    <p className="font-display text-xl">{product.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredProducts.length === 0 && (
            <div className="rounded-[32px] border border-dashed border-[rgba(51,51,51,0.15)] bg-white/60 p-12 text-center">
              <p className="font-display text-2xl text-[var(--color-text)]">No fragrances match your ritual.</p>
              <p className="mt-2 text-sm text-[var(--color-text)]/60">
                Adjust the filters to rediscover our atelier’s most beloved creations.
              </p>
            </div>
          )}
        </div>
      </div>

      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="relative max-w-4xl overflow-hidden rounded-[36px] bg-white shadow-[0_60px_140px_-60px_rgba(0,0,0,0.6)]">
            <button
              className="absolute right-6 top-6 z-10 h-12 w-12 rounded-full border border-[rgba(51,51,51,0.1)] bg-white/90 text-[var(--color-text)]/70 transition hover:text-[var(--color-text)]"
              onClick={() => setActiveProduct(null)}
              aria-label="Close 360° viewer"
            >
              ×
            </button>
            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative h-[420px] border-r border-[rgba(51,51,51,0.06)] bg-[var(--color-background)]">
                <Image
                  key={activeProduct.frames360[activeFrame]}
                  src={activeProduct.frames360[activeFrame]}
                  alt={`${activeProduct.name} ${activeFrame * 90} degree view`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6 p-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">360° experience</p>
                  <h3 className="mt-3 font-display text-3xl text-[var(--color-text)]">{activeProduct.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]/70">
                    Drag the slider to explore the artisanal bottle from every perspective. Precision cut glass and hand-applied
                    gilding shimmer under ambient light.
                  </p>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-text)]/50">
                    Rotate
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={activeProduct.frames360.length - 1}
                    value={activeFrame}
                    onChange={(event) => setActiveFrame(Number(event.target.value))}
                    className="w-full accent-[var(--color-accent)]"
                    aria-valuetext={`View ${activeFrame + 1} of ${activeProduct.frames360.length}`}
                  />
                  <div className="flex justify-between text-xs text-[var(--color-text)]/60">
                    <span>Front</span>
                    <span>Profile</span>
                    <span>Reverse</span>
                  </div>
                </div>
                <button className="accent-button self-start text-xs">Add to Bespoke Consultation</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
