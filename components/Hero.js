import React, { useState } from "react";import SlideItems from "./SlideItems";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
const Hero = () => {
  const datas = [
    {
      title: "Halo ini header 1",
      description: "Ini description 1",
      img: "https://images.unsplash.com/photo-1600762849691-4b51bc94009c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Halo ini header 2",
      description: "Ini description 2",
      img: "https://images.unsplash.com/photo-1561718541-42d8a5e5792b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    },
    {
      title: "Halo ini header 3",
      description: "Ini description 3",
      img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Halo ini header 4",
      description: "Ini description ",
      img: "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ];

  return (
    <div style={{ fontFamily: "Cosi Azure" }}>
      <div className="container-fluid" style={{ backgroundColor: "#0f0f0f" }}>
        <div className="row">
          <Swiper
            breakpoints={{
              320: {
                // width: 576,
                slidesPerView: 1,
              },
              1280: {
                // width: 768,
                slidesPerView: 1,
              },
            }}
            slidesPerView={2}
            spaceBetween={0}
            onAutoplayPause={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {datas.map((data) => {
              return (
                <SwiperSlide>
                  <SlideItems
                    title={data.title}
                    description={data.description}
                    img={data.img}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
