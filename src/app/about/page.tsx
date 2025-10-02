"use client";

import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact"); // Navigate without reloading
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-200 via-green-100 to-sky-300 text-gray-800">
      {/* Decorative blurred shapes */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-sky-300/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-green-300/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-20 relative z-10">
        {/* Company Details */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-700">
            About <span className="text-green-600">Dholera Nirman Group</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            At the forefront of real estate development in{" "}
            <span className="font-semibold">Dholera Special Investment Region (SIR)</span>,  
            we specialize in premium residential plots, commercial properties,  
            and industrial lands — unlocking opportunities in India’s first smart city.
          </p>
        </div>

        {/* Founder Section */}
        <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-2xl shadow-lg p-10 text-center">
          <h2 className="text-3xl font-bold text-sky-700">About Our Founder</h2>
          <h3 className="mt-4 text-xl font-semibold text-green-700">Mr. Mahendra Rajput</h3>
          <p className="text-sm text-gray-600">Director, Dholera Nirman Group</p>
          <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            With over 18 years of diverse experience across banking, insurance,  
            and real estate, <span className="font-semibold">Mr. Mahendra Rajput</span> serves as the Director of  
            Dholera Nirman Group. Specializing in industrial land acquisitions  
            and the development of residential and semi-commercial plots, he has  
            been instrumental in establishing the firm as a leader in Dholera’s  
            real estate market.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Mr. Rajput’s strategic vision and commitment to stakeholder-centric  
            practices have consistently delivered value, fostering trust and  
            sustainable growth. His expertise and leadership continue to shape  
            the region’s development, solidifying his reputation as a  
            transformative force in the industry.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-2xl shadow-lg p-8 hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-bold text-sky-700">Our Mission</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To provide premier plots and properties that meet the highest standards  
              of quality and future potential, while maintaining integrity and delivering  
              an unmatched client experience.
            </p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-2xl shadow-lg p-8 hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-bold text-green-700">Our Vision</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To be a trusted leader in real estate, delivering exceptional value  
              and quality properties in Dholera SIR, contributing to its evolution  
              as India’s first greenfield smart city.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-sky-700">Our Core Values</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            These principles define how we work, build trust, and deliver excellence  
            in every project we undertake.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We believe in transparency, honesty, and ethical practices in every deal.",
              },
              {
                title: "Innovation",
                desc: "We embrace modern solutions and smart planning for sustainable growth.",
              },
              {
                title: "Commitment",
                desc: "We are dedicated to delivering value and building long-term relationships.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-bold text-green-700">{item.title}</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700">Why Choose Us</h2>
          <p className="mt-4 text-gray-700">Here’s what makes us stand apart:</p>
          <div className="mt-10 grid md:grid-cols-4 gap-8">
            {[
              "Prime Location Properties",
              "Transparent Dealings",
              "Trusted by Investors",
              "Future-Ready Developments",
            ].map((item, idx) => (
              <div
                key={idx}
                className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
              >
                <p className="font-medium text-sky-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-sky-700">Get Started with Us</h2>
          <p className="mt-4 text-gray-700">
            Have questions? Reach out today and explore opportunities with Dholera Nirman Group.
          </p>
          <button
            onClick={handleContactClick}
            className="mt-6 inline-block px-8 py-4 rounded-2xl text-white font-medium bg-gradient-to-r from-sky-500 to-green-400 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
