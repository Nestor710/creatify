"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Captions, List } from "lucide-react";

import "@/styles/button.css";

type ViewMode = "card" | "table";

interface ViewToggleProps {
	viewMode: ViewMode;
	onChange: (viewMode: ViewMode) => void;
	className?: string;
	disabled?: boolean;
}

export function ViewToggle({
	viewMode,
	onChange,
	className,
	disabled = false,
}: ViewToggleProps) {
	return (
		<div
			className={cn(
				"btn relative flex h-10 w-36 rounded-full p-1 bg-orange-400",
				className,
			)}
			style={{
				// Usamos pointer-events para bloquear interacción sin cambiar apariencia
				pointerEvents: disabled ? "none" : "auto",
			}}
		>
			<div className="absolute inset-0 z-0 flex rounded-full p-1.5">
				<motion.div
					className="h-full w-1/2 rounded-full bg-orange-500 shadow-sm"
					initial={false}
					animate={{
						x: viewMode === "card" ? 0 : "100%",
					}}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 30,
					}}
				/>
			</div>

			<button
				type="button"
				className={cn(
					"relative z-10 flex h-full w-1/2 items-center justify-center rounded-full text-sm font-medium transition-colors",
					viewMode === "card" ? "text-white" : "text-orange-500",
				)}
				onClick={() => !disabled && onChange("card")}
				disabled={disabled}
				aria-pressed={viewMode === "card"}
			>
				<Captions className="h-6 w-6" />
				<span className="sr-only">Card View</span>
			</button>

			<button
				type="button"
				className={cn(
					"relative z-10 flex h-full w-1/2 items-center justify-center rounded-full text-sm font-medium transition-colors",
					viewMode === "table" ? "text-white" : "text-orange-500",
				)}
				onClick={() => !disabled && onChange("table")}
				disabled={disabled}
				aria-pressed={viewMode === "table"}
			>
				<List className="h-6 w-6" />
				<span className="sr-only">Table View</span>
			</button>
		</div>
	);
}
