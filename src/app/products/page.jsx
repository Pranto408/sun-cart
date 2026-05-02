import ProductCard from '@/components/ProductCard';
import React from 'react';
export const metadata = {
  title: "SunCart | Products",
};

const AllProducts = async() => {
        const res = await fetch("https://sun-cart-two.vercel.app/products.json");
    const products = await res.json();
    return (
      <div className="w-11/12 mx-auto mb-10">
        <h2 className="text-4xl font-bold my-10 text-center">
          Popular Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default AllProducts;