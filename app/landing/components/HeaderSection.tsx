"use client";

import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Items = [
	{
		href: "#tools",
		label: "Tools",
	},
	{
		href: "#features",
		label: "Features",
	},
	{
		href: "#how-it-works",
		label: "How It Works",
	},
	{
		href: "#pricing",
		label: "Pricing",
	},
];

export function HeaderSection() {
	const router = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleSignIn = () => {
		router.push("/sign-in");
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	function DashboardButton() {
		return (
			<button
				onClick={() => router.push("/dashboard")}
				className="text-orange-600 hover:scale-110 transition-all duration-300 font-medium text-md"
			>
				Dashboard
			</button>
		);
	}

	return (
		<header className="fixed top-0 w-full bg-transparent backdrop-blur-lg z-50 py-4">
			<div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-28">
				<div className="flex items-center justify-between lg:hidden">
					<div className="pl-0 sm:pl-2">
						<Link href="#demos" className="flex items-center">
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
						</Link>
					</div>
					<button
						onClick={toggleMenu}
						className="text-gray-700 hover:text-orange-500"
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
				{isMenuOpen && (
					<div className="lg:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-orange-100 p-4">
						<nav className="flex flex-col space-y-3">
							{Items.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="text-gray-600 hover:text-orange-500 px-2 py-2 text-base font-medium"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.label}
								</a>
							))}
						</nav>

						<div className="mt-6 pt-4 border-t border-orange-200 flex flex-col space-y-3">
							<SignedOut>
								<button
									onClick={() => {
										handleSignIn();
										setIsMenuOpen(false);
									}}
									className="w-full flex justify-center bg-white text-orange-600 hover:bg-orange-50 font-medium text-base py-3 rounded-md transition-colors border border-orange-200"
								>
									Log in
								</button>
							</SignedOut>
							<SignedIn>
								<div className="flex justify-start py-2 px-2 gap-x-3">
									<UserButton />
									<DashboardButton />
								</div>
							</SignedIn>
						</div>
					</div>
				)}
				<div className="hidden lg:flex items-center">
					<div className="w-1/4 pl-5">
						<Link href="#demos" className="flex items-center">
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
						</Link>
					</div>
					<div className="w-2/4">
						<nav className="flex justify-center space-x-8">
							{Items.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="text-gray-600 hover:text-orange-500 hover:scale-110 transition-all duration-300 px-3 py-2 text-sm font-medium"
								>
									{item.label}
								</a>
							))}
						</nav>
					</div>
					<div className="w-1/4 flex justify-end items-center space-x-4 pr-5">
						<SignedOut>
							<button
								onClick={handleSignIn}
								className="px-4 py-2 bg-white text-orange-600 hover:bg-orange-50 font-medium text-sm rounded-md transition-colors border border-orange-200"
							>
								Log in
							</button>
						</SignedOut>
						<SignedIn>
							<DashboardButton />
							<UserButton />
						</SignedIn>
					</div>
				</div>
			</div>
		</header>
	);
}
