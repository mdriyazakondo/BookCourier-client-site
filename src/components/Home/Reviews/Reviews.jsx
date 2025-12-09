import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { use } from "react";
import ReviewCard from "./ReviewCard";
import Container from "../../../shared/Container/Container";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <Container>
      <div className="">
        <div className="mb-8 flex items-center justify-center flex-col space-y-2">
          <h3 className="text-center text-3xl font-bold text-purple-600">
            What our customers are saying
          </h3>
          <p className="text-center">
            Fast and reliable book delivery right to your doorstep.
            <br className="hidden md:block" /> Experience timely deliveries,
            safe packaging, and excellent customer service with BookCourier!
          </p>
        </div>

        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 25,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Reviews;
