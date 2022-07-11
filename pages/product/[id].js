import React, { useState, useEffect } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";

export function getServerSideProps(ctx) {
  const { id } = ctx.query;

  return {
    props: {
      id,
    },
  };
}

export default function Product(props) {
  const [cartFromStorage, setCarFromStorage] = useState();
  useEffect(() => {
    const cartToStorage = JSON.parse(
      window.localStorage.getItem("my-cart") || "[]"
    );
    setCarFromStorage(cartToStorage);
  }, [cartFromStorage]);

  const products = [
    {
      id: "1",
      nameProduct: "PURPLE EDITION",
      urlPics: "/1.png",
      price: 35000,
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
      id: "2",
      nameProduct: "PINK EDITION",
      urlPics: "/2.png",
      price: 35000,
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
      id: "3",
      nameProduct: "CREAM EDITION",
      urlPics: "/3.png",
      price: 35000,
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
      id: "4",
      nameProduct: "GREY EDITION",
      urlPics: "/4.png",
      price: 35000,
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

  const [cartCount, setCartCount] = useState(0);

  const filteredPost = products.find((product) => {
    return product.id == props.id;
  });

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      fontSize: "1rem",
    },
    "& .MuiRating-iconHover": {
      color: "white",
    },
  });

  const cartHandler = () => {
    const myProductCount = cartCount;

    const cartToStorage = JSON.parse(
      window.localStorage.getItem("my-cart") || "[]"
    );

    const findIndex = cartToStorage.findIndex((crt) => {
      return crt.product_id == props.id;
    });

    if (findIndex == -1) {
      cartToStorage.push({
        product_id: props.id,
        count: cartCount,
      });
    } else {
      cartToStorage[findIndex] = {
        product_id: props.id,
        count: cartCount,
      };
    }

    window.localStorage.setItem("my-cart", JSON.stringify([...cartToStorage]));
  };

  return (
    <>
      <Navbar cartCount={cartFromStorage} />
      <div className="container p-4" style={{ borderRadius: 10 }}>
        <div className="row">
          <div className="col-lg-4 border border-primary d-flex justify-content-center">
            <Image src={filteredPost.urlPics} width="80" height="200" />
          </div>
          <div className="col-lg-8 border border-primary">
            <div className="text-primaryy-2" style={{ fontSize: 20 }}>
              HUMANS EVERYDAY: {filteredPost.nameProduct}
            </div>
            <div>{filteredPost.price}</div>
            <StyledRating
              name="read-only "
              value={4}
              precision={0.5}
              readOnly
              max={1}
            />
            {filteredPost.getAverageRating()} ({filteredPost.reviewers.length}{" "}
            Reviews) — Sold {filteredPost.sold}
            <br />
            <ul style={{ all: "unset" }}>
              Details :
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Lorem, ipsectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor siing elit.</li>
              <li>
                Lorem, ipsum elit Lorem ipsum dolor sit, amet consectetur
                adipisicing.
              </li>
            </ul>
            <button
              className="btn btn-primary"
              onClick={() => {
                setCartCount(cartCount - 1);
              }}
            >
              -
            </button>
            <span style={{ fontSize: 20 }}>{cartCount}</span>
            <button
              className="btn btn-primary"
              onClick={() => {
                setCartCount(cartCount + 1);
              }}
            >
              +
            </button>
            <button onClick={cartHandler} className="btn btn-primary">
              Add to cart
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="text-primaryy-2 text-center"
              style={{ fontSize: 20 }}
            >
              PRODUCT REVIEWS{" "}
              <span style={{ fontWeight: "normal", fontFamily: "Helvetica" }}>
                ({filteredPost.reviewers.length})
              </span>
            </div>

            {filteredPost.reviewers.map((fltrd) => {
              return (
                <>
                  <div>
                    {fltrd.nameReviewers}
                    <div>
                      <Rating
                        size="small"
                        name="read-only "
                        value={fltrd.rating}
                        precision={0.5}
                        readOnly
                        max={5}
                      />
                    </div>
                    {fltrd.description}
                  </div>
                  <br />
                </>
              );
            })}
          </div>
          <div className="col-lg-6 ">
            <div
              className="text-primaryy-2 text-center"
              style={{ fontSize: 20 }}
            >
              PRODUCT QUESTIONS
            </div>
          </div>
        </div>
        <div className="row">
          {products
            .filter((product) => {
              return product.id !== props.id;
            })
            .map((product) => {
              return (
                <>
                  <div className="col d-flex justify-content-center">
                    <Image width="40" height="100" src={product.urlPics} />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
