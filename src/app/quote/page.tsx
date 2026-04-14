"use client";

import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { useCustomization } from "@/context/CustomizationContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Send, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function QuotePage() {
  const router = useRouter();
  const { selection, productId } = useCustomization();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const product = products.find((p) => p.id === productId);

  // If no product, redirects are handled in useEffect or just render simple state
  if (!product) {
    const phoneNumber = "254117540543";
    const generalMessage = "Hello Pyntal Designs! I'm interested in the furniture collections but I'm not sure which one to pick. Could I get some help?";
    const generalWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(generalMessage)}`;

    return (
      <div className="pt-40 pb-20 text-center container-custom max-w-2xl">
        <h2 className="text-3xl font-display font-medium mb-6">Let's Find Your Piece</h2>
        <p className="text-muted text-lg mb-10 font-light leading-relaxed">
          It looks like you haven't selected a specific product yet. No worries—our artisans are here to help you design the perfect piece for your space.
        </p>
        <div className="flex flex-col sm:row items-center justify-center gap-4">
          <Link href="/">
            <Button variant="outline" size="lg">Browse Collection</Button>
          </Link>
          <a href={generalWhatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg">
              <MessageSquare size={20} className="mr-2" />
              <span>Chat with an Expert</span>
            </Button>
          </a>
        </div>
      </div>
    );
  }

  const summaryString = `${selection.woodType}, ${selection.size}, ${selection.legStyle} legs, ${selection.finish} finish.`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "254117540543";
    const waMessage = `Hello Pyntal Designs!
I'm interested in the *${product.name}* with the following specs:

- *Wood:* ${selection.woodType}
- *Size:* ${selection.size}
- *Legs:* ${selection.legStyle}
- *Finish:* ${selection.finish}

*My Details:*
- *Name:* ${formData.name}
- *Email:* ${formData.email}
${formData.message ? `\n*Special Request:* ${formData.message}` : ""}

Looking forward to your quote!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;
    
    // Redirect to thank you page, but also open WhatsApp in a new tab
    // Actually, user wants all orders directed to WhatsApp, so let's redirect directly
    window.open(whatsappUrl, "_blank");
    router.push("/thank-you");
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom max-w-4xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-3">
            <Link href="/customize-summary" className="inline-flex items-center text-sm text-muted hover:text-foreground mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              <span>Back to Summary</span>
            </Link>
            
            <h1 className="text-4xl font-display font-medium tracking-tight mb-4">Request a Quote</h1>
            <p className="text-muted text-lg mb-10 font-light">
              Fill out your details and our team will prepare a personalized quote for your handcrafted piece.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div className="space-y-2 opacity-60">
                <label className="text-sm font-medium">Requested Product</label>
                <input
                  type="text"
                  readOnly
                  value={product.name}
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-4 focus:outline-none cursor-not-allowed"
                />
              </div>

              <div className="space-y-2 opacity-60">
                <label className="text-sm font-medium">Customization Summary</label>
                <textarea
                  readOnly
                  rows={2}
                  value={summaryString}
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-4 focus:outline-none cursor-not-allowed resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message / Special Requests (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your space or any specific delivery requirements..."
                  rows={4}
                  className="w-full bg-white border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full h-16 text-lg">
                <Send size={20} className="mr-2" />
                <span>Submit Request</span>
              </Button>
            </form>
          </div>

          {/* Right Column: Trust/Info */}
          <div className="lg:col-span-2 space-y-12 pt-20">
            <div className="bg-secondary/30 p-8 rounded-3xl space-y-6 border border-border/50">
              <h3 className="font-display font-medium text-xl">What Happens Next?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-medium">1</div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Expert Review</h4>
                    <p className="text-xs text-muted">A designer reviews your specs and checks material availability.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-medium">2</div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Detailed Quote</h4>
                    <p className="text-xs text-muted">You'll receive a full breakdown including shipping and lead times within 24 hours.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-medium">3</div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Production Begins</h4>
                    <p className="text-xs text-muted">Once approved, our artisans begin crafting your unique furniture piece.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="px-8 space-y-4">
              <p className="text-sm text-foreground/70 italic">
                "Our goal is to create pieces that fit perfectly in your home and life. No request is too small."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="Founder" width={40} height={40} />
                </div>
                <div>
                  <p className="text-xs font-medium">Thomas Arlow</p>
                  <p className="text-[10px] text-muted uppercase tracking-widest">Master Artisan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
