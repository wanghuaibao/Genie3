import { HeroSection } from "@/components/hero";
import { BenefitsSection } from "@/components/benefits";
import { HowItWorksSection } from "@/components/how-it-works";
import { PricingSection } from "@/components/pricing";
import { FAQSection } from "@/components/faq";
import { CTASection } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with Animated Background */}
      <HeroSection />
      
      {/* 2. Benefits Section */}
      <BenefitsSection />
      
      {/* 3. How It Works Section */}
      <HowItWorksSection />
      
      {/* 4. Pricing Section */}
      <PricingSection />
      
      {/* 5. FAQ Section */}
      <FAQSection />
      
      {/* 6. CTA Section */}
      <CTASection />
      
      {/* 7. Footer */}
      <Footer />
    </main>
  )
}