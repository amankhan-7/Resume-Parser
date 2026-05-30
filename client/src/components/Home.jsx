import { useContext, useState } from "react";
import GlobalStore from "../contexts/GlobalStore/GlobalStore";
import { JSONTree } from "react-json-tree";
import Footer from "./Footer";
import Loading from "./Loading";
import Header from "./Header";
import Instructions from "./Instructions";
import SearchBar from "./SearchBar";
import SearchLoading from "./SearchLoading";

// Lucide icons
import { Folder, Check, Rocket } from "lucide-react";

export default function Home() {
  const globalStore = useContext(GlobalStore);
  const { inputFile, setInputFile, serverRes, parsePdf, loading, setLoading } =
    globalStore;
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const handleFileUpload = (event) => {
    setInputFile(event.target.files[0]);
  };

  const handleParseBtn = () => {
    setLoading(true);
    parsePdf();
  };

  const handleSkillSearch = async (searchQuery) => {
    try {
      const trimmedQuery = searchQuery.trim();

      if (!trimmedQuery) {
        setUsers([]);
        return;
      }

      setSearchLoading(true);
      setQuery(trimmedQuery);

      const res = await fetch(
        `/browse/skills?skills=${encodeURIComponent(trimmedQuery)}`,
      );

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();

      setUsers(data.users || []);
    } catch (error) {
      console.error("Search failed:", error);
      setUsers([]);
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-blue-400 to-blue-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-sky-200/30"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 to-transparent"></div>
        </div>
      </div>

      {/* Floating blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-40 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-16 w-20 h-20 bg-white/15 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <Header />
        <Instructions />

        {/* Upload Section */}
        <div className="w-full max-w-2xl mb-8">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30">
            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-light text-gray-800 mb-2">
                  Upload Your Resume
                </h3>
                <p className="text-gray-600">
                  Begin your document transformation
                </p>
              </div>

              {/* File Upload */}
              <div className="relative mb-6">
                <input
                  type="file"
                  id="file"
                  name="inputFile"
                  onChange={handleFileUpload}
                  accept=".pdf"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />

                <div
                  className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                    inputFile
                      ? "border-blue-400 bg-gradient-to-br from-blue-50 to-sky-50"
                      : "border-gray-300 bg-gradient-to-br from-gray-50 to-white hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-50"
                  }`}
                >
                  <div className="space-y-4">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto transition-all duration-300 ${
                        inputFile ? "bg-blue-200" : "bg-gray-200"
                      }`}
                    >
                      {inputFile ? (
                        <Check className="w-8 h-8 text-blue-600" />
                      ) : (
                        <Folder className="w-8 h-8 text-gray-500" />
                      )}
                    </div>

                    <div>
                      <p className="text-lg font-medium text-gray-700 mb-1">
                        {inputFile ? "Document Selected" : "Choose Your PDF"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {inputFile
                          ? "RESUME/CV"
                          : "Click or drag your file here"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* File Info */}
              {inputFile && (
                <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-4 mb-6 border border-blue-200/50">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-1">
                        Filename
                      </p>
                      <p className="text-sm text-gray-600 truncate">
                        {inputFile.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-1">
                        File Size
                      </p>
                      <p className="text-sm text-gray-600">
                        {(inputFile.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Button */}
              <button
                onClick={handleParseBtn}
                disabled={!inputFile}
                className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 transform ${
                  inputFile
                    ? "bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-700 hover:via-blue-600 hover:to-sky-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {inputFile ? (
                  <span className="flex items-center justify-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Begin Analysis
                  </span>
                ) : (
                  "Select PDF Document First"
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Loading */}
        {loading && <Loading />}
        {searchLoading && <SearchLoading/>}

        {/* Results */}
        <SearchBar
          onSearch={handleSkillSearch}
          onReset={() => {
            setQuery("");
            setUsers([]);
          }}
          filteredUsers={users}
        />
        <Footer />
      </div>
    </div>
  );
}
