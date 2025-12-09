import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Container from "../../../shared/Container/Container";
import Loading from "../../../shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const HeroSection = () => {
  const axiosSecure = useAxiosSecure();
  const { data: sliders = [], isLoading } = useQuery({
    queryKey: ["latest"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/latest`);
      return res.data;
    },
  });

  const slidersData = sliders.filter((d) => d.status === "published");

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-[1500px] mx-auto px-4 md:px-6 lg:px-0 bg-white border border-gray-200 rounded-md">
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slidersData?.slice(0, 5).map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white shadow-md rounded-lg p-6 md:p-10 lg:p-14">
              {/* Book Info */}
              <div className="flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-5 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">
                  {slide.bookName}
                </h2>

                <p className="text-gray-700 font-medium text-lg md:text-xl">
                  Author: {slide.authorName}
                </p>

                {slide.genre && (
                  <p className="text-gray-600 text-lg md:text-xl">
                    Genre: {slide.genre}
                  </p>
                )}

                <p className="text-gray-600 text-base md:text-lg lg:text-xl">
                  {slide.description?.slice(0, 120)}...
                </p>

                <p className="font-semibold text-green-600 text-lg md:text-xl">
                  Price: ${slide.price}
                </p>

                <Link to={`/books/${slide._id}`}>
                  <button className="bg-green-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-green-700 transition text-sm md:text-base">
                    View Details
                  </button>
                </Link>
              </div>

              {/* Book Image */}
              <div className="flex justify-center relative">
                <img
                  src={slide.image}
                  alt={slide.bookName}
                  className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full object-contain"
                />

                {/* Badge */}
                <p className="absolute right-2 top-2 py-1 px-2 md:px-3 bg-green-500 text-white rounded-full text-xs md:text-sm">
                  New Product & Popular
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
