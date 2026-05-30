import { Search, LoaderCircle } from "lucide-react";

export default function SearchLoading() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-8 animate-in fade-in duration-300">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
        <div className="p-10 flex flex-col items-center justify-center text-center">
          {/* Animated Icon */}
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
              <Search className="w-10 h-10 text-blue-600" />
            </div>

            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md border border-gray-200">
              <LoaderCircle className="w-5 h-5 text-blue-600 animate-spin" />
            </div>
          </div>

          {/* Text */}
          <h2 className="text-2xl font-semibold text-gray-800">
            Searching Candidates
          </h2>

          <p className="text-gray-500 mt-2 max-w-md">
            We're finding the best matching users based on
            selected skills...
          </p>

          {/* Skeleton Cards */}
          <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-gray-200 p-6 bg-white shadow-sm"
              >
                <div className="animate-pulse">
                  <div className="h-5 w-40 bg-gray-200 rounded mb-3"></div>

                  <div className="h-4 w-52 bg-gray-100 rounded mb-5"></div>

                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((tag) => (
                      <div
                        key={tag}
                        className="h-8 w-20 rounded-full bg-gray-200"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}