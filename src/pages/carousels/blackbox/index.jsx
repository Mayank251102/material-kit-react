import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "../blackbox/styles.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";

//import bgImage from "../constants/Cardassets/SpaceCity.jpg";

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

// @mui material components

// SPIE ANDC components
//import MKBox from "components/MKBox";

const Blackbox = () => {
  return (
    <Swiper
      className="fullpage-swiper"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <SwiperSlide>
        <div
          className="slide-bg"
          style={{
            backgroundImage: `url('https://source.unsplash.com/random/1600x900/?nature,landscape')`,
          }}
        >
          <div className="slide-content">
            <h1>Slide 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat, velit a
              pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slide-bg"
          style={{
            backgroundImage: `url('https://source.unsplash.com/random/1600x900/?technology,future')`,
          }}
        >
          <div className="slide-content">
            <h1>Slide 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat, velit a
              pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slide-bg"
          style={{
            backgroundImage: `url('https://source.unsplash.com/random/1600x900/?city,architecture')`,
          }}
        >
          <div className="slide-content">
            <h1>Slide 3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat, velit a
              pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <div className="swiper-button-prev" slot="button-prev"></div>
      <div className="swiper-button-next" slot="button-next"></div>
    </Swiper>
  );
};

export default Blackbox;
