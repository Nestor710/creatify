// src/components/FeaturesSection.tsx
import { ImageOff, Edit, Play, Zap } from "lucide-react";

const features = [
	{
		id: 1,
		icon: <ImageOff size={22} />,
		title: "Background Removal",
		description: "Automatically remove the background of any image in seconds with professional precision.",
	},
	{
		id: 2,
		icon: <Edit size={22} />,
		title: "Quick Editing",
		description: "Automated editing tools to enhance your images with a single click.",
	},
	{
		id: 3,
		icon: <Play size={22} />,
		title: "Video Editing",
		description: "Apply effects and enhancements to your videos automatically with our AI.",
	},
	{
		id: 4,
		icon: <Zap size={22} />,
		title: "AI Generation",
		description: "Create additional elements or enhance your images with our advanced AI technology.",
	}
]

export function FeaturesSection() {
	return (
		<section id="features" className="py-20 bg-cream-100">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold mb-4 text-gray-900 gradient-orange-text">
						Main Features
					</h2>
					<p className="text-lg text-gray-700 max-w-xl mx-auto">
						Discover all the tools we have for you
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
					{/* Feature 1 */}
					{features.map((feature) => (
						<div
							key={feature.id}
							className="p-6 rounded-lg bg-orange-50 shadow-md shadow-orange-300 border border-orange-100 hover:shadow-lg hover:shadow-orange-500 hover:-translate-y-2 transition-all duration-300"
						>
							<div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-500">
								{feature.icon}
							</div>
							<h3 className="text-lg font-medium mb-2">{feature.title}</h3>
							<p className="text-gray-700 text-sm">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
