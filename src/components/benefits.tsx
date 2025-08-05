import React from "react";
import { IconRocket, IconPalette, IconClock, IconTrendingUp, IconShield, IconUsers } from "@tabler/icons-react";

const benefits = [
  {
    icon: <IconRocket className="h-8 w-8" />,
    title: "Instant World Creation with Genie3",
    description: "Genie3 generates fully interactive 3D environments from a single image in seconds. Transform static visuals into explorable worlds on Genie3.top.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <IconPalette className="h-8 w-8" />,
    title: "Endless Possibilities with Genie3",
    description: "Create infinite variations of playable 3D worlds with Genie3. From realistic simulations to fantastical realms, Genie3 brings any vision to life.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <IconClock className="h-8 w-8" />,
    title: "Advanced Physics Simulation",
    description: "Experience realistic object interactions, water effects, gravity, and dynamic lighting. Every world feels alive and responsive.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <IconTrendingUp className="h-8 w-8" />,
    title: "AI Agent Training Ground",
    description: "Perfect for training and evaluating embodied AI agents. Generate diverse environments for robust AI development.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: <IconShield className="h-8 w-8" />,
    title: "Multi-Perspective Views",
    description: "Seamlessly switch between first-person, third-person, and isometric views. Experience worlds from any angle.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: <IconUsers className="h-8 w-8" />,
    title: "Genie3's Persistent World Memory",
    description: "Genie3 remembers off-screen content and maintains world consistency. Navigate freely without breaking immersion in Genie3-generated worlds.",
    gradient: "from-teal-500 to-cyan-500"
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose <span className="text-blue-600">Genie3</span>?
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the groundbreaking capabilities of <strong>Genie3</strong> - Google DeepMind's foundation world model. Available at <a href="https://genie3.top" className="text-blue-600 hover:underline">Genie3.top</a>, revolutionizing interactive 3D world creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${benefit.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Generate Your First World
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-4 px-8 rounded-full text-lg transition duration-300">
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}