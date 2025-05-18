"use client";

import { useState } from "react";
import Image from "next/image";
import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import { MoveHorizontal } from "lucide-react";

// Definir los servicios disponibles
const services = [
	{
		id: "background-remove",
		name: "Background Remove",
		title: "Remove backgrounds with one click",
		description:
			"Our advanced AI technology can detect and remove backgrounds from any image, giving you perfect results every time. Drag the slider to see the difference.",
		beforeImage: "/assets/images/dog_before.webp",
		afterImage: "/assets/images/dog_after_square.webp",
		icon: "/assets/icons/camera.svg",
	},
	{
		id: "generative-fill",
		name: "Generative Fill",
		title: "Expand your images with AI",
		description:
			"Easily extend your images or fill in missing areas with our AI-powered generative fill technology. Create stunning visuals without the need for complex editing tools.",
		beforeImage: "/assets/images/room-before.webp", // Temporalmente usando las mismas imágenes
		afterImage: "/assets/images/room-after.webp", // Temporalmente usando las mismas imágenes
		icon: "/assets/icons/stars.svg",
	},
	{
		id: "object-remove",
		name: "Object Remove",
		title: "Remove unwanted objects seamlessly",
		description:
			"Eliminate distractions or unwanted elements from your photos with our precise object removal tool. The AI automatically fills the space naturally.",
		beforeImage: "/assets/images/ballon-before.webp", // Temporalmente usando las mismas imágenes
		afterImage: "/assets/images/ballon-after.webp", // Temporalmente usando las mismas imágenes
		icon: "/assets/icons/scan.svg",
	},
	{
		id: "object-recolor",
		name: "Object Recolor",
		title: "Change colors with precision",
		description:
			"Instantly change the color of specific objects in your images while maintaining natural lighting and textures. Perfect for product visualization and creative projects.",
		beforeImage: "/assets/images/white-tshirt-before.webp", // Temporalmente usando las mismas imágenes
		afterImage: "/assets/images/white-tshirt-after.webp", // Temporalmente usando las mismas imágenes
		icon: "/assets/icons/filter.svg",
	},
	{
		id: "image-restore",
		name: "Image Restore",
		title: "Restore and enhance old photos",
		description:
			"Bring old or damaged photos back to life with our restoration technology. Fix scratches, improve clarity, and enhance details automatically.",
		beforeImage: "/assets/images/girl-restore-before.webp", // Temporalmente usando las mismas imágenes
		afterImage: "/assets/images/girl-restore-after.webp", // Temporalmente usando las mismas imágenes
		icon: "/assets/icons/image.svg",
	},
];

export function ComparisonSection() {
	const [activeService, setActiveService] = useState(services[0].id);

	// Obtener el servicio activo
	const currentService =
		services.find((service) => service.id === activeService) || services[0];

	return (
		<section id="tools" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 gradient-orange-text">
						Powerful & Easy-to-Use Tools
					</h2>
					<p className="text-lg text-gray-700 max-w-2xl mx-auto">
						Our AI technology transforms your images in seconds
					</p>
				</div>

				{/* Navegación de servicios */}
				<div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
					{services.map((service) => (
						<button
							key={service.id}
							onClick={() => setActiveService(service.id)}
							className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 flex items-center gap-2
                                ${
																	activeService === service.id
																		? "bg-gray-200 text-gray-900 shadow-sm"
																		: "bg-white text-gray-600 hover:bg-gray-100"
																}`}
						>
							<Image
								src={service.icon}
								alt=""
								width={16}
								height={16}
								className={`${activeService === service.id ? "opacity-100" : "opacity-70"}`}
							/>
							{service.name}
						</button>
					))}
				</div>

				<div className="mx-auto flex flex-col items-center">
					{/* Comparador de imágenes */}
					<div className="w-[300px] h-[300px] md:w-[465px] md:h-[465px] relative overflow-hidden rounded-2xl shadow-lg">
						<ReactCompareSlider
							changePositionOnHover={true}
							position={50}
							itemOne={
								<ReactCompareSliderImage
									src={currentService.beforeImage}
									alt={`Before ${currentService.name}`}
								/>
							}
							itemTwo={
								<ReactCompareSliderImage
									src={currentService.afterImage}
									alt={`After ${currentService.name} with Creatify`}
								/>
							}
							handle={
								<div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10">
									<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full shadow-md flex items-center justify-center">
										<MoveHorizontal className="text-orange-500" size={16} />
									</div>
								</div>
							}
						/>

						<div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-black/50 text-white px-1 py-0.5 md:px-2 md:py-1 text-xs md:text-sm font-medium z-20 rounded-md">
							Before
						</div>

						<div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black/50 text-white px-1 py-0.5 md:px-2 md:py-1 text-xs md:text-sm font-medium z-20 rounded-md">
							After
						</div>
					</div>

					{/* Descripción del servicio */}
					<div className="mt-8 md:mt-10 text-center max-w-2xl">
						<p className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-4">
							{currentService.title}
						</p>
						<p className="text-sm md:text-base text-gray-700">
							{currentService.description}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
