"use client";

import GetStartedBtn from "@/components/ui/GetStartedBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function CTASection() {
    const router = useRouter();
    
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
                    <GetStartedBtn />
                    <Link
                        href="#demos"
                        className="px-6 py-3 rounded-full border border-orange-500 text-orange-500 font-medium hover:bg-orange-100 hover:scale-110 transition-all duration-300"
                    >
                        View Demos
                    </Link>
                </div>
            </div>
        </section>
    );
}