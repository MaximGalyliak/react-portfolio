import React from "react";

const bkg_style = {
  position: "fixed",
  top: 0,
  minHeight: "100%",
  minWidth: "100%",
  zIndex: "-999999",
};

const Background = () => {
  return (
    <img
      src={require("../assets/img/bkg.jpg")}
      alt="background"
      style={bkg_style}
    />
  );
};

export default Background;
