import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export function CarouselElement({ slides }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [current, slides.length]);

  return (
    <div className="overflow-hidden relative rounded-md">
      <div
        className="flex transition ease-in-out duration-400"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img
            className="object-contain w-full h-full"
            key={index}
            src={s}
            alt={`slide-${index}`}
          />
        ))}
      </div>
      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10">
        <button
          onClick={() =>
            setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
          }
        >
          <IoIosArrowBack size={40} />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowForward size={40} />
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            key={"circle" + i}
            className={`rounded-full w-5 h-5 ${
              i === current ? "bg-white" : "bg-indigo-900"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
