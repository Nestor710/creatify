// src/components/PricingSection.tsx
"use client";

import { CheckCircle } from "lucide-react";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Planes simples y transparentes
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="p-6 rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all">
            <h3 className="text-lg font-medium mb-2">Gratis</h3>
            <div className="text-3xl font-bold mb-4">
              €0
              <span className="text-sm text-gray-500 font-normal">/mes</span>
            </div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">5 ediciones por día</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Calidad estándar</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  Eliminación de fondo básica
                </span>
              </li>
            </ul>
            <button 
              onClick={() => console.log("Plan gratuito seleccionado")}
              className="w-full px-6 py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
              Empezar gratis
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-6 rounded-lg bg-orange-500 text-white shadow-lg border border-orange-400 transform translate-y-[-8px] md:scale-105">
            <div className="inline-block px-3 py-1 text-xs font-medium bg-orange-600 rounded-full mb-2">
              RECOMENDADO
            </div>
            <h3 className="text-lg font-medium mb-2">Pro</h3>
            <div className="text-3xl font-bold mb-4">
              €9.99
              <span className="text-sm text-orange-200 font-normal">
                /mes
              </span>
            </div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-orange-200 flex-shrink-0" />
                <span>100 ediciones por mes</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-orange-200 flex-shrink-0" />
                <span>Calidad HD</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-orange-200 flex-shrink-0" />
                <span>Todas las herramientas de edición</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-orange-200 flex-shrink-0" />
                <span>Soporte prioritario</span>
              </li>
            </ul>
            <button 
              onClick={() => console.log("Plan Pro seleccionado")}
              className="w-full py-2 rounded-md bg-white text-orange-500 font-medium hover:bg-gray-100 transition-colors">
              Empezar ahora
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-6 rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all">
            <h3 className="text-lg font-medium mb-2">Empresa</h3>
            <div className="text-3xl font-bold mb-4">
              €29.99
              <span className="text-sm text-gray-500 font-normal">/mes</span>
            </div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Ediciones ilimitadas</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Calidad 4K</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">API de acceso</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  Gestor de cuenta dedicado
                </span>
              </li>
            </ul>
            <button 
              onClick={() => console.log("Plan Empresa seleccionado")}
              className="w-full px-6 py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
              Contactar ventas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}