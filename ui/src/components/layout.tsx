import React from "react";

import "./layout.css";
import css from "@emotion/css";
import { lots } from "../helpers/lots";
import { spinnerImages } from "./spinner";

const preloadCss = css`
  img {
    position: fixed;
    width: 1px;
    height: 1px;
    margin-left: -1px;
  }
`;

const Layout = ({ children }) => (
  <>
    <div css={preloadCss}>
      {[
        ...lots
          .map(({ images }) => images)
          .reduce((prev, current) => [...prev, ...current], []),
        ...spinnerImages
      ].map(src => (
        <img {...{ src }} />
      ))}
    </div>
    {children}
  </>
);

export default Layout;
