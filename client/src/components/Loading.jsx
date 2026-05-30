import React from 'react'

export default function Loading() {
  return (
    <div>
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
    </div>
  )
}
