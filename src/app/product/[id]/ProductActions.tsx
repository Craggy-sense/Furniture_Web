"use client";

import { Button } from "@/components/ui/Button";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { useCustomization } from "@/context/CustomizationContext";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function ProductActions({ product }: { product: Product }) {
  const router = useRouter();
  const { setProductId, resetSelection } = useCustomization();

  const handleCustomize = () => {
    resetSelection();
    setProductId(product.id);
    router.push(`/customize/${product.id}`);
  };

  const handleQuote = () => {
    setProductId(product.id);
    router.push("/quote");
  };

  return (
    <div className="flex flex-col sm:row items-center gap-4">
      <Button 
        variant="primary" 
        size="lg" 
        className="w-full sm:flex-1 h-16 text-lg" 
        onClick={handleCustomize}
      >
        <span>Customize</span>
        <ArrowRight size={20} className="ml-2" />
      </Button>
      <Button 
        variant="outline" 
        size="lg" 
        className="w-full sm:flex-1 h-16 text-lg"
        onClick={handleQuote}
      >
        <MessageSquare size={20} className="mr-2" />
        <span>Request Quote</span>
      </Button>
    </div>
  );
}
