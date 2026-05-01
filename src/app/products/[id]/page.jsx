import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ShoppingCart, Tag, Layers, PackageCheck } from "lucide-react";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://sun-cart-two.vercel.app/products.json");
  const products = await res.json();
  const p = products.find((p) => p.id == id);

  if (!p)
    return (
      <div className="text-center py-20 text-gray-500">Product not found.</div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="w-9/12 mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative w-full aspect-square">
            <Image
              src={p.image}
              alt={p.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Info */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              {/* Category & Brand */}
              {/* <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {p.category}
                </span>
                <span className="bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1 rounded-full">
                  {p.brand}
                </span>
              </div> */}

              {/* Name */}
              <h1 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
                {p.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                <FaStar className="text-yellow-400" />
                <span className="text-sm font-medium text-gray-600">
                  {p.rating} / 5
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {p.description}
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-3 mb-6 gap-y-10 mt-5">
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3">
                  <Tag className="text-blue-500 w-4 h-4" />
                  <div>
                    <p className="text-xs text-gray-400">Category</p>
                    <p className="text-sm font-semibold text-gray-700">
                      {p.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3">
                  <Layers className="text-purple-500 w-4 h-4" />
                  <div>
                    <p className="text-xs text-gray-400">Brand</p>
                    <p className="text-sm font-semibold text-gray-700">
                      {p.brand}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3">
                  <PackageCheck className="text-green-500 w-4 h-4" />
                  <div>
                    <p className="text-xs text-gray-400">Stock</p>
                    <p className="text-sm font-semibold text-gray-700">
                      {p.stock} units left
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3">
                  <ShoppingCart className="text-orange-500 w-4 h-4" />
                  <div>
                    <p className="text-xs text-gray-400">Availability</p>
                    <p
                      className={`text-sm font-semibold ${p.stock > 0 ? "text-green-600" : "text-red-500"}`}
                    >
                      {p.stock > 0 ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Button */}
            <div className="flex items-center justify-between mt-2">
              <span className="text-4xl font-extrabold text-gray-900">
                ${p.price}
              </span>
              <button
                disabled={p.stock === 0}
                className="flex items-center gap-2 bg-[#1C3557] rounded-md hover:bg-[#152741] cursor-pointer active:scale-95 active:bg-[#1d3d69] disabled:bg-gray-300 disabled:cursor-not-allowed text-white  font-semibold px-6 py-3 transition-colors duration-200"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;