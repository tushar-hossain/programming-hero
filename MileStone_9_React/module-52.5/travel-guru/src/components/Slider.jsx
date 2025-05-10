import React, { useRef, useState } from "react";
import { Link } from "react-router";

const Slider = ({ place }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeId, setActiveId] = useState(1);

  const scrollToCard = (index) => {
    setActiveId(index + 1);
    setActiveIndex(index);
    const container = containerRef.current;

    const cardWidth = container.children[0].offsetWidth + 16;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const prev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : place.length - 1;
    scrollToCard(newIndex);
  };

  const next = () => {
    const newIndex = (activeIndex + 1) % place.length;
    scrollToCard(newIndex);
  };

  return (
    <div className="relative w-full flex items-center gap-15 mx-auto">
      <div>
        {place.map((pl, index) => {
          return (
            <div key={pl.id}>
              <h1 className="text-white text-3xl font-bold">
                {activeIndex === index ? pl.placeName : ""}
              </h1>
              <h1 className="mt-3 text-base-300">
                {activeIndex === index ? pl.description : ""}
              </h1>
            </div>
          );
        })}

        <Link to={`/booking/${activeId}`} className="btn bg-[#F9A51A] px-10">
          Booking
        </Link>
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        <div
          ref={containerRef}
          className="flex overflow-x-auto no-scrollbar space-x-4 py-4 px-2 scroll-smooth"
        >
          {place.map((img, index) => (
            <div
              key={index}
              className={`min-w-[200px] rounded-xl shadow-md border-4 transition-all duration-300 ${
                activeIndex === index
                  ? "border-yellow-400"
                  : "border-transparent"
              }`}
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-[216px] h-[416px] object-fit rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="bottom-4 left-4 flex space-x-2 ">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow"
          >
            &#x276E;
          </button>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow"
          >
            &#x276F;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
