// src/components/FeaturesSection.tsx
import { ImageOff, Edit, Play, Zap } from "lucide-react";

export function FeaturesSection() {
	return (
		<section id="features" className="py-20 bg-cream-100">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold mb-4 text-gray-900">
						Main Features
					</h2>
					<p className="text-lg text-gray-700 max-w-xl mx-auto">
						Discover all the tools we have for you
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
					{/* Feature 1 */}
					<div className="p-6 rounded-lg bg-orange-50 shadow-sm border border-orange-100 hover:shadow-md transition-all">
						<div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-500">
							<ImageOff size={22} />
						</div>
						<h3 className="text-lg font-medium mb-2">Background Removal</h3>
						<p className="text-gray-700 text-sm">
							Automatically remove the background of any image in seconds with
							professional precision.
						</p>
					</div>

					{/* Feature 2 */}
					<div className="p-6 rounded-lg bg-orange-50 shadow-sm border border-orange-100 hover:shadow-md transition-all">
						<div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-500">
							<Edit size={22} />
						</div>
						<h3 className="text-lg font-medium mb-2">Quick Editing</h3>
						<p className="text-gray-700 text-sm">
							Automated editing tools to enhance your images with a single
							click.
						</p>
					</div>

					{/* Feature 3 */}
					<div className="p-6 rounded-lg bg-orange-50 shadow-sm border border-orange-100 hover:shadow-md transition-all">
						<div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-500">
							<Play size={22} />
						</div>
						<h3 className="text-lg font-medium mb-2">Video Editing</h3>
						<p className="text-gray-700 text-sm">
							Apply effects and enhancements to your videos automatically with
							our AI.
						</p>
					</div>

					{/* Feature 4 */}
					<div className="p-6 rounded-lg bg-orange-50 shadow-sm border border-orange-100 hover:shadow-md transition-all">
						<div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-500">
							<Zap size={22} />
						</div>
						<h3 className="text-lg font-medium mb-2">AI Generation</h3>
						<p className="text-gray-700 text-sm">
							Create additional elements or enhance your images with our
							advanced AI technology.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
