import React from "react";import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductFavoriteItems = (product) => {
  const productHandler = (nameProduct) => {
    console.log(nameProduct);
  };

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#84ef19",
      fontSize: "1rem",
    },
    "& .MuiRating-iconHover": {
      color: "white",
    },
  });

  return (
    <div
      className="text-secondaryy"
      style={{
        margin: "20px 20px 20px 0",
        borderBottom: "1px solid pink",
        cursor: "pointer",
      }}
      onClick={() => productHandler(product.nameProduct)}
    >
      <ul style={{ display: "flex" }}>
        <li style={{ marginLeft: 0 }}> {product.nameProduct} — </li>
        <li>
          {" "}
          <StyledRating
            name="read-only "
            value={product.getAverageRating()}
            precision={0.5}
            readOnly
            max={1}
          />{" "}
        </li>
        <li> {product.getAverageRating().toFixed(1)}</li>
        <li>({product.sold})</li>
      </ul>
    </div>
  );
};

export default ProductFavoriteItems;
