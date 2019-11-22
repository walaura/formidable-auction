import { css } from "@emotion/core";
import React from "react";

const imageStyles = src => css`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-position: center left;
	background-size: cover;
	background-image: url(${src});
`;

const Image = ({ src }) => <div css={imageStyles(src)} />;
export default Image;
