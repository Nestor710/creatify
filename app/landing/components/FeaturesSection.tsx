// src/components/FeaturesSection.tsx
import { ImageOff, Edit, Play, Zap } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Funcionalidades principales
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Descubre todas las herramientas que tenemos para ti
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg bg-orange-50 shadow-sm border border-orange-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-500">
              <ImageOff size={22} />
            </div>
            <h3 className="text-lg font-medium mb-2">
              Eliminación de fondos
            </h3>
            <p className="text-gray-700 text-sm">
              Remueve automáticamente el fondo de cualquier imagen en segundos
              con precisión profesional.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg bg-orange-50 shadow-sm border border-orange-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-500">
              <Edit size={22} />
            </div>
            <h3 className="text-lg font-medium mb-2">Edición rápida</h3>
            <p className="text-gray-700 text-sm">
              Herramientas de edición automatizadas para mejorar tus imágenes
              en un solo clic.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg bg-orange-50 shadow-sm border border-orange-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-500">
              <Play size={22} />
            </div>
            <h3 className="text-lg font-medium mb-2">Edición de video</h3>
            <p className="text-gray-700 text-sm">
              Aplica efectos y mejoras a tus videos de forma automática con
              nuestra IA.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-lg bg-orange-50 shadow-sm border border-orange-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-500">
              <Zap size={22} />
            </div>
            <h3 className="text-lg font-medium mb-2">Generación con IA</h3>
            <p className="text-gray-700 text-sm">
              Crea elementos adicionales o mejora tus imágenes con nuestra
              tecnología de IA avanzada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}