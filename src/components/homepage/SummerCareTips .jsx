import {
  FaSun,
  FaTint,
  FaUmbrella,
  FaAppleAlt,
  FaBed,
  FaWind,
} from "react-icons/fa";

const tips = [
  {
    icon: <FaSun className="text-yellow-500 text-2xl" />,
    title: "Apply Sunscreen",
    description:
      "Use SPF 30+ sunscreen every day, even on cloudy days. Reapply every 2 hours when outdoors.",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  {
    icon: <FaTint className="text-blue-500 text-2xl" />,
    title: "Stay Hydrated",
    description:
      "Drink at least 8–10 glasses of water daily. Add lemon or cucumber for extra refreshment.",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: <FaUmbrella className="text-purple-500 text-2xl" />,
    title: "Seek Shade",
    description:
      "Avoid direct sun exposure between 10am–4pm. Use an umbrella or hat when going outside.",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: <FaAppleAlt className="text-red-500 text-2xl" />,
    title: "Eat Light & Fresh",
    description:
      "Choose fruits, salads, and light meals. Watermelon, cucumber, and oranges keep you cool.",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    icon: <FaBed className="text-green-500 text-2xl" />,
    title: "Rest Well",
    description:
      "Heat can drain energy quickly. Get 7–8 hours of sleep and take short breaks during the day.",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: <FaWind className="text-cyan-500 text-2xl" />,
    title: "Wear Breathable Clothes",
    description:
      "Choose light-colored, loose-fitting cotton or linen clothes to stay cool and comfortable.",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
  },
];

const SummerCareTips = () => {
  return (
    <section className="bg-white px-4">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">
            Stay Safe This Season
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
             Summer Care Tips
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Simple habits to keep you healthy, fresh, and glowing all summer
            long.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`${tip.bg} border ${tip.border} rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300`}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                {tip.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {tip.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerCareTips;
