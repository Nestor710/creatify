"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import GetStartedBtn from "@/components/ui/GetStartedBtn";
import { animate, createScope } from "animejs";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
	const { userId } = useAuth();
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const [animationComplete, setAnimationComplete] = useState({
		title: false,
		subtitle: false,
		button: false,
	});

	useEffect(() => {
		// Referencias a los elementos
		const titleElement = titleRef.current;
		const subtitleElement = subtitleRef.current;
		const buttonElement = buttonRef.current;
		const imageElement = imageRef.current;

		if (titleElement && subtitleElement && buttonElement && imageElement) {
			// Ocultar todos los elementos inicialmente
			titleElement.style.opacity = "0";
			subtitleElement.style.opacity = "0";
			buttonElement.style.opacity = "0";
			imageElement.style.opacity = "0";

			// Preparar título para animación
			const text = titleElement.textContent ?? "";
			const wrappedText = text
				.split(" ")
				.map((word) => {
					return `<span class='word' style='white-space: nowrap;'>${word
						.split("")
						.map(
							(char) =>
								`<span class='letter' style='opacity:0;display:inline-block'>${char}</span>`,
						)
						.join("")}</span>`;
				})
				.join(" ");

			titleElement.innerHTML = wrappedText;
			titleElement.style.opacity = "1";

			// Crear ámbito para anime.js
			const mainScope = createScope().add((self) => {
				// 1. Animación del título
				const titleAnimation = animate(".letter", {
					opacity: [0, 1],
					translateY: [10, 0],
					scale: [0.8, 1],
					delay: (el, i) => i * 20,
					duration: 100,
					easing: "easeOutExpo",
					complete: () => {
						setAnimationComplete((prev) => ({ ...prev, title: true }));

						// 2. Animación del subtítulo (comienza cuando termina el título)
						subtitleElement.style.opacity = "1";
						animate(subtitleElement, {
							opacity: [0, 1],
							translateY: [20, 0],
							duration: 800,
							easing: "easeOutQuad",
							complete: () => {
								setAnimationComplete((prev) => ({ ...prev, subtitle: true }));

								// 3. Animación del botón (comienza cuando termina el subtítulo)
								buttonElement.style.opacity = "1";
								animate(buttonElement, {
									opacity: [0, 1],
									translateY: [20, 0],
									scale: [0.95, 1],
									duration: 600,
									easing: "easeOutQuad",
									complete: () => {
										setAnimationComplete((prev) => ({ ...prev, button: true }));

										// 4. Animación de la imagen (comienza cuando termina el botón)
										imageElement.style.opacity = "1";
										animate(imageElement, {
											opacity: [0, 1],
											translateY: [30, 0],
											scale: [0.9, 1],
											duration: 800,
											easing: "easeOutQuad",
										});
									},
								});
							},
						});
					},
				});

				// Añadir métodos al scope
				self.add("titleAnimation", titleAnimation);
			});

			// Limpieza al desmontar
			return () => {
				if (mainScope) mainScope.revert();
			};
		}
	}, []);

	return (
		<section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-orange-100 via-orange-300/80 to-orange-500">
			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h1
						ref={titleRef}
						className="opacity-0 text-4xl md:text-5xl font-bold mb-6 text-gray-700 break-keep"
					>
						Image and Video Editing with AI in Seconds
					</h1>
					<p
						ref={subtitleRef}
						className="opacity-0 text-xl font-semibold text-gray-500 mb-10 max-w-2xl mx-auto"
					>
						Remove backgrounds, edit images and videos quickly with our
						artificial intelligence technology.
					</p>
					<div
						ref={buttonRef}
						className="opacity-0 flex flex-col sm:flex-row gap-4 justify-center"
					>
						<GetStartedBtn />
					</div>
				</div>

				<div ref={imageRef} className="opacity-0 max-w-5xl mx-auto mt-[-50px]">
					<div
						id="view-demo"
						className="aspect-[16/9] relative hover:!transform-none transition-all duration-500 w-full"
						style={{
							transform:
								"translate(0px, 0px) perspective(1000px) scale(1) skew(0deg, 0deg) rotateX(10deg) rotateY(0deg) rotateZ(0deg)",
						}}
					>
						<Link
							href={userId ? "/dashboard" : "/sign-in"}
							aria-label="Platform Dashboard"
							role="button"
							className="w-full h-full block"
						>
							<Image
								src="/hero.webp"
								alt="Platform demo"
								fill
								className="object-contain"
								priority
								sizes="(max-width: 768px) 100vw, 90vw"
								quality={100}
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
