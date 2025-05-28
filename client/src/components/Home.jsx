import { useContext } from 'react';
import GlobalStore from '../contexts/GlobalStore/GlobalStore';
import { JSONTree } from 'react-json-tree';


export default function Home() {
    const globalStore = useContext(GlobalStore);
    const { inputFile, setInputFile, serverRes, parsePdf, loading, setLoading } = globalStore;

    const handleFileUpload = (event) => {
        setInputFile(event.target.files[0]);
    };

    const handleParseBtn = () => {
        setLoading(true);
        parsePdf();
    };

    const parseServerResponse = (res) => {
     if (typeof res === 'string') {
      try {
       const cleaned = res
        .replace(/```json|```/g, '') // remove Markdown formatting
        .trim();
       return JSON.parse(cleaned);
    } catch (error) {
      console.error('Invalid JSON string in serverRes:', error);
      return { error: 'Failed to parse JSON response.' };
     }
   }
   return res;
  };


  const copyToClipboard = () => {
    const parsedData = parseServerResponse(serverRes);
    navigator.clipboard.writeText(JSON.stringify(parsedData, null, 2))
        .then(() => {
        alert('✅ JSON copied to clipboard!');
        })
        .catch(err => {
        console.error('Failed to copy!', err);
        });
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Sophisticated Ocean Background with Depth */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-blue-400 to-blue-600"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-sky-200/30"></div>
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>
            </div>
            
            {/* Floating Architectural Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-32 right-40 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-16 w-20 h-20 bg-white/15 rounded-full blur-xl"></div>
            </div>

            {/* Main Architectural Container */}
            <div className="relative z-10 min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                
                {/* Elegant Header with Grecian Style */}
                <div className="text-center mb-10 lg:mb-12">
                    <div className="inline-block">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight mb-4 text-white tracking-wide leading-tight">
                            <span className="block drop-shadow-2xl">RESUME</span>
                            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-1 font-thin tracking-widest opacity-95">PARSER</span>
                        </h1>
                        <div className="flex justify-center space-x-3 mb-6">
                            <div className="w-8 h-px bg-white/60"></div>
                            <div className="w-6 h-6 border border-white/60 rounded-full flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                            </div>
                            <div className="w-8 h-px bg-white/60"></div>
                        </div>
                        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
                            Sophisticated AI-Powered Document Analysis
                            <span className="block text-base mt-1 text-white/70 italic">Powered by OpenAI's Advanced Intelligence</span>
                        </p>
                    </div>
                </div>

                {/* Refined Instructions Section */}
                <div className="w-full max-w-4xl mb-10 lg:mb-12">
                    <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-50 to-sky-50 px-6 py-5 border-b border-blue-100/50">
                            <h2 className="text-2xl font-light text-gray-800 text-center tracking-wide">
                                The Process
                            </h2>
                            <p className="text-center text-gray-600 mt-1 text-base">Three steps to perfection</p>
                        </div>
                        
                        <div className="p-6">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center group">
                                    <div className="relative mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-100 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                                            <span className="text-2xl">📄</span>
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">1</div>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-800 mb-2">Upload Document</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">Select your professional resume in PDF format</p>
                                </div>
                                
                                <div className="text-center group">
                                    <div className="relative mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                                            <span className="text-2xl">🧠</span>
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">2</div>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-800 mb-2">AI Analysis</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">Advanced Gemini AI processes your content</p>
                                </div>
                                
                                <div className="text-center group">
                                    <div className="relative mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                                            <span className="text-2xl">✨</span>
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">3</div>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-800 mb-2">Structured Output</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">Receive formatted JSON with extracted data</p>
                                </div>
                            </div>
                            
                            <div className="mt-6 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 rounded-xl p-4 border border-blue-200/50">
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                    <p className="text-gray-700 font-medium text-sm">
                                        Processing time: few seconds for analysis
                                    </p>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Elegant Upload Section */}
                <div className="w-full max-w-2xl mb-8">
                    <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30">
                        <div className="p-6">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-light text-gray-800 mb-2">
                                    Upload Your Resume
                                </h3>
                                <p className="text-gray-600">Begin your document transformation</p>
                            </div>

                            <div className="relative mb-6">
                                <input
                                    type="file"
                                    id="file"
                                    name="inputFile"
                                    onChange={handleFileUpload}
                                    accept=".pdf"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                                    inputFile 
                                        ? 'border-blue-400 bg-gradient-to-br from-blue-50 to-sky-50' 
                                        : 'border-gray-300 bg-gradient-to-br from-gray-50 to-white hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-50'
                                }`}>
                                    <div className="space-y-4">
                                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto transition-all duration-300 ${
                                            inputFile ? 'bg-blue-200' : 'bg-gray-200'
                                        }`}>
                                            <span className="text-2xl">{inputFile ? '✓' : '📁'}</span>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium text-gray-700 mb-1">
                                                {inputFile ? 'Document Selected' : 'Choose Your PDF'}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {inputFile ? 'RESUME/CV': 'Click or drag your file here'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {inputFile && (
                                <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-4 mb-6 border border-blue-200/50">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <p className="text-xs font-semibold text-gray-700 mb-1">Filename</p>
                                            <p className="text-sm text-gray-600 truncate">{inputFile.name}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-700 mb-1">File Size</p>
                                            <p className="text-sm text-gray-600">{(inputFile.size / 1024).toFixed(2)} KB</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={handleParseBtn}
                                disabled={!inputFile}
                                className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 transform ${
                                    inputFile 
                                        ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-700 hover:via-blue-600 hover:to-sky-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]' 
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                {inputFile ? '🚀 Begin Analysis' : 'Select PDF Document First'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sophisticated Loading Experience */}
                {loading && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-lg flex justify-center items-center z-50">
                        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 text-center shadow-2xl border border-white/30 max-w-md mx-4">
                            <h4 className="mt-6 text-xl font-medium text-gray-800">Processing Document</h4>
                            <p className="text-gray-600 mt-2 leading-relaxed">
                                Our AI is carefully analyzing your resume content. This sophisticated process typically takes few seconds.
                            </p>
                            <div className="mt-6 flex justify-center space-x-1">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Premium Results Display */}
                {serverRes && !loading && (
                    <div className="w-full max-w-7xl">
                        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/30 overflow-hidden">
                            <div className="bg-gradient-to-r from-emerald-50 via-blue-50 to-sky-50 px-8 sm:px-12 py-8 border-b border-blue-100/50">
                                <h3 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4 text-center tracking-wide">
                                    Analysis Complete
                                </h3>
                                <p className="text-center text-gray-600 mb-6 text-lg">Your document has been successfully processed</p>
                                <div className="flex justify-center">
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-700 hover:via-blue-600 hover:to-sky-600 text-white px-10 py-4 rounded-2xl font-medium text-lg transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl border border-blue-400/30"
                                    >
                                        ✨ Process Another Document
                                    </button>
                                </div>
                            </div>
                            
                           <div className="p-8 sm:p-12 bg-sky-200">
                                    {/* Copy Button */}
                                    <div className="flex justify-end mb-4">
                                        <button
                                        onClick={copyToClipboard}
                                        className="text-sm sm:text-base font-medium text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg transition-all duration-200 border border-blue-300 shadow-sm"
                                        >
                                        📋 Copy JSON
                                        </button>
                                    </div>

                                    {/* JSON Display */}
                                    <div className="bg-gray-50 rounded-2xl border border-gray-200 max-h-96 sm:max-h-[600px] lg:max-h-[700px] overflow-auto">
                                      <JSONTree
                                        data={parseServerResponse(serverRes)}
                                        theme="apathy"
                                        invertTheme={true}
                                        shouldExpandNode={() => false} // Collapsed level = 1 equivalent
                                        hideRoot={false}
                                        style={{
                                            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                                            fontSize: '14px',
                                            lineHeight: '1.6',
                                            padding: '1.5rem'
                                        }}
                                        />

                                    </div>
                                </div>

                        </div>
                    </div>
                )}

                {/* Sophisticated Footer */}
                <div className="mt-20 lg:mt-24">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl px-12 py-8 border border-white/20 shadow-2xl">
                        <div className="text-center">
                            <div className="flex justify-center items-center space-x-4 mb-4">
                                <div className="w-16 h-px bg-white/40"></div>
                                <div className="w-3 h-3 border border-white/40 rounded-full"></div>
                                <div className="w-16 h-px bg-white/40"></div>
                            </div>
                            <p className="text-white/90 text-lg font-light tracking-wide">
                                Crafted with passion & precision by{' '}
                                <a
                                    href="https://www.linkedin.com/in/amankhan7/"
                                    className="text-white font-medium hover:text-blue-200 transition-all duration-300 relative group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="relative z-10">AMAN KHAN</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </p>
                            <p className="text-white/60 text-sm mt-2 italic">
                                Professional Document Intelligence Solutions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}