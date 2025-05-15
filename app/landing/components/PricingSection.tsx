// src/components/PricingSection.tsx
"use client";

import { CheckCircle } from "lucide-react";

export function PricingSection() {
	return (
		<section
			id="pricing"
			className="py-20 bg-gradient-to-b from-orange-50 to-white"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold mb-4 text-gray-900">
						Simple and Transparent Plans
					</h2>
					<p className="text-lg text-gray-700 max-w-xl mx-auto">
						Choose the plan that best fits your needs
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
					{/* Free Plan */}
					<div className="p-6 rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all">
						<h3 className="text-lg font-medium mb-2">Free</h3>
						<div className="text-3xl font-bold mb-4">$0</div>
						<ul className="mb-6 space-y-2">
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
								<span className="text-gray-700">20 Credits</span>
							</li>
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
								<span className="text-gray-700">20 Free Credits</span>
							</li>
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
								<span className="text-gray-700">Basic Access to Services</span>
							</li>
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
								<span className="text-gray-700">Priority Customer Support</span>
							</li>
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
								<span className="text-gray-700">Priority Updates</span>
							</li>
						</ul>
						<button
							onClick={() => console.log("Free plan selected")}
							className="w-full px-6 py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
						>
							Free Consumable
						</button>
					</div>

					{/* Pro Plan */}
					<div className="p-6 rounded-lg bg-orange-500 text-white shadow-lg border border-orange-400 transform translate-y-[-8px] md:scale-105">
						<div className="inline-block px-3 py-1 text-xs font-medium bg-orange-600 rounded-full mb-2">
							RECOMMENDED
						</div>
						<h3 className="text-lg font-medium mb-2">Pro Package</h3>
						<div className="text-3xl font-bold mb-4">$40</div>
						<ul className="mb-6 space-y-2">
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-orange-200 flex-shrink-0" />
								<span>120 Credits</span>
							</li>
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-orange-200 flex-shrink-0" />
								<span>120 Credits</span>
							</li>
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-orange-200 flex-shrink-0" />
								<span>Full Access to Services</span>
							</li>
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-orange-200 flex-shrink-0" />
								<span>Priority Customer Support</span>
							</li>
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-orange-200 flex-shrink-0" />
								<span>Priority Updates</span>
							</li>
						</ul>
						<button
							onClick={() => console.log("Pro plan selected")}
							className="w-full py-2 rounded-md bg-white text-orange-500 font-medium hover:bg-gray-100 transition-colors"
						>
							Buy Credit
						</button>
					</div>

					{/* Premium Plan */}
					<div className="p-6 rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all">
						<h3 className="text-lg font-medium mb-2">Premium Package</h3>
						<div className="text-3xl font-bold mb-4">$199</div>
						<ul className="mb-6 space-y-2">
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
								<span className="text-gray-700">2000 Credits</span>
							</li>
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
								<span className="text-gray-700">2000 Credits</span>
							</li>
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
								<span className="text-gray-700">Full Access to Services</span>
							</li>
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
								<span className="text-gray-700">Priority Customer Support</span>
							</li>
							<li className="flex items-center text-sm">
								<CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
								<span className="text-gray-700">Priority Updates</span>
							</li>
						</ul>
						<button
							onClick={() => console.log("Premium plan selected")}
							className="w-full px-6 py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
						>
							Buy Credit
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
