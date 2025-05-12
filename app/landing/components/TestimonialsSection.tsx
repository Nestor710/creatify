// src/components/TestimonialsSection.tsx
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Miles de personas ya confían en nuestra tecnología
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="p-6 rounded-lg bg-white shadow-sm border border-orange-100 hover:shadow-md transition-all">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="/avatar-1.jpg"
                  alt="María García"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">María García</h4>
                <p className="text-sm text-gray-500">Diseñadora gráfica</p>
              </div>
            </div>
            <div className="flex text-orange-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm">
              &quot;Esta herramienta ha revolucionado mi flujo de trabajo. Edito
              imágenes en segundos que antes me tomaban horas.&quot;
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 rounded-lg bg-white shadow-sm border border-orange-100 hover:shadow-md transition-all">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="/avatar-2.jpg"
                  alt="Carlos Rodríguez"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Carlos Rodríguez</h4>
                <p className="text-sm text-gray-500">Director de marketing</p>
              </div>
            </div>
            <div className="flex text-orange-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm">
              &quot;La eliminación de fondos es increíblemente precisa. Nos ha
              ahorrado cientos de horas de trabajo manual.&quot;
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6 rounded-lg bg-white shadow-sm border border-orange-100 hover:shadow-md transition-all">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="/avatar-3.jpg"
                  alt="Laura Martínez"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Laura Martínez</h4>
                <p className="text-sm text-gray-500">Creadora de contenido</p>
              </div>
            </div>
            <div className="flex text-orange-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm">
              &quot;La edición de videos con IA es asombrosa. En minutos tengo
              videos listos para publicar en mis redes.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}