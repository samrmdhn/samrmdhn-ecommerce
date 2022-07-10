import React from "react";
import ProductHotItems from "./ProductHotItems";
const ProductHot = () => {
  const products = [
    {
      edition: "Purple",
      released: "5/4/2022",
      src: "/1.png",
      id: "1",
    },
    {
      edition: "Pink",
      released: "6/4/2022",
      src: "/2.png",
      id: "2",
    },
    {
      edition: "Cream",
      released: "6/4/2022",
      src: "/3.png",
      id: "3",
    },
    {
      edition: "Grey",
      released: "5/4/2022",
      src: "/4.png",
      id: "4",
    },
  ];

  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: "#faafda" }}>
        <div
          className="text-primaryy-2 text-center"
          style={{ color: "#7652e6" }}
        >
          HOT ITEMS
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <ProductHotItems
                edition={product.edition}
                released={product.released}
                src={product.src}
                id={product.id}
              />
            );
          })}
          <div>See All</div>
        </div>
      </div>
    </div>
  );
};

export default ProductHot;
