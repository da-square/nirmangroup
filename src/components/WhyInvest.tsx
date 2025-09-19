"use client";

import Slider from "react-slick";
import { whyInvestList } from "@/data/whyInvestData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WhyInvest() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20 bg-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Why Invest In <span className="text-yellow-400">Dholera?</span>
      </h1>

      <div className="max-w-7xl mx-auto px-6">
        <Slider {...settings}>
          {whyInvestList.map((item, index) => (
            <div key={index} className="px-4">
              {/* Full card with border + shadow */}
              <div className="w-full h-[300px] flex flex-col rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                {/* Image */}
                <div className="w-full h-[220px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex items-center justify-center bg-gray-50 px-3 py-2">
                  <p className="text-center font-semibold text-gray-800 text-sm leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
