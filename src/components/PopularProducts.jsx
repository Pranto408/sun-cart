import ProductCard from "./homepage/ProductCard";

const PopularProducts = async () => {
    const res = await fetch("https://sun-cart-two.vercel.app/products.json");
    const products = await res.json();
    const topProducts = products.slice(0, 3);

    return (
      <div className="w-11/12 mx-auto mb-10">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Popular Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default PopularProducts;