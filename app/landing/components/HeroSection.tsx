
"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import GetStartedBtn from "@/components/ui/GetStartedBtn";

export function HeroSection() {
	const { userId } = useAuth();

	return (
		<section style={{maskImage: "linear-gradient(black 95%, transparent)"}} className="pt-32 pb-20 bg-[url('/hero-image.png')]">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center">
					<h1 
					className="text-4xl md:text-5xl font-bold mb-6 gradient-orange-text">
						Image and Video Editing with AI in Seconds
					</h1>
					<p className="text-xl font-semibold text-gray-700/80 mb-10 max-w-2xl mx-auto">
						Remove backgrounds, edit images and videos quickly with our
						artificial intelligence technology.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<GetStartedBtn />
					</div>
				</div>

				<div className="max-w-5xl mx-auto rounded-lg overflow-hidden ">
					<div id="view-demo" className="aspect-[16/9] relative hover:!transform-none transition-all duration-500" style={{transform: "translate(0px, 0px) perspective(8116.92px) scale(1) skew(0deg, 0deg) rotateX(30deg) rotateY(0deg) rotateZ(0deg)"}}>
						<Link href={userId ? "/dashboard" : "/sign-in"} aria-label="Platform Dashboard" role="button">
							<Image
								src="/hero.webp"
								alt="Platform demo"
								fill
								className="object-cover"
								priority
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}