"use client";

import { products } from "@/data/products";
import { useCustomization } from "@/context/CustomizationContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SummaryPage() {
  const router = useRouter();
  const { selection, productId } = useCustomization();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="pt-40 text-center container-custom">
        <h2 className="text-2xl font-display mb-4">No product selected</h2>
        <Link href="/">
          <Button variant="primary">Browse Collection</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom max-w-3xl px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-accent/10 text-accent rounded-full mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
            Review Your Configuration
          </h1>
          <p className="text-muted text-lg">
            Everything looks great. One step left to receive your custom quote.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-border overflow-hidden premium-shadow">
          <div className="p-8 border-b border-border flex items-center space-x-6 bg-secondary/30">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-display font-medium">{product.name}</h2>
              <p className="text-sm text-accent">Pyntal Designs Original</p>
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted mb-6">Selected Specifications</h3>
            
            <div className="space-y-6">
              {[
                { label: "Wood Type", value: selection.woodType },
                { label: "Size / Dimensions", value: selection.size },
                { label: "Leg Style", value: selection.legStyle },
                { label: "Finish / Stain", value: selection.finish },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted">{item.label}</span>
                  <span className="font-medium text-lg">{item.value}</span>
                </div>
              ))}

              {selection.notes && (
                <div className="pt-4">
                  <span className="text-sm text-muted block mb-2 uppercase tracking-widest">Additional Notes</span>
                  <p className="text-foreground/80 bg-secondary/50 p-4 rounded-xl italic">
                    "{selection.notes}"
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="p-8 bg-secondary/30 flex flex-col sm:row items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => router.back()}
              className="w-full sm:w-auto"
            >
              <ArrowLeft size={18} className="mr-2" />
              <span>Modify</span>
            </Button>
            <Button 
              variant="primary" 
              className="w-full sm:flex-1 h-14"
              onClick={() => router.push("/quote")}
            >
              Request a Quote
            </Button>
          </div>
        </div>
        
        <p className="mt-8 text-center text-sm text-muted">
          Final price will be determined based on your selected customizations and shipping location.
        </p>
      </div>
    </div>
  );
}
