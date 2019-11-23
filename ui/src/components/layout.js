import { css } from "@emotion/core";
import React from "react";
import logo from "../images/formilogo.svg";
import tokens from "../tokens";

import "./layout.css";

const logoStyles = css`
	position: fixed;
	top: ${tokens.padding};
	right: ${tokens.padding};
	height: 6vmax;
`;

const Layout = ({ children, logo = true }) => {
	return (
		<>
			{children}
			{logo && <img src={logo} alt="logo" css={logoStyles} />}
		</>
	);
};

export default Layout;
