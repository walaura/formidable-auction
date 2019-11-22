import { css, keyframes } from "@emotion/core";
import React from "react";

const slidein = keyframes`
	from {
		transform:translateY(100%)
	}
	top {
		transform:translateY(0)
	}
`;

const imageStyles = src => css`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	animation: ${slidein} 0.5s;
	background-position: center left;
	background-size: cover;
	background-image: url(${src});
`;

const Image = ({ src }) => <div css={imageStyles(src)} />;
export default Image;
