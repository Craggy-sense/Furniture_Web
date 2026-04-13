import Image from "next/image";
import { ArrowRight } from "lucide-react";

const woods = [
  { name: "Kenyan Mahogany", image: "https://images.unsplash.com/photo-1610483178766-8092d66270cd?q=80&w=400&auto=format&fit=crop", desc: "A prestigious hardwood known for its strength and deep reddish-brown luster. Perfect for statement pieces." },
  { name: "Solid Mvule", image: "https://images.unsplash.com/photo-1541123437800-1bb13ec77960?q=80&w=400&auto=format&fit=crop", desc: "The king of East African timbers. Extremely durable and termite-resistant with a beautiful honey grain." },
  { name: "Blue Gum (Eucalyptus)", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&auto=format&fit=crop", desc: "Sustainable and fast-growing, offering a contemporary light aesthetic and excellent structural stability." },
  { name: "Kenyan Cypress", image: "https://images.unsplash.com/photo-1565191999001-551c187427bb?q=80&w=400&auto=format&fit=crop", desc: "A versatile, fragrant softwood from the highlands, ideal for rustic and minimal modern designs alike." }
];

const finishes = [
  { name: "Natural Matte", image: "https://images.unsplash.com/photo-1577145745729-097462799a50?q=80&w=400&auto=format&fit=crop" },
  { name: "Smoked Oak", image: "https://images.unsplash.com/photo-1595180425642-1e967a5b3a69?q=80&w=400&auto=format&fit=crop" },
  { name: "Whitewashed", image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=400&auto=format&fit=crop" },
  { name: "Dark Stain", image: "https://images.unsplash.com/photo-1589539148230-0a5b707cbd7d?q=80&w=400&auto=format&fit=crop" }
];

const steps = [
  { title: "Consultation", desc: "Discuss your vision, space, and requirements with our design experts." },
  { title: "Design & Quote", desc: "Review your personalized configuration and receive a detailed quote." },
  { title: "Production", desc: "Our skilled artisans handcraft your piece over 4-6 weeks." },
  { title: "Delivery", desc: "Expert white-glove delivery and assembly in your chosen space." }
];

export default function MaterialsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="section-padding py-20 bg-secondary/30 mb-20 text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">Quality First</h2>
          <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">Materials & Finishes</h1>
          <p className="text-muted text-lg font-light">
            We source only the finest sustainable hardwoods and non-toxic finishes to create furniture that is as healthy for your home as it is beautiful.
          </p>
        </div>
      </div>

      <div className="container-custom px-6 md:px-12 lg:px-24">
        {/* Woods */}
        <section className="mb-32">
          <div className="flex items-end justify-between mb-12 border-b border-border pb-8">
            <h2 className="text-3xl font-display font-medium">Sustainably Sourced Woods</h2>
            <p className="text-muted text-sm max-w-sm hidden md:block">All our timber is FSC-certified and seasoned for stability.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {woods.map((wood) => (
              <div key={wood.name} className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-secondary">
                  <Image src={wood.image} alt={wood.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-display font-medium text-xl mb-2">{wood.name}</h3>
                <p className="text-sm text-muted leading-relaxed">{wood.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Finishes */}
        <section className="mb-32">
          <div className="flex items-end justify-between mb-12 border-b border-border pb-8">
            <h2 className="text-3xl font-display font-medium">Finishes & Stains</h2>
            <p className="text-muted text-sm max-w-sm hidden md:block">Hand-rubbed natural oils and water-based lacquers.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {finishes.map((finish) => (
              <div key={finish.name} className="text-center group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-secondary">
                  <Image src={finish.image} alt={finish.name} fill className="object-cover" />
                </div>
                <h3 className="font-medium text-sm text-foreground/80">{finish.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="bg-primary text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4 text-accent/80">How it Works</h2>
            <h3 className="text-4xl font-display font-medium tracking-tight">Our Artisan Process</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-accent font-display text-xl">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-display font-medium mb-4">{step.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-white/10" size={40} />}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
