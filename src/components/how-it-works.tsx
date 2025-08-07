import React from "react";
import { IconEdit, IconCpu, IconVideo, IconDownload } from "@tabler/icons-react";

const steps = [
  {
    number: "01",
    icon: <IconEdit className="h-8 w-8" />,
    title: "Provide an Image",
    description: "Start with any image - concept art, photograph, or even a simple sketch. This single image becomes your world's foundation.",
    example: '"Upload a landscape photo or artwork"',
    color: "blue"
  },
  {
    number: "02", 
    icon: <IconCpu className="h-8 w-8" />,
    title: "Genie3 AI World Generation",
    description: "Genie3's advanced diffusion model analyzes your image and generates a complete 3D environment with realistic physics and lighting.",
    example: "Spatiotemporal transformers create interactive spaces",
    color: "purple"
  },
  {
    number: "03",
    icon: <IconVideo className="h-8 w-8" />,
    title: "Interactive Exploration",
    description: "Navigate your generated world using keyboard and mouse. Experience real-time interactions, object physics, and dynamic environments.",
    example: "Up to 60 seconds of consistent world generation",
    color: "green"
  },
  {
    number: "04",
    icon: <IconDownload className="h-8 w-8" />,
    title: "Train & Evaluate",
    description: "Use generated worlds to train AI agents or prototype interactive experiences. Perfect for research and creative development.",
    example: "SIMA agents tested in novel environments",
    color: "orange"
  }
];

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: {
      bg: "from-blue-500 to-blue-600",
      text: "text-blue-600",
      border: "border-blue-200",
      accent: "bg-blue-50"
    },
    purple: {
      bg: "from-purple-500 to-purple-600", 
      text: "text-purple-600",
      border: "border-purple-200",
      accent: "bg-purple-50"
    },
    green: {
      bg: "from-green-500 to-green-600",
      text: "text-green-600", 
      border: "border-green-200",
      accent: "bg-green-50"
    },
    orange: {
      bg: "from-orange-500 to-orange-600",
      text: "text-orange-600",
      border: "border-orange-200", 
      accent: "bg-orange-50"
    }
  };
  return colorMap[color as keyof typeof colorMap];
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            How <span className="text-blue-600">Genie3</span> Works
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform static images into living, breathing 3D worlds. Here&apos;s how <strong>Genie3</strong> creates interactive environments from a single image on <a href="https://genie3.top" className="text-blue-600 hover:underline">Genie3.top</a>.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200 dark:from-blue-800 dark:via-purple-800 dark:via-green-800 dark:to-orange-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              
              return (
                <div key={index} className="relative group">
                  {/* Step card */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 relative z-10">
                    {/* Step number */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${colors.bg} text-white text-xl font-bold mb-6 relative z-20`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${colors.accent} dark:bg-gray-700 ${colors.text} dark:text-white mb-4`}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Example */}
                    <div className={`${colors.accent} dark:bg-gray-700 rounded-lg p-3 border-l-4 ${colors.border} dark:border-gray-600`}>
                      <p className={`text-sm ${colors.text} dark:text-gray-300 italic`}>
                        {step.example}
                      </p>
                    </div>
                  </div>

                  {/* Connection dots for large screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-6 z-20">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${colors.bg} shadow-lg`}></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Demo section */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-3xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Create Your World?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience <strong>Genie3&apos;s</strong> revolutionary world generation technology at <strong>Genie3.top</strong> and explore the future of interactive 3D environments.
            </p>
            
            {/* Input demo */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Describe your 3D world or upload an image..."
                  className="w-full px-6 py-4 text-lg rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-32"
                />
                <button className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                  Generate
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                See How It Works
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-3 px-8 rounded-full transition duration-300">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}