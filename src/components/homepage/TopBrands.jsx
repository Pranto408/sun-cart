const brands = [
  {
    name: "SunShade",
    tagline: "Premium UV Protection",
    description:
      "Trusted for stylish and effective sunglasses that block 100% of harmful UV rays.",
    emoji: "🕶️",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "AquaGlow",
    tagline: "Hydration Skincare",
    description:
      "Science-backed hydrating creams and serums that keep your skin fresh all summer.",
    emoji: "💧",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    name: "CoolBreeze",
    tagline: "Lightweight Summer Wear",
    description:
      "Breathable cotton and linen collections designed for ultimate summer comfort.",
    emoji: "🌿",
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
  },
];

const TopBrands = () => {
  return (
    <section className="bg-white py-10 px-4 animate__backInLeft animate__animated">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            Our Partners
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            🏆 Top Brands
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Handpicked brands we trust to bring you the best summer experience.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`${brand.bg} border ${brand.border} rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow duration-300`}
            >
              {/* Emoji Icon */}
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-3xl">
                {brand.emoji}
              </div>

              {/* Brand Name */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {brand.name}
                </h3>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full mt-1 inline-block ${brand.badge}`}
                >
                  {brand.tagline}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {brand.description}
              </p>

              {/* Button */}
              <button className="mt-2 text-sm font-semibold text-gray-700 border border-gray-300 hover:border-gray-500 px-5 py-2 rounded-xl transition-colors duration-200">
                View Products →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
