"use client";

import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export function HeaderSection() {
	const router = useRouter();
	const { isSignedIn } = useAuth();

	const handleSignIn = () => {
		router.push("/sign-in");
	};

	const handleSignUp = () => {
		router.push("/sign-up");
	};

	return (
		<header className="fixed w-full bg-white z-50 py-4 border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-8 sm:px-28">
				{/* Estructura de 3 secciones con porcentajes específicos */}
				<div className="flex items-center">
					{/* Logo a la izquierda - 25% */}
					<div className="w-1/4 pl-5">
						<span className="font-bold text-2xl text-orange-500">Creatify</span>
					</div>

					{/* Links de navegación centralizados - 50% */}
					<div className="w-2/4">
						<nav className="flex justify-center space-x-8">
							<a
								href="#features"
								className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium"
							>
								Features
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
							<a
								href="#mission"
								className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium"
							>
								Our Mission
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
							<button
								onClick={() => router.push("/dashboard")}
								className="text-gray-700 hover:text-orange-600 font-medium text-sm"
							>
								Dashboard
							</button>
							<UserButton />
						</SignedIn>
					</div>
				</div>
			</div>
		</header>
	);
}
