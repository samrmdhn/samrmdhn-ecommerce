import React from "react";
import Image from 'next/image';
const ProductReviewsInfo = (props) => {
  return (
    <>
    <div className="row position-relative">
        <div
          className="position-absolute start-50 translate-middle"
          style={{
            zIndex: 0, 
            width: "20%",
            height: "20%",
            top: "40%",
            objectFit: "cover",
            minWidth: "15%",
           
          }}
        >
          <Image
            src={props.profilePic}
          
            height="500"
            width="500"
            objectFit="cover"
            style={{borderRadius: "50%", zIndex: 1,WebkitFilter: "grayscale(100%)",
            filter: "grayscale(100%)", }}
            layout="responsive"
          />
        </div>
        <div className="row">
          <div className="text-secondaryy-2" style={{textAlign: "left"}}>#PRODUCTREVIEWS</div>
        </div>
      <div
        className="text-primaryy-2"
       
      >
        {props.description}
        
      </div>
      <div className="row text-secondaryy-2" style={{textAlign: "left", marginTop: "6vw", zIndex: 2 }} >
        <div className="col">{props.nameReviewers}</div>
        <div className="col">Rate: {props.rating}</div>
        <div className="col">ON PURPLE EDITION</div>
      </div>
    </div>
      
    </>
  );
};

export default ProductReviewsInfo;
