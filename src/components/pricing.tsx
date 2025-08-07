import React from "react";
import { IconCheck, IconX, IconStar } from "@tabler/icons-react";

const plans = [
  {
    name: "Explorer",
    price: "Free",
    period: "Limited Access",
    description: "Experience Genie3's world generation capabilities at Genie3.top",
    features: [
      "5 Genie3 world generations per month",
      "10-second world duration",
      "Basic image inputs",
      "Community forum access",
      "Standard perspectives"
    ],
    limitations: [
      "Limited interaction time",
      "No API access",
      "Basic physics simulation"
    ],
    buttonText: "Start Exploring",
    buttonStyle: "border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 text-gray-700 dark:text-gray-300 hover:text-blue-600",
    popular: false
  },
  {
    name: "Creator",
    price: "$49", 
    period: "per month",
    description: "Perfect for game developers and creative professionals",
    features: [
      "100 Genie3 world generations per month",
      "30-second world duration", 
      "Advanced image inputs",
      "Priority support",
      "All perspective modes",
      "Advanced physics",
      "Object interactions",
      "Export capabilities"
    ],
    limitations: [],
    buttonText: "Start Creating",
    buttonStyle: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
    popular: true
  },
  {
    name: "Research",
    price: "Custom",
    period: "Contact Us", 
    description: "For AI researchers and enterprise teams",
    features: [
      "Unlimited generations",
      "60-second world duration",
      "API access for agents",
      "Custom Genie3 training environments",
      "Dedicated compute resources",
      "SIMA integration",
      "Team collaboration",
      "Research datasets",
      "Priority processing",
      "Custom world parameters"
    ],
    limitations: [],
    buttonText: "Contact Research Team",
    buttonStyle: "border-2 border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900 text-purple-600 hover:text-purple-700",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-blue-600">Genie3</span> Access Plans
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select the right tier for your interactive world generation needs on <strong>Genie3.top</strong>. From exploration to advanced research with Genie3.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <span className="text-gray-600 dark:text-gray-400">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer"></div>
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform"></div>
            </div>
            <span className="text-gray-600 dark:text-gray-400">Yearly</span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm font-semibold">Save 20%</span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-2 border-purple-500 scale-105' 
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <IconStar className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 dark:text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What&apos;s included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <IconCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Limitations:</h4>
                    <ul className="space-y-3">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <IconX className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-500 dark:text-gray-400">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <button className={`w-full font-semibold py-4 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">How long can worlds persist?</h4>
              <p className="text-gray-600 dark:text-gray-400">Genie3 can generate consistent worlds for up to 60 seconds, depending on your plan tier at Genie3.top.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What input formats work?</h4>
              <p className="text-gray-600 dark:text-gray-400">Genie3 accepts photographs, concept art, digital drawings, and even simple sketches as input on Genie3.top.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Can I train AI agents?</h4>
              <p className="text-gray-600 dark:text-gray-400">Research tier includes full API access for training embodied AI agents in generated environments.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Is this publicly available?</h4>
              <p className="text-gray-600 dark:text-gray-400">Genie3 is now available at Genie3.top, bringing advanced AI technology to creators worldwide.</p>
            </div>
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Powered by Advanced AI Technology
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Experience <strong>Genie3</strong> - the cutting-edge foundation world model at <strong>Genie3.top</strong> that&apos;s revolutionizing interactive 3D content creation.
          </p>
        </div>
      </div>
    </section>
  );
}