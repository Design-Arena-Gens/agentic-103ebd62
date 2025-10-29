export function Footer() {
  return (
    <footer className="bg-[#111111] py-16 text-white">
      <div className="main-container grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl tracking-[0.3em]">H&H</p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Bespoke fragrance houses in Paris, New York, and Kyoto. Schedule your atelier consultation to craft a scent that mirrors
            your soul.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Visit</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>28 Rue de l’Odéon, Paris</li>
            <li>347 Madison Avenue, New York</li>
            <li>2-16-6 Ginza, Tokyo</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Connect</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Concierge: atelier@hhfragrances.com</li>
            <li>Private events: salons@hhfragrances.com</li>
            <li>Press: maison@hhfragrances.com</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Journal</p>
          <p className="mt-4 text-sm text-white/70">Receive seasonal releases and atelier invitations.</p>
          <form className="mt-6 flex flex-col gap-3 text-sm">
            <input
              type="email"
              placeholder="Email address"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/40 focus:border-[var(--color-accent-alt)] focus:outline-none"
              required
            />
            <button type="submit" className="accent-button self-start text-xs">
              Join the Maison
            </button>
          </form>
        </div>
      </div>
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[0.35em] text-white/30">
        © {new Date().getFullYear()} H&H Fragrances. Crafted with reverence for olfactory art.
      </div>
    </footer>
  );
}
