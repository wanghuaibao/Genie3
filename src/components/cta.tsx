import React from "react";
import { IconArrowRight, IconSparkles, Icon3dCubeSphere } from "@tabler/icons-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-cyan-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-pink-400 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 animate-pulse">
            <Icon3dCubeSphere className="h-10 w-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ready to Build 
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Interactive Worlds?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience <strong>Genie3</strong> - Google DeepMind&apos;s revolutionary technology at <strong>Genie3.top</strong>. 
            Transform single images into fully interactive 3D environments with realistic physics using Genie3.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">60s</div>
              <div className="text-blue-200">Consistent Worlds</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-blue-200">Unique Environments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">3D</div>
              <div className="text-blue-200">Interactive Worlds</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-3">
              <IconSparkles className="h-6 w-6 group-hover:animate-spin" />
              <span>Explore Genie3 Now</span>
              <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white/30 hover:border-white/60 backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-full text-xl transition-all duration-300 flex items-center space-x-3">
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>View Showcase</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-blue-200 mb-6">Powered by <strong>Genie3</strong> - Google DeepMind&apos;s cutting-edge research at <strong>Genie3.top</strong></p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-semibold">DeepMind</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-semibold">Google AI</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-semibold">Research</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-semibold">Innovation</div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-12 inline-flex items-center space-x-3 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-100 font-medium">State-of-the-art AI technology</span>
          </div>
        </div>
      </div>
    </section>
  );
}