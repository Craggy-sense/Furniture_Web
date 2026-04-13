import { categories, products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.categoryId === category.id);

  return (
    <div className="pt-32 pb-20">
      <div className="section-padding py-12 bg-secondary/30 mb-20">
        <div className="container-custom">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">
            Collection
          </h2>
          <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-6">
            {category.name}
          </h1>
          <p className="text-muted max-w-2xl text-lg font-light">
            {category.description}
          </p>
        </div>
      </div>

      <div className="container-custom px-6 md:px-12 lg:px-24">
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {categoryProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
