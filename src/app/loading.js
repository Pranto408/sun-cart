export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Spinner */}
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-4 border-yellow-200"></div>

        <div className="w-20 h-20 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>

      {/* Text */}
      <h2 className="mt-6 text-2xl font-bold text-yellow-600 tracking-wide">
        Loading...
      </h2>

      <p className="text-gray-500 mt-2 text-sm">Please wait a moment</p>
    </div>
  );
}
