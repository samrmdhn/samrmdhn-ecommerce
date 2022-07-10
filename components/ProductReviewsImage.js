import React from "react";
import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";

const ProductReviewsImage = () => {
  return (
    <>
      <ParallaxProvider>
        <div
          className="col-lg-6 col-12"
          style={{ minHeight: "32.25vw", overflow: "hidden" }}
        >
          <ParallaxBanner
            layers={[{ image: "/background-pattern-fix.jpg", speed: -10 }]}
            className="aspect-[1/1]"
            style={{ width: "100%", height: "100%", minHeight: "32.25vw" }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              {/* 
              <Image
                layout="fill"
                objectFit="cover"
                src="/background-pattern-fix.jpg"
                alt=""
              />
              */}
            </div>
          </ParallaxBanner>
        </div>
      </ParallaxProvider>
    </>
  );
};

export default ProductReviewsImage;
