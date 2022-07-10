import React from "react";import Image from "next/image";
import ProductFavoriteItems from "./ProductFavoriteItems";
const ProductFavorite = () => {
  const products = [
    {
      nameProduct: "PURPLE EDITION",
      urlPics: "/1.png",
      sold: 124,
      reviewers: [
        {
          nameReviewers: "Eddie Brock",
          description: "Good Job Team",
          rating: 4.5,
        },
        {
          nameReviewers: "Nana",
          description: "Tai",
          rating: 2.5,
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
      sold: 24,
      reviewers: [
        {
          nameReviewers: "Charlie Puth",
          description: "Everything well",
          rating: 2.6,
        },
        {
          nameReviewers: "samrmdhn",
          description: "Mantap Lur",
          rating: 4.8,
        },
        {
          nameReviewers: "samrmdhn",
          description: "Mantap Lur",
          rating: 10.5,
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
      nameProduct: "CREAM EDITION",
      urlPics: "/2.png",
      sold: 66,
      reviewers: [
        {
          nameReviewers: "Charlie Puth",
          description: "Everything well",
          rating: 3,
        },
        {
          nameReviewers: "samrmdhn",
          description: "Mantap Lur",
          rating: 5,
        },
        {
          nameReviewers: "samrmdhn",
          description: "Mantap Lur",
          rating: 5,
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
      nameProduct: "CREAM EDITION",
      urlPics: "/2.png",
      sold: 66,
      reviewers: [
        {
          nameReviewers: "Charlie Puth",
          description: "Everything well",
          rating: 3,
        },
        {
          nameReviewers: "samrmdhn",
          description: "Mantap Lur",
          rating: 5,
        },
        {
          nameReviewers: "samrmdhn",
          description: "Mantap Lur",
          rating: 5,
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
      nameProduct: "CREAM EDITION",
      urlPics: "/2.png",
      sold: 66,
      reviewers: [
        {
          nameReviewers: "Charlie Puth",
          description: "Everything well",
          rating: 3,
        },
        {
          nameReviewers: "samrmdhn",
          description: "Mantap Lur",
          rating: 5,
        },
        {
          nameReviewers: "samrmdhn",
          description: "Mantap Lur",
          rating: 5,
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
    <div>
      <div
        className="container-fluid g-0 "
        style={{ backgroundColor: "#7652e6" }}
      >
        <div className="row g-0">
          <div
            className="col-lg-6  p-4"
            style={{ backgroundColor: "#7652e6", minHeight: "31.25vw" }}
          >
            <div
              className="text-primaryy-2"
              style={{ color: "#faafda", fontWeight: "bolder" }}
            >
              OUR MOST SOLD PRODUCT
            </div>

            {products
              .sort((a, b) => {
                return a.sold > b.sold ? -1 : 1;
              })
              .map((product) => {
                return (
                  <>
                    <ProductFavoriteItems {...product} />
                  </>
                );
              })}
          </div>
          <div className="col-lg-6 " style={{ minHeight: "31.25vw" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "31.25vw",
              }}
            >
              <Image
                layout="fill"
                objectFit="cover"
                src="/background-edited.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFavorite;
