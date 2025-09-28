"use client";

import { amenities } from "@/data/amenities";
import Image from "next/image";

export default function Amenities() {
    return (
        <section className="py-20 bg-gray-900 text-gray-200">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                Our <span className="text-green-400">Amenities</span>
            </h1>

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {amenities.map((item, index) => (
                    <div
                        key={index}
                        className="group bg-gray-800 text-gray-200 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-slate-700 hover:text-slate-300"
                    >
                        {/* Image */}
                        <div className="mb-6 w-20 h-20 relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain transition-transform duration-300 group-hover:scale-110 invert"
                            />
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-semibold text-blue-300 mb-4">{item.title}</h2>

                        {/* Description */}
                        <p className="text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
