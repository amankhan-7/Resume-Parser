import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="mt-5 lg:mt-14 w-full flex justify-center">

            <div className="w-full max-w-5xl">

                <div className="bg-white/20 backdrop-blur-xl rounded-3xl px-8 py-8 border border-white/20 shadow-2xl">

                    <div className="text-center space-y-3">

                        {/* Top Accent */}
                        <div className="flex justify-center items-center gap-3 mb-2">

                            <div className="w-10 h-px bg-white/40"></div>

                            <Sparkles className="w-4 h-4 text-white/70" />

                            <div className="w-10 h-px bg-white/40"></div>

                        </div>

                        {/* Brand */}
                        <h3 className="text-white text-lg sm:text-xl font-medium tracking-wide">
                            Document Intelligence Platform
                        </h3>

                        {/* Tagline */}
                        <p className="text-white/70 text-sm sm:text-base">
                            Crafted with precision for modern resume parsing & structured data extraction
                        </p>

                        {/* Author */}
                        <p className="text-white/90 text-sm sm:text-base pt-2">
                            Built by{' '}
                            <a
                                href="https://www.linkedin.com/in/amankhan7/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-white font-medium hover:text-blue-200 transition-colors duration-300"
                            >
                                AMAN KHAN
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </p>

                        {/* Bottom note */}
                        <p className="text-white/50 text-xs pt-2">
                            © {new Date().getFullYear()} All rights reserved
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
}