"use client";

import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function HeaderSection() {
	const router = useRouter();
	const { isSignedIn } = useAuth();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleSignIn = () => {
		router.push("/sign-in");
	};

	const handleSignUp = () => {
		router.push("/sign-up");
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	function DashboardButton() {
		return (
			<button
				onClick={() => router.push("/dashboard")}
				className="text-gray-700 hover:text-orange-600 font-medium text-sm"
			>
				Dashboard
			</button>
		);
	}
	

	return (
		<header className="fixed w-full bg-white z-50 py-4 border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-28">
				{/* Mobile Navigation */}
				<div className="flex items-center justify-between lg:hidden">
					{/* Logo */}
					<div className="pl-0 sm:pl-2">
						<div className="flex items-center">
							<Image
								src="/logo-icon.png"
								alt="Creatify logo"
								width={25}
								height={25}
								className="mr-2"
								priority
							/>
							<span className="font-bold text-2xl text-orange-500">
								Creatify
							</span>
						</div>
					</div>

					{/* Hamburger button for mobile */}
					<button
						onClick={toggleMenu}
						className="text-gray-700 hover:text-orange-500"
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile navigation overlay */}
				{isMenuOpen && (
					<div className="lg:hidden mt-4">
						<nav className="flex flex-col space-y-3">
							<a
								href="#features"
								className="text-gray-600 hover:text-orange-500 px-2 py-2 text-base font-medium"
								onClick={() => setIsMenuOpen(false)}
							>
								Features
							</a>
							<a
								href="#how-it-works"
								className="text-gray-600 hover:text-orange-500 px-2 py-2 text-base font-medium"
								onClick={() => setIsMenuOpen(false)}
							>
								How It Works
							</a>
							<a
								href="#pricing"
								className="text-gray-600 hover:text-orange-500 px-2 py-2 text-base font-medium"
								onClick={() => setIsMenuOpen(false)}
							>
								Pricing
							</a>
							<a
								href="#mission"
								className="text-gray-600 hover:text-orange-500 px-2 py-2 text-base font-medium"
								onClick={() => setIsMenuOpen(false)}
							>
								Our Mission
							</a>
						</nav>

						<div className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-3">
							<SignedOut>
								<button
									onClick={() => {
										handleSignIn();
										setIsMenuOpen(false);
									}}
									className="w-full flex justify-center text-gray-700 hover:text-orange-600 font-medium text-base py-2"
								>
									Log in
								</button>
								<button
									onClick={() => {
										handleSignUp();
										setIsMenuOpen(false);
									}}
									className="w-full px-4 py-2 rounded-md border border-gray-200 font-medium text-base text-gray-700 hover:bg-gray-50 transition-colors"
								>
									Sign up
								</button>
							</SignedOut>
							<SignedIn>
								<div className="flex justify-start py-2 px-2 gap-x-3">
									<UserButton/>
									<DashboardButton/>
								</div>
							</SignedIn>
						</div>
					</div>
				)}

				{/* Desktop Navigation */}
				<div className="hidden lg:flex items-center">
					{/* Logo a la izquierda - 25% */}
					<div className="w-1/4 pl-5">
						<div className="flex items-center">
							<Image
								src="/logo-icon.png"
								alt="Creatify logo"
								width={25}
								height={25}
								className="mr-2"
								priority
							/>
							<span className="font-bold text-2xl text-orange-500">
								Creatify
							</span>
						</div>
					</div>

					{/* Links de navegación centralizados - 50% */}
					<div className="w-2/4">
						<nav className="flex justify-center space-x-8">
							<a
								href="#features"
								className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium"
							>
								Main Features
							</a>
							<a
								href="#how-it-works"
								className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium"
							>
								How It Works
							</a>
							<a
								href="#pricing"
								className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium"
							>
								Pricing
							</a>
						</nav>
					</div>

					{/* Botones de autenticación a la extrema derecha - 25% */}
					<div className="w-1/4 flex justify-end items-center space-x-4 pr-5">
						<SignedOut>
							<button
								onClick={handleSignIn}
								className="text-gray-700 hover:text-orange-600 font-medium text-sm"
							>
								Log in
							</button>
							<button
								onClick={handleSignUp}
								className="ml-4 px-4 py-2 rounded-md border border-gray-200 font-medium text-sm text-gray-700 hover:bg-gray-50 transition-colors"
							>
								Sign up
							</button>
						</SignedOut>
						<SignedIn>
							<UserButton />
							<DashboardButton/>
						</SignedIn>
					</div>
				</div>
			</div>
		</header>
	);
}
