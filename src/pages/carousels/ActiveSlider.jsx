import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
//import { RxArrowTopRight } from "react-icons/rx";
//import { ServiceData } from "pages/carousels/constants/index.js";
import "../carousels/style/styles.css";

export default function ActiveSlider() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#ffffff",
          "--swiper-pagination-color": "#ffffff",
          backgroundColor: "#DC2F0A",
        }}
        speed={600}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        freeMode={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="max-w-[100%] lg:max-w-[80%] myCar"
      >
        <SwiperSlide className="car1 car">BBBB_BB</SwiperSlide>
        <SwiperSlide className="car2 car"></SwiperSlide>
        <SwiperSlide className="car3 car"></SwiperSlide>
        <SwiperSlide className="car4 car">BBBB_BB</SwiperSlide>
        <SwiperSlide className="car5 car"></SwiperSlide>
        <SwiperSlide className="car6 car"></SwiperSlide>
        <SwiperSlide className="car7 car">BBBB_BB</SwiperSlide>
        <SwiperSlide className="car8 car"></SwiperSlide>
        <SwiperSlide className="car9 car"></SwiperSlide>
      </Swiper>
    </>
  );
}
