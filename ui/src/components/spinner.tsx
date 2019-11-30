import React, { useState } from "react";

export const spinnerImages = [
  require("../spinners/0.gif"),
  require("../spinners/1.gif"),
  require("../spinners/2.gif"),
  require("../spinners/3.gif"),
  require("../spinners/4.gif"),
  require("../spinners/5.gif"),
  require("../spinners/6.gif"),
  require("../spinners/7.gif")
];

const rand = (arr: unknown[]) => arr[Math.floor(Math.random() * arr.length)];

export const Spinner = props => {
  const [src] = useState(() => rand(spinnerImages));
  return <img src={src} alt="" {...props} />;
};
