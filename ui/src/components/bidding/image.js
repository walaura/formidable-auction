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
	background-position: center left;
	background-size: cover;
	background-image: url(${src});
	transition: 1s;
	&[data-active="true"] {
		animation: ${slidein} 0.5s;
		z-index: 2;
	}
`;

const Image = ({ src, active = true, ...props }) => (
	<div css={imageStyles(src)} data-active={active} {...props} />
);
export default Image;
