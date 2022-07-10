import React from "react";
import Image from "next/image";
import CollaborationItems from "./CollaborationItems";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import { useState } from "react";

const Collaborations = () => {
  const [memberTeams, setMemberTeams] = useState([
    {
      name: "Schultz D.",
      urlPics:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      roles: "WEB DEVELOPER",
    },
    {
      name: "William",
      urlPics:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      roles: "DESIGNER",
    },
    {
      name: "Sarah",
      urlPics:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      roles: "DESIGNER",
    },
    {
      name: "Celestia Indah",
      urlPics:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      roles: "ACCOUNTANT",
    },
    {
      name: "Samrmdhn",
      urlPics:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      roles: "HR",
    },
    {
      name: "Plato Di Maria",
      urlPics:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      roles: "PUBLIC RELATION",
    },
  ]);

  const length = memberTeams.length;

  return (
    <div>
      <div className="container-fluid mybg-primary g-0">
        <div className="row g-0">
          <div className="col-lg-6 p-4" style={{ minHeight: "32.25vw" }}>
            <div className="text-primaryy-2" style={{ color: "#a2ff03" }}>
              MEET OUR TEAM
            </div>

            <Swiper
              breakpoints={{
                320: {
                  // width: 576,
                  slidesPerView: 1,
                },
                1280: {
                  // width: 768,
                  slidesPerView: 3.1,
                },
              }}
              slidesPerView={2.5}
              spaceBetween={0}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {memberTeams.map((member) => {
                return (
                  <>
                    <SwiperSlide>
                      <CollaborationItems
                        name={member.name}
                        urlPics={member.urlPics}
                        role={member.roles}
                      />
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>

          <div className="col-lg-6">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "32.25vw",
              }}
            >
              <Image layout="fill" objectFit="cover" src="/tangan.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
