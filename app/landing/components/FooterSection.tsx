// src/components/FooterSection.tsx
import { Twitter, Instagram, Facebook } from "lucide-react";

export function FooterSection() {
	return (
		<footer className="py-10 bg-white text-gray-600">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-6 mb-8">
					<div>
						<div className="mb-4 font-bold text-xl text-orange-500">
							Creatify
						</div>
						<p className="text-sm">
							Transformando la edición de imágenes y videos con inteligencia
							artificial
						</p>
					</div>
					<div>
						<h4 className="font-medium text-gray-800 mb-3 text-sm">Producto</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:text-orange-500 transition-colors">
									Características
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-orange-500 transition-colors">
									Precios
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-orange-500 transition-colors">
									Tutoriales
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-orange-500 transition-colors">
									Estado del servicio
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-medium text-gray-800 mb-3 text-sm">Empresa</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:text-orange-500 transition-colors">
									Sobre nosotros
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-orange-500 transition-colors">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-orange-500 transition-colors">
									Empleo
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-orange-500 transition-colors">
									Contacto
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-medium text-gray-800 mb-3 text-sm">Legal</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:text-orange-500 transition-colors">
									Términos de servicio
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-orange-500 transition-colors">
									Política de privacidad
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-orange-500 transition-colors">
									Cookies
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
					<p className="text-sm">
						© 2025 Creatify. Todos los derechos reservados.
					</p>
					<div className="flex gap-4 mt-4 md:mt-0">
						<a
							href="#"
							className="text-gray-500 hover:text-orange-500 transition-colors"
						>
							<Twitter size={20} />
						</a>
						<a
							href="#"
							className="text-gray-500 hover:text-orange-500 transition-colors"
						>
							<Instagram size={20} />
						</a>
						<a
							href="#"
							className="text-gray-500 hover:text-orange-500 transition-colors"
						>
							<Facebook size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
