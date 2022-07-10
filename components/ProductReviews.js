import React from "react";import Image from "next/image";
import ProductReviewsImage from "./ProductReviewsImage";
import ProductReviewsInfo from "./ProductReviewsInfo";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
const ProductReviews = () => {
  const products = [
    {
      nameProduct: "PURPLE EDITION",
      urlPics: "/1.png",
      reviewers: [
        {
          nameReviewers: "Eddie Brock",
          description: "Good Job Team",
          rating: 5,
          profilePic: "/profile2.jpg",
        },
        {
          nameReviewers: "Nana",
          description: "SO FAR SO GOOD PRODUCT PERFECT",
          rating: 10,
          profilePic:
            "https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
      ],
      getAverageRating() {
        let sum = 0;
        for (let i = 0; i < this.reviewers.length; i++) {
          sum += this.reviewers[i].rating;
        }
        const averageRating = sum / this.reviewers.length;
        return averageRating;
        //   const getData = this.reviewers[0].nameReviewers;
      },
    },
    {
      nameProduct: "PINK EDITION",
      urlPics: "/2.png",
      reviewers: [
        {
          nameReviewers: "Charlie Puth",
          description: "Everything well",
          rating: 2.6,
          profilePic: "/profile3.jepg",
        },
        {
          nameReviewers: "samrmdhn",
          description: "Mantap Lur",
          rating: 4.8,
          profilePic: "/profile3.jpeg",
        },
        {
          nameReviewers: "samrmdhwefwen",
          description: "THIS PRODUCT SERIOUSLY MAKES ME GLOW UP THANK YOU",
          rating: 10.5,
          profilePic:
            "https://images.unsplash.com/photo-1624421102236-21991227042f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80",
        },
      ],
      getAverageRating() {
        let sum = 0;
        for (let i = 0; i < this.reviewers.length; i++) {
          sum += this.reviewers[i].rating;
        }
        const averageRating = sum / this.reviewers.length;
        return averageRating;
        //   const getData = this.reviewers[0].nameReviewers;
      },
    },
  ];

  return (
    <>
      <div className="container-fluid g-0">
        <div className="row g-0 d-flex flex-column-reverse flex-lg-row ">
          <ProductReviewsImage />
          <div
            className="col-lg-6 p-4 col-12 d-flex justtify-content-center"
            style={{ backgroundColor: "#faafda", minHeight: "31.25vw" }}
          >
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
              slidesPerView={1}
              spaceBetween={0}
              onAutoplayPause={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {products.map((product) => {
                return product.reviewers
                  .sort((a, b) => {
                    return a.rating > b.rating ? -1 : 1;
                  })
                  .slice(0, 1)
                  .map((prd) => {
                    console.log(prd);

                    return (
                      <>
                        <SwiperSlide>
                          <ProductReviewsInfo {...prd} />
                        </SwiperSlide>
                      </>
                    );
                  });
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReviews;
