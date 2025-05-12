"use client";

import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";

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
		<header className="fixed w-full bg-white/95 backdrop-blur-md z-50 py-4 border-b border-gray-100">
			<div className="container mx-auto px-4 flex justify-between items-center">
				<div className="flex items-center gap-2">
					<span className="font-bold text-2xl text-orange-500">Creatify</span>
				</div>
				<nav className="hidden md:flex gap-8">
					<a
						href="#features"
						className="font-medium text-gray-700 hover:text-orange-500"
					>
						Funciones
					</a>
					<a
						href="#how-it-works"
						className="font-medium text-gray-700 hover:text-orange-500"
					>
						Cómo funciona
					</a>
					<a
						href="#pricing"
						className="font-medium text-gray-700 hover:text-orange-500"
					>
						Precios
					</a>
					<a
						href="#testimonials"
						className="font-medium text-gray-700 hover:text-orange-500"
					>
						Opiniones
					</a>
				</nav>
				<div className="flex gap-3">
					<SignedOut>
						<button
							onClick={handleSignIn}
							className="px-4 py-2 rounded-md border border-gray-200 font-medium text-gray-700 hover:bg-gray-50 transition-colors"
						>
							Iniciar sesión
						</button>
						<button
							onClick={handleSignUp}
							className="px-4 py-2 rounded-md bg-orange-500 font-medium text-white hover:bg-orange-600 transition-colors"
						>
							Registrarse
						</button>
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</div>
		</header>
	);
}
