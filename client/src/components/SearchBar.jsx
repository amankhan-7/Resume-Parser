import React, { useState } from "react";
import { Search, RefreshCw } from "lucide-react";

export default function SearchBar({ onSearch, onReset, filteredUsers }) {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const normalize = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, "");

  const searchTerms = query
    .split(",")
    .map((q) => normalize(q.trim()))
    .filter(Boolean);

  const handleSearch = () => {
    if (!query.trim()) {
      setShowResults(false);
      return;
    }

    setShowResults(true);
    onSearch(query);
  };

  const handleReset = () => {
    setQuery("");
    setShowResults(false);
    onReset();
  };

  return (
    <div className="md:px-8 py-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Search Section */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 md:px-10 py-8 bg-gradient-to-r from-emerald-50 via-sky-50 to-blue-50 border-b border-gray-100">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Browse Candidates
            </h2>

            <p className="text-center text-gray-500 mt-2 text-sm md:text-base">
              Search users by skills like React, Node.js, JavaScript, etc.
            </p>

            {/* Search Bar */}
            <div className="mt-6 flex flex-col lg:flex-row items-center gap-3 max-w-4xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="Search skills like React, Node.js, MongoDB..."
                  className="w-full h-14 pl-12 pr-4 rounded-2xl border border-gray-300 bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-700 placeholder:text-gray-400 shadow-sm"
                />
              </div>
              <div className="flex flex-row gap-2">
                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="h-10 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all flex items-center gap-2 shadow-sm w-full sm:w-auto justify-center"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>

                {/* Reset Button */}
                <button
                  onClick={handleReset}
                  className="h-10 px-7 rounded-2xl bg-gray-900 hover:bg-black text-white font-medium transition-all flex items-center gap-2 shadow-sm w-full sm:w-auto justify-center"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* User Cards */}
        {showResults && (
          <div className="bg-blue-300 rounded-4xl mt-8 py-6 px-3">
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-6">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {user.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1 break-all">
                        {user.email}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">
                        Skills
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {user.skills?.map((skill, idx) => {
                          const isMatched = searchTerms.some((term) =>
                            normalize(skill).includes(term),
                          );

                          return (
                            <span
                              key={idx}
                              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                                isMatched
                                  ? "bg-red-50 text-red-600 border-red-200 shadow-sm scale-105"
                                  : "bg-blue-50 text-blue-700 border-blue-100"
                              }`}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex justify-center items-center py-20">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-700">
                      No users found
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Try searching with different skills.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
