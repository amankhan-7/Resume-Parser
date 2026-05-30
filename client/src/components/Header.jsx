import React from 'react'

function Header() {
  return (
    <div>
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
    </div>
  )
}

export default Header
