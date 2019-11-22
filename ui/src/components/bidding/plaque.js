import { css } from "@emotion/core";
import React from "react";
import tokens from "../../tokens";

const styles = ({ isLarge, isTransparent }) => css`
	background: ${isTransparent ? "transparent" : tokens.brand};
	color: #fff;
	padding: ${tokens.padding};
	border-radius: 2px;
	span {
		font-size: 0.5em;
		margin-bottom: 1em;
		display: block;
	}
	h1 {
		font-size: ${isLarge ? "2.5em" : "2em"};
		min-height: ${isLarge ? "100%" : "10%"};
		transition: 0.5s;
		font-family: Sharp;
	}
`;
const Plaque = ({ item, standfirst, isLarge, isTransparent = false }) => (
	<div css={styles({ isLarge, isTransparent })}>
		<span>{standfirst}</span>
		<h1>{item}</h1>
	</div>
);

export default Plaque;
