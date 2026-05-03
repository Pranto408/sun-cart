import ProductCard from "../ProductCard";

const PopularProducts = async () => {
    const res = await fetch("https://sun-cart-two.vercel.app/products.json");
    const products = await res.json();
    const topProducts = products.slice(0, 3);

    return (
      <div className="w-11/12 mx-auto mb-10">
        <p className="text-blue-500 text-center font-semibold text-sm uppercase tracking-widest">
          Our Products
        </p>
        <h2 className="text-4xl font-bold mb-3 text-center">
          Popular Products
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm mb-7">
          Discover our most popular products loved by customers for quality,
          style, and everyday use.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default PopularProducts;

// import { readFile } from "fs/promises";
// import path from "path";
// import ProductCard from "../ProductCard";

// const PopularProducts = async () => {
//   const filePath = path.join(process.cwd(), "public", "products.json");
//   const fileContents = await readFile(filePath, "utf-8");
//   const products = JSON.parse(fileContents);
//   const topProducts = products.slice(0, 3);

//   return (
//     <div className="w-11/12 mx-auto mb-10">
//       <p className="text-blue-500 text-center font-semibold text-sm uppercase tracking-widest">
//         Our Products
//       </p>
//       <h2 className="text-4xl font-bold mb-3 text-center">Popular Products</h2>
//       <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm mb-7">
//         Discover our most popular products loved by customers for quality,
//         style, and everyday use.
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {topProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;