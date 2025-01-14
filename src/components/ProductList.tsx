"use client";
import React from "react";
import { useCart } from "@/hooks/use-cart";

import { Button } from "@/components/ui/button";
import { products } from "@/constants/testData";
import { toast } from "sonner";

export const ProductList = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      item: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    });

    toast.success(`${product.name} added to cart`);
  };

  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold p-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-medium">${product.price.toFixed(2)}</span>
              <Button onClick={() => handleAddToCart(product)} size="sm">
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
