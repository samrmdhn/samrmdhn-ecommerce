import React from "react";
import Image from "next/image";
import Router from 'next/router'
const ProductHotItems = ({ edition, released, src, id}) => {

const visitHandler = (id) =>{
  Router.push(`/product/${id}`)
}

  return (
    <>
   
      <div className="col-lg-3 col-6">
        <div className="row">
          <div className="col border border-primary">{edition}</div>
          <div className="col border border-primary">{released}</div>
        </div>
        <div className="row  d-flex justify-content-center border border-primary">
          <div style={{
            height:"40%",
            width:"40%"
          }}>
          <Image src={src} height="500" width="200" layout="responsive"/>
         
          </div>
          <div className="row">
            <div className="col">Rate</div>
            <div className="col">
              <button onClick={()=>{visitHandler(id)}}>Visit</button>
            </div>
          </div>
        </div>
      </div>
   
   
      {/* 
      <div
        className="position-relative col-6 col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
        style={{
          fontSize: 27,
          border: "1px solid grey",
          color: "#7652e6",
          fontFamily: "Helvetica",
        }}
      >
        <div
          className="position-absolute top-0"
          style={{ left: 10, zIndex: 1 }}
        >
          <div>
            EVERYDAY <br /> HUMANS
          </div>
        </div>
        <div
          className="position-absolute top-50 "
          style={{ left: 10, zIndex: 1 }}
        >
          <div style={{ fontFamily: "Mistral" }}>
            {edition} <br /> Edition
          </div>
        </div>

        <div
          className="position-absolute top-0 "
          style={{ right: 10, zIndex: 1, textAlign: "right" }}
        >
          RELEASED <br /> {released}
        </div>
        <div
          className="position-absolute top-50 "
          style={{ right: 10, zIndex: 1, textAlign: "right" }}
        >
          &Special <br /> Edition
        </div>
        <div
          className="position-absolute bottom-0"
          style={{ right: 10, marginBottom: 8 }}
        >
          <button className="buttonz">Details</button>
        </div>
        <div>
          <Image
            src={src}
            height="300"
            width="120"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      */}
    </>
  );
};

export default ProductHotItems;
