import React from 'react';
import { FileText, Brain, Sparkles } from 'lucide-react';

export default function ProcessSection() {
    return (
        <div>
            <div className="w-full max-w-4xl mb-10 lg:mb-12">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 overflow-hidden">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-50 to-sky-50 px-6 py-5 border-b border-blue-100/50">
                        <h2 className="text-2xl font-light text-gray-800 text-center tracking-wide">
                            The Process
                        </h2>
                        <p className="text-center text-gray-600 mt-1 text-base">
                            Three steps to perfection
                        </p>
                    </div>

                    <div className="p-6">

                        <div className="grid md:grid-cols-3 gap-6">

                            {/* Step 1 */}
                            <div className="text-center group">
                                <div className="relative mb-4">

                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-100 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">

                                        <FileText className="w-7 h-7 text-blue-600" />

                                    </div>

                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                                        1
                                    </div>

                                </div>

                                <h3 className="text-lg font-medium text-gray-800 mb-2">
                                    Upload Document
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Select your professional resume in PDF format
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center group">
                                <div className="relative mb-4">

                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">

                                        <Brain className="w-7 h-7 text-purple-600" />

                                    </div>

                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                                        2
                                    </div>

                                </div>

                                <h3 className="text-lg font-medium text-gray-800 mb-2">
                                    AI Analysis
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Advanced Gemini AI processes your content
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center group">
                                <div className="relative mb-4">

                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">

                                        <Sparkles className="w-7 h-7 text-emerald-600" />

                                    </div>

                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                                        3
                                    </div>

                                </div>

                                <h3 className="text-lg font-medium text-gray-800 mb-2">
                                    Structured Output
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Receive formatted JSON with extracted data
                                </p>
                            </div>

                        </div>

                        {/* Footer note */}
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
        </div>
    );
}