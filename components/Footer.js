import React from "react";import SocmedIcon from "./SocmedIcon";
const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid mybg-primary p-4 "
        style={{ backgroundColor: "#121212", color: "#a2ff03" }}
      >
        <div className="row">
          <div className="col-lg-3 col-sm-12 col-md-6 col-12">
            <div style={{ fontWeight: "bolder" }}>UNSPLASH REMAKE</div>
            <p style={{ marginTop: 20 }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              natus sunt possimus quibusdam ad adipisci, magnam quam doloribus
              laborum pariatur?
            </p>
            <p>
              NOCOPYRIGHT ©2022 PRODUCTUNSPLASH <br /> All right reserved.
            </p>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6 col-12 offset-lg-3">
            <div style={{ fontWeight: "bolder" }}>SHOP</div>
            <div style={{ marginTop: 20 }}>Hot Items</div>
            <div>Most Sold Product</div>
            <div style={{}}>Reviews</div>
          </div>

          <div className="col-lg-3 col-sm-12 col-md-6 col-12">
            <div className="div">ABOUT US</div>
            <div className="div" style={{ marginTop: 20, display: "flex" }}>
              <SocmedIcon />
            </div>
            <div style={{ marginTop: 20 }}>Privacy Policy</div>
            <div>License</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
