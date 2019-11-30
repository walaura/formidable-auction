import React from "react";

import "./layout.css";
import css from "@emotion/css";
import { lots } from "../helpers/lots";

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
      {lots
        .map(({ images }) => images)
        .flat()
        .map(src => (
          <img {...{ src }} />
        ))}
    </div>
    {children}
  </>
);

export default Layout;
