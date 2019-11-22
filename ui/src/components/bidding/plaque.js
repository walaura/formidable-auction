import { css } from "@emotion/core";
import React from "react";
import tokens from "../../tokens";

const styles = css`
	background: ${tokens.brand};
	color: #fff;
	padding: ${tokens.padding};
	h1 {
		font-size: 2em;
		font-family: Sharp;
	}
`;
const Plaque = ({ item, lot }) => (
	<div css={styles}>
		<span>Lot #{lot}</span>
		<h1>{item}</h1>
	</div>
);

export default Plaque;
