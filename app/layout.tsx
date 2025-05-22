import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Creatify | AI-powered image generator",
	description: "AI-powered image generator for creative professionals",
	keywords: ["AI", "image generator", "creative professionals", "AI-powered", "image generator", "AI-powered image generator", "AI-powered image generator for creative professionals"],
	openGraph: {
		title: "Creatify | AI-powered image generator",
		description: "AI-powered image generator for creative professionals",
		type: "website",
		locale: "en_US",
		siteName: "Creatify",
		images: [
			{
				url: "https://creatify.vercel.app/hero.webp",
				width: 1200,
				height: 630,
				alt: "Creatify | AI-powered image generator",
			},
		]
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				variables: { colorPrimary: "#fb923c" },
			}}
		>
			<html lang="en">
				<body className={cn("font-inter antialiased", inter.variable)}>
					<Providers>{children}</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
