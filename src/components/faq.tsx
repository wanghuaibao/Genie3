"use client";
import React, { useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const faqs = [
  {
    question: "What exactly is Genie3?",
    answer: "Genie3 (available at Genie3.top) is Google DeepMind's revolutionary foundation world model that generates interactive 3D environments from a single image. Genie3 uses advanced diffusion models and spatiotemporal transformers to create playable worlds with realistic physics, lighting, and object interactions."
  },
  {
    question: "How long can Genie3 generated worlds last?",
    answer: "Genie3 can generate consistent, interactive worlds for up to 60 seconds, with most examples running between 10-20 seconds. Genie3's model maintains world coherence and remembers off-screen content, allowing seamless exploration throughout the duration."
  },
  {
    question: "What types of interactions are possible?",
    answer: "You can navigate using keyboard and mouse, interact with objects like opening doors and bursting balloons, experience realistic physics including gravity and water effects, and observe dynamic lighting with reflections and shadows. The worlds respond intelligently to user actions."
  },
  {
    question: "Can Genie3 generate different perspectives?",
    answer: "Yes! Genie3 supports multiple viewpoints including first-person perspective, third-person view, isometric angles, and driving perspectives. Genie3 maintains consistency across different camera angles within the same generated world."
  },
  {
    question: "How is Genie3 different from game engines?",
    answer: "Unlike traditional game engines, Genie3 is a diffusion model that generates images in real-time as you explore. Genie3 doesn't require pre-built assets or programming - it creates entire interactive worlds from a single input image using AI at Genie3.top."
  },
  {
    question: "What can I use as input for Genie3 world generation?",
    answer: "Genie3 accepts various inputs including photographs, concept art, digital drawings, and even simple sketches. Genie3's out-of-distribution generalization allows it to transform any visual input into a fully interactive 3D environment."
  },
  {
    question: "Is Genie3 available for public use?",
    answer: "Genie3 is accessible at Genie3.top, representing the evolution of Google DeepMind's world generation technology. While based on research foundations, Genie3 offers the future of interactive content creation through our platform."
  },
  {
    question: "How can Genie3 be used for AI development?",
    answer: "Genie3 (Genie3.top) is perfect for training and evaluating embodied AI agents like SIMA. Genie3 generates diverse, unseen environments for testing, allowing researchers to create unlimited training scenarios and evaluate AI performance in novel situations without manual world building."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about <strong>Genie3</strong> world generation technology at <a href="https://genie3.top" className="text-blue-600 hover:underline">Genie3.top</a>
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <IconMinus className="h-6 w-6 text-purple-600" />
                  ) : (
                    <IconPlus className="h-6 w-6 text-gray-500" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Learn more about Google DeepMind&apos;s revolutionary world generation technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Learn More
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-3 px-8 rounded-full transition duration-300">
              Research Papers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}