import React from "react";import Image from "next/image";

const CollaborationItems = ({ name, urlPics, role }) => {
  console.log(name);
  console.log(urlPics);
  return (
    <>
      <div
        className="card"
        style={{
          minHeight: "20rem",
          color: "#a2ff03",
          fontWeight: "bold",
          width: "100%",
          marginRight: "15px",
        }}
      >
        <div className="card-header" style={{ zIndex: 1 }}>
          {name}
        </div>
        <div className="card-body">
          <div
            style={{
              height: "100px",
              width: "100px",
              display: "relative",
              zIndex: 1,
            }}
          >
            <Image
              src={urlPics}
              layout="fill"
              objectFit="cover"
              alt=""
              style={{
                WebkitFilter: "grayscale(100%)",
                filter: "grayscale(100%)",
              }}
            />
          </div>
        </div>
        <div className="card-footer" style={{ zIndex: 2 }}>
          {role}
        </div>
      </div>
    </>
  );
};

export default CollaborationItems;
