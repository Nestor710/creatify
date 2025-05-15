"use client";

import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from "react-compare-slider";
import { MoveHorizontal } from "lucide-react";

export function ComparisonSection() {
    return (
        <section id="comparison" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        See the Difference
                    </h2>
                    <p className="text-lg text-gray-700 max-w-xl mx-auto">
                        Our AI technology transforms your images in seconds
                    </p>
                </div>

                <div className="mx-auto flex flex-col items-center">
                    <div className="w-[300px] h-[300px] md:w-[465px] md:h-[465px] relative overflow-hidden">
                        <ReactCompareSlider
                            changePositionOnHover={true}
                            position={50}
                            itemOne={
                                <ReactCompareSliderImage
                                    src="/assets/images/dog_before.webp"
                                    alt="Before editing"
                                />
                            }
                            itemTwo={
                                <ReactCompareSliderImage
                                    src="/assets/images/dog_after_square.webp"
                                    alt="After editing with Creatify"
                                />
                            }
                            handle={
                                <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-white shadow-md flex items-center justify-center">
                                        <MoveHorizontal className="text-orange-500" size={16} />
                                    </div>
                                </div>
                            }
                        />

                        <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-black/50 text-white px-1 py-0.5 md:px-2 md:py-1 text-xs md:text-sm font-medium z-20">
                            Before
                        </div>

                        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black/50 text-white px-1 py-0.5 md:px-2 md:py-1 text-xs md:text-sm font-medium z-20">
                            After
                        </div>
                    </div>

                    <div className="mt-6 md:mt-8 text-center">
                        <p className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-4">
                            Remove backgrounds with one click
                        </p>
                        <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
                            Our advanced AI technology can detect and remove backgrounds from
                            any image, giving you perfect results every time. Drag the slider
                            to see the difference.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}