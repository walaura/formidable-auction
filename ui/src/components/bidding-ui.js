import React from "react";
import Plaque from "./bidding/plaque";
import Image from "./bidding/image";
import css from "@emotion/css";
import tokens from "../tokens";

const layoutStyles = css`
	display: grid;
	grid-template-columns: 1fr 1fr;
	background: ${tokens.dark};
	height: 100vh;
	width: 100vw;

	& > :first-child {
		padding: ${tokens.padding};
	}
	& > * {
		position: relative;
	}
`;
const BiddingUI = () => (
	<main css={layoutStyles}>
		<div>
			<Plaque item="lol" lot={12}></Plaque>
		</div>
		<div>
			<Image src="https://66.media.tumblr.com/60aeee62dc1aee0c3c0fbad1702eb860/tumblr_inline_pfp352ORsk1r4hkfd_250.png"></Image>
		</div>
	</main>
);

export default BiddingUI;
