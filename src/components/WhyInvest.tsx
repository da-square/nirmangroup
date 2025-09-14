"use client";

import Slider from "react-slick";
import { whyInvestList } from "@/data/whyInvestData";
import { Card, CardBody, CardFooter } from "@heroui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WhyInvest() {
  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // enable auto-play
    autoplaySpeed: 1000, // 3 seconds
    pauseOnHover: true, // pause when user hovers
    arrows: false, // hide arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Why Invest In <span className="text-yellow-400">Dholera?</span>
      </h1>

      <div className="max-w-7xl mx-auto px-6">
        <Slider {...settings}>
          {whyInvestList.map((item, index) => (
            <div key={index} className="px-3">
              <Card
                isPressable
                shadow="md"
                className="rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl bg-white"
              >
                <CardBody className="p-0">
                  <div className="w-full h-[220px] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </CardBody>
                <CardFooter className="justify-center bg-gray-100 p-3">
                  <p className="text-center font-semibold text-gray-800 text-sm">
                    {item.title}
                  </p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
