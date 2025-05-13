// src/components/HowItWorksSection.tsx
export function HowItWorksSection() {
	return (
		<section id="how-it-works" className="py-20 bg-cream-100">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold mb-4 text-gray-900">
						How It Works
					</h2>
					<p className="text-lg text-gray-700 max-w-xl mx-auto">
						Transform your images and videos in three simple steps
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
					{/* Step 1 */}
					<div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
						<div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-medium text-xl mb-4">
							1
						</div>
						<h3 className="text-lg font-medium mb-2">Upload Your File</h3>
						<p className="text-gray-700 text-sm">
							Drag and drop your images or videos onto our platform.
						</p>
					</div>

					{/* Step 2 */}
					<div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
						<div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-medium text-xl mb-4">
							2
						</div>
						<h3 className="text-lg font-medium mb-2">Select the Function</h3>
						<p className="text-gray-700 text-sm">
							Choose between removing backgrounds, editing or applying AI
							effects.
						</p>
					</div>

					{/* Step 3 */}
					<div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
						<div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-medium text-xl mb-4">
							3
						</div>
						<h3 className="text-lg font-medium mb-2">Download the Result</h3>
						<p className="text-gray-700 text-sm">
							Get your edited file in seconds, ready to use.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
