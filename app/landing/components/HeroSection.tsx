// src/components/HeroSection.tsx
"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
	return (
		<section className="pt-32 pb-20 bg-gradient-to-b from-orange-50 to-cream-100">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
						Image and Video Editing with AI in Seconds
					</h1>
					<p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
						Remove backgrounds, edit images and videos quickly with our
						artificial intelligence technology.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={() => console.log("Start now")}
							className="px-6 py-3 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-all flex items-center justify-center"
						>
							Get Started <ChevronRight className="ml-2" size={16} />
						</button>
						<button
							onClick={() => console.log("View demos")}
							className="px-6 py-3 rounded-md border border-orange-500 text-orange-500 font-medium hover:bg-orange-100 transition-colors"
						>
							View Demos
						</button>
					</div>
				</div>

				{/* Demo Image */}
				<div className="mt-16 max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
					<div className="aspect-[16/9] bg-gray-100 relative">
						<Image
							src="/demo-image.png"
							alt="Platform demo"
							fill
							className="object-contain"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
