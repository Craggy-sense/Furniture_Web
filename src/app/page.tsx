"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/data/products";
import CategoryCard from "@/components/ui/CategoryCard";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
          alt="Modern living room"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-medium text-white mb-6 tracking-tight"
          >
            Nairobi's Finest.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
          >
            Handcrafted furniture by Pyntal Designs. We blend contemporary design with Kenya's rich woodworking heritage.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" className="bg-white text-black hover:bg-white/90 w-full sm:w-auto">
              Shop Collections
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Our Process
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* Popular Designs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">Popular Designs</h2>
              <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight">
                Shop by Category
              </h3>
            </div>
            <p className="text-muted max-w-md">
              From the heart of the home to the bedroom, discover our most loved collections designed for daily life in Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1200&auto=format&fit=crop"
              alt="Woodworking craftsmanship"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">Our Heritage</h2>
            <h3 className="text-4xl font-display font-medium tracking-tight mb-8">
              Meticulously Crafted <br />in Nairobi.
            </h3>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Every piece of Pyntal Designs furniture is born from a passion for local materials and functional design. 
                Our Nairobi workshop uses traditional joinery techniques combined with modern precision to ensure your furniture 
                lasts for generations.
              </p>
              <p>
                We believe in sustainability through longevity. By selecting only the finest local hardwoods like Mvule and Mahogany, we create pieces that age beautifully and minimize our environmental footprint.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/materials">
                <Button variant="outline" size="md">Explore Materials</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
