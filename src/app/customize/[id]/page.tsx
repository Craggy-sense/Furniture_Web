"use client";

import { useEffect, useState } from "react";
import { products, customizationOptions } from "@/data/products";
import { useCustomization } from "@/context/CustomizationContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CustomizePage({ params }: { params: any }) {
  const [id, setId] = useState<string | null>(null);
  const router = useRouter();
  const { selection, setSelection, setProductId } = useCustomization();

  useEffect(() => {
    params.then((p: any) => {
      setId(p.id);
      setProductId(p.id);
    });
  }, [params, setProductId]);

  const product = products.find((p) => p.id === id);

  if (!id || !product) return <div className="pt-32 text-center">Loading...</div>;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSelection((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/customize-summary");
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <Link href={`/product/${id}`} className="inline-flex items-center text-sm text-muted hover:text-foreground mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          <span>Back to Product</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Product Preview */}
          <div className="sticky top-32 h-fit">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary mb-6">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-display font-medium mb-2">{product.name}</h2>
            <p className="text-muted text-sm mb-6">Customizing your unique piece.</p>
            
            <div className="bg-secondary/50 p-6 rounded-2xl border border-border">
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted mb-4">Selection Preview</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Wood:</span>
                  <span className="font-medium">{selection.woodType || "Not selected"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Size:</span>
                  <span className="font-medium">{selection.size || "Not selected"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Legs:</span>
                  <span className="font-medium">{selection.legStyle || "Not selected"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Finish:</span>
                  <span className="font-medium">{selection.finish || "Not selected"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h1 className="text-4xl font-display font-medium tracking-tight mb-2">Customize</h1>
            <p className="text-muted mb-10">Select your preferred options below to create your perfect piece.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                {/* Wood Type */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Wood Type</label>
                  <select
                    name="woodType"
                    required
                    value={selection.woodType}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Wood Type</option>
                    {customizationOptions.woodTypes.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Size */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Size</label>
                  <select
                    name="size"
                    required
                    value={selection.size}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Size</option>
                    {customizationOptions.sizes.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Leg Style */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Leg Style</label>
                  <select
                    name="legStyle"
                    required
                    value={selection.legStyle}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Leg Style</option>
                    {customizationOptions.legStyles.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Finish */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Finish / Stain</label>
                  <select
                    name="finish"
                    required
                    value={selection.finish}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Finish</option>
                    {customizationOptions.finishes.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={selection.notes}
                    onChange={handleChange}
                    placeholder="Any specific requests or requirements..."
                    rows={4}
                    className="w-full bg-white border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full h-16 text-lg">
                <span>Continue to Summary</span>
                <ChevronRight size={20} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
