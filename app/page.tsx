// src/app/page.tsx
import { FooterSection } from "./landing/components/FooterSection";
import { HeroSection } from "./landing/components/HeroSection";
import { FeaturesSection } from "./landing/components/FeaturesSection";
import { HowItWorksSection } from "./landing/components/HowItWorksSection";
import { PricingSection } from "./landing/components/PricingSection";
import { TestimonialsSection } from "./landing/components/TestimonialsSection";
import { CTASection } from "./landing/components/CTASection";
import { HeaderSection } from "./landing/components/HeaderSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-orange-50 text-gray-900">
			<HeaderSection />
			<HeroSection />
			<FeaturesSection />
			<HowItWorksSection />
			<PricingSection />
			<TestimonialsSection />
			<CTASection />
			<FooterSection />
		</div>
	);
}
