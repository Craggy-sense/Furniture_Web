import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import ProductActions from "./ProductActions";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
                  <Image src={img} alt={`${product.name} alternate`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
              {product.name}
            </h1>
            <p className="text-2xl text-accent font-medium mb-8">
              From KSh {product.price.toLocaleString()}
            </p>
            
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-muted mb-4">Description</h3>
                <p className="text-foreground/80 leading-relaxed text-lg font-light">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-muted mb-4">Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm text-foreground/80">
                      <span className="p-1 bg-secondary rounded-full text-accent">
                        <Check size={14} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-muted mb-4">Dimensions</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {product.dimensions.map((dim, i) => (
                    <li key={i}>{dim}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto">
              <ProductActions product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
