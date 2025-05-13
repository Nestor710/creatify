"use client";

import Image from "next/image";
import { Lightbulb, Users, Globe, Rocket } from "lucide-react";

export function OurMissionSection() {
	return (
		<section id="mission" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* Left content - Mission statement */}
						<div>
							<h2 className="text-3xl font-bold mb-6 text-gray-900">
								Our Mission
							</h2>
							<p className="text-lg text-gray-700 mb-8">
								At Creatify, we believe that powerful creative tools should be
								accessible to everyone. Our mission is to democratize image and
								video editing through artificial intelligence, empowering
								creators worldwide to bring their visions to life without
								technical barriers.
							</p>

							<div className="grid grid-cols-2 gap-6">
								{/* Value 2 */}
								<div className="flex items-start">
									<div className="mr-4 text-orange-500">
										<Users size={24} />
									</div>
									<div>
										<h3 className="font-medium mb-2">Accessibility</h3>
										<p className="text-sm text-gray-600">
											We ensure our tools are easy to use regardless of
											technical skill level.
										</p>
									</div>
								</div>

								{/* Value 4 */}
								<div className="flex items-start">
									<div className="mr-4 text-orange-500">
										<Rocket size={24} />
									</div>
									<div>
										<h3 className="font-medium mb-2">Empowerment</h3>
										<p className="text-sm text-gray-600">
											We aim to give creators more time to focus on creativity
											rather than tedious editing.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right side - Image */}
						<div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
							<Image
								src="/mission-image.jpg"
								alt="Our team collaborating on AI technology"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
								<div className="p-6 text-white">
									<h3 className="font-bold text-xl mb-2">Our Story</h3>
									<p className="text-sm">
										Creatify began with a simple question: "What if everyone
										could edit like a pro without spending years learning
										complex software?"
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Se eliminó la sección "Impact Stats" como se solicitó */}
				</div>
			</div>
		</section>
	);
}
