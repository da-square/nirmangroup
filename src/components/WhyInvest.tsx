import { whyInvestList } from "@/data/whyInvestData";
import { Card, CardBody, CardFooter } from "@heroui/react";

export default function WhyInvest() {

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Why Invest In <span className="text-yellow-400">Dholera?</span>
      </h1>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
        {whyInvestList.map((item, index) => (
          <Card
            key={index}
            isPressable
            shadow="md"
            className="rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <CardBody className="p-0">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[180px] object-cover"
              />
            </CardBody>
            <CardFooter className="justify-center bg-white p-3">
              <p className="text-center font-semibold text-gray-800 text-sm">
                {item.title}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
