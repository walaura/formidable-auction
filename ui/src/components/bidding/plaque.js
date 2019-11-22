import { css } from "@emotion/core";
import React from "react";
import tokens from "../../tokens";

const styles = ({ isLarge }) => css`
	background: ${tokens.brand};
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
const Plaque = ({ item, lot, isLarge }) => (
	<div css={styles({ isLarge })}>
		<span>Lot #{lot}</span>
		<h1>{item}</h1>
	</div>
);

export default Plaque;
