import { css, keyframes } from "@emotion/core";
import React from "react";

const slidein = keyframes`
	from {
		z-index: z-index: 11;
		transform:translateY(100%)
	}
	to {
		z-index: 11;
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
	z-index: 8;
	&[data-active="false"] + &[data-active="true"] {
		z-index: 9;
		opacity: 0.5;
	}
	&[data-active="true"] {
		animation: ${slidein} 0.5s;
		z-index: 10;
	}
`;

const Image = ({ src, active = true, ...props }) => (
	<div css={imageStyles(src)} data-active={active} {...props} />
);
export default Image;
