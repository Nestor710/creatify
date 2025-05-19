import Image from "next/image";

export function FooterSection() {
	return (
		<footer className="py-8 bg-gradient-to-r from-orange-50 to-white border-t border-orange-100 text-gray-700">
			<div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-28">
				{/* Diseño móvil - todo centrado en columna */}
				<div className="lg:hidden flex flex-col items-center">
					<div className="flex items-center mb-3">
						<Image 
							src="/logo-icon.png" 
							alt="Creatify" 
							className="h-6 w-6 mr-2" 
							width={25}
							height={25}
						/>
						<span className="text-orange-500 font-bold text-xl">Creatify</span>
					</div>
					<p className="text-xs text-gray-500 mb-4">
						© 2025 Creatify. All rights reserved.
					</p>

					{/* Separador móvil */}
					<div className="w-20 h-0.5 bg-gradient-to-r from-orange-300 to-orange-100 rounded mx-auto mb-4"></div>

					{/* Créditos en móvil */}
					<div className="flex flex-col items-center text-center">
						<p className="text-sm mb-2">🛠️ Built by</p>
						<div className="flex flex-wrap justify-center">
							<a
								href="https://nestordev.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Néstor Portafolio"
								className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
							>
								Néstor
							</a>
							<span className="px-1 text-sm">&</span>
							<a
								href="https://github.com/leonardaraujo"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Leonardo GitHub"
								className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
							>
								Leonardo
							</a>
						</div>
						<p className="text-sm mt-2">for educational purposes.</p>
					</div>
				</div>

				{/* Diseño PC - en una sola línea con grid */}
				<div className="hidden lg:grid grid-cols-3 items-center text-center py-2">
					{/* Sección izquierda */}
					<div className="flex justify-start items-center space-x-2">
						<Image 
							src="/logo-icon.png" 
							alt="Creatify" 
							className="h-6 w-6" 
							width={25}
							height={25}
						/>
						<span className="text-orange-500 font-bold text-xl">Creatify</span>
					</div>

					{/* Sección central */}
					<p className="text-xs text-gray-500">
						© 2025 Creatify. All rights reserved.
					</p>

					{/* Sección derecha */}
					<div className="flex h-full text-sm self-center justify-self-end">
						<div className="whitespace-nowrap">
							<span>🛠️ Built by<br /></span>
							<a
								href="https://nestordev.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-500 hover:text-orange-600 font-medium"
							>
								Néstor
							</a>
							<span> & </span>
							<a
								href="https://github.com/leonardaraujo"
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-500 hover:text-orange-600 font-medium"
							>
								Leonardo<br />
							</a>
							<span> for educational purposes.</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
