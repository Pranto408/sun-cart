import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { name, price, rating, image,id } = product;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-200">
      <div className="relative w-full aspect-square">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-1">{name}</h3>

        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-400">★</span>
          <span className="text-sm text-gray-600">{rating} / 5</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          <Link href={`/products/${id}`}>
            <button className="bg-[#1C3557] rounded-md hover:bg-[#152741] cursor-pointer active:scale-95 active:bg-[#1d3d69]  text-white text-sm font-medium px-4 py-2 transition-colors duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
