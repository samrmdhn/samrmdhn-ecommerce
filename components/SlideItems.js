import React from "react";
import Image from "next/image";
const SlideItems = ({ title, description, img }) => {
  const submitHandler = (title) => {
    console.log(title);
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="card__container position-relative" style={{ height: "70vh" }}>
<Image layout="fill" className="bg-image position-absolute" style={{zIndex: 0}} src={img} alt="" />
          <div className="position-absolute">
          </div>
          
          <div className="card__header">
            <div className="text-primaryy">{title}</div>
          </div>
          <div className="card__body helvetica">
            <div style={{ fontSize: "1vw" }}>{description}</div>
          </div>
          <div className="card__footer helvetica" style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col">Lorem ipsum dolor sit amet.</div>
              <div className="col">
                <button
                  onClick={() => {
                    submitHandler(title);
                  }}
                >
                  Click Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideItems;
