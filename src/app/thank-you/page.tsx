"use client";

import { products } from "@/data/products";
import { useCustomization } from "@/context/CustomizationContext";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { CheckCircle, Home, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  const { selection, productId } = useCustomization();
  const product = products.find((p) => p.id === productId);

  return (
    <div className="pt-40 pb-20">
      <div className="container-custom max-w-2xl px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 inline-flex items-center justify-center p-4 bg-green-50 text-green-600 rounded-full"
        >
          <CheckCircle size={48} />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-display font-medium mb-4">Request Received.</h1>
        <p className="text-muted text-lg mb-12">
          Thank you for choosing Pyntal Designs. We've received your inquiry and our team will get back to you with a detailed quote within 1 business day.
        </p>

        {product && (
          <div className="bg-secondary/30 rounded-3xl p-8 mb-12 border border-border text-left">
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted mb-6 flex items-center">
              <Mail size={16} className="mr-2" />
              Your Request Summary
            </h3>
            <div className="flex items-center space-x-6">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-medium text-lg">{product.name}</h4>
                <p className="text-sm text-foreground/70">{selection.woodType}, {selection.size}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:row items-center justify-center gap-4">
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full">
              <Home size={18} className="mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/category/sofas" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
