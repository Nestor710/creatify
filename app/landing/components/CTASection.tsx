// src/components/CTASection.tsx
"use client";

import { ChevronRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-16 bg-gradient-to-r from-orange-100 to-cream-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Ready to transform your images and videos?
                </h2>
                <p className="mb-8 max-w-xl mx-auto text-gray-700">
                    Join thousands of people already improving their
                    content with our technology
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => console.log("Start now")}
                        className="px-6 py-3 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors flex items-center justify-center"
                    >
                        Get Started <ChevronRight className="ml-2" size={16} />
                    </button>
                    <button
                        onClick={() => console.log("View demos")}
                        className="px-6 py-3 rounded-md border border-orange-500 text-orange-500 font-medium hover:bg-orange-100 transition-colors"
                    >
                        View Demos
                    </button>
                </div>
            </div>
        </section>
    );
}