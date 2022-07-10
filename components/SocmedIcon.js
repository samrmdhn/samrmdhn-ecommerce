import React from "react";import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const SocmedIcon = () => {
  const socmeds = [
    { name: <BsFacebook />, href: "#" },
    { name: <BsInstagram />, href: "#" },
    { name: <BsLinkedin />, href: "#" },
    { name: <BsTwitter />, href: "#" },
  ];

  return (
    <>
      {socmeds.map((scm, i) => {
        return (
          <div style={{ marginRight: 20 }}>
            <a style={{ color: "#a2ff03" }} href={scm.href}>
              {scm.name}
            </a>
          </div>
        );
      })}
    </>
  );
};

export default SocmedIcon;
