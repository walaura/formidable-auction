import { css } from "@emotion/core";
import React from "react";
import tokens from "../../helpers/tokens";

const styles = ({ isLarge, isTransparent }) => css`
	background: ${isTransparent ? tokens.dark : tokens.brand};
	color: ${isTransparent ? "white" : tokens.textOverBrand};
	padding: ${tokens.padding};
	border-radius: 2px;
	transition: 0.5s;
	span {
		margin-bottom: 1em;
		display: block;
	}
	h1 {
		transition: 0.5s;
		font-size: ${isLarge ? "3.5em" : "2.5em"};
		min-height: ${isLarge ? "100%" : "10%"};
		font-family: Sharp;
		line-height: 0.9;
	}
`;
const Plaque = ({ item, standfirst, isLarge, isTransparent = false }) => (
	<div css={styles({ isLarge, isTransparent })}>
		<span>{standfirst}</span>
		<h1>{item}</h1>
	</div>
);

export default Plaque;
