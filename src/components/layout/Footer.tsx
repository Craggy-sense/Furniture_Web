import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary pt-20 pb-10 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-border pb-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-display font-medium tracking-tight mb-6 block">
            PYNTAL DESIGNS
          </Link>
          <p className="text-muted text-sm max-w-xs">
            Handcrafted furniture for the modern home. Dedicated to Nairobi's finest craftsmanship.
          </p>
        </div>

        <div>
          <h4 className="font-display font-medium mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            <li><Link href="/category/dining-tables" className="hover:text-foreground transition-colors">Dining Tables</Link></li>
            <li><Link href="/category/sofas" className="hover:text-foreground transition-colors">Sofas</Link></li>
            <li><Link href="/category/beds" className="hover:text-foreground transition-colors">Beds</Link></li>
            <li><Link href="/materials" className="hover:text-foreground transition-colors">Materials</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-medium mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            <li><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-foreground transition-colors">Shipping</Link></li>
            <li><Link href="/returns" className="hover:text-foreground transition-colors">Returns</Link></li>
            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-medium mb-6">Newsletter</h4>
          <p className="text-sm text-foreground/70 mb-4">Join our list for design inspiration and new arrivals.</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white border border-border px-4 py-2 rounded-full text-sm w-full focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:row items-center justify-between text-xs text-muted">
        <p>© 2026 Pyntal Designs. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
