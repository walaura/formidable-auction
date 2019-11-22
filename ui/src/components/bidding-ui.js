import css from "@emotion/css";
import React, { useState, useEffect } from "react";
import currencies from "../moneys";
import tokens from "../tokens";
import Image from "./bidding/image";
import Plaque from "./bidding/plaque";
import Prices, { Price } from "./bidding/price";

const layoutStyles = css`
	display: grid;
	grid-template-columns: 1fr minmax(0, 100vh);
	background: ${tokens.dark};
	color: #fff;
	height: 100vh;
	width: 100vw;

	& > :first-child {
		padding: ${tokens.padding};
	}
	& > :last-child {
		background: white;
	}
	& > * {
		position: relative;
	}
`;

const leftyLayoutStyles = ({ hasPrices }) => css`
	display: grid;
	grid-template-rows: max-content max-content;
	align-content: space-between;
	${!hasPrices &&
		css`
			grid-template-rows: 1fr 0;
		`}
`;

const getPrices = (basePrice, ftcRate) =>
	Object.entries(currencies).map(([key, { rate }]) => {
		const dollarPrice = basePrice * ftcRate;
		return {
			currency: key,
			value: key === "FTC" ? basePrice : dollarPrice * rate
		};
	});

const useFtcRate = () => {
	const [rate, setRate] = useState(Math.random());
	useEffect(() => {
		const itvl = setInterval(() => {
			const diff = (0.5 - Math.random()) / 10;
			setRate(r => (r > 0.5 ? r + diff : r + Math.abs(diff)));
		}, 100);
		return () => {
			clearTimeout(itvl);
		};
	});
	return rate;
};

const BiddingUI = ({ price = undefined, lot = undefined }) => {
	const ftcRate = useFtcRate();
	const prices = getPrices(price || 0, ftcRate);
	return (
		<main css={layoutStyles}>
			<div css={leftyLayoutStyles({ hasPrices: !!price })}>
				<Plaque isLarge={!price} item="Very long title to see how this overflows" lot={12} />
				<div
					css={css`
						padding: ${tokens.padding};
					`}
				>
					{price && (
						<Prices>
							{prices.map(p => (
								<Price {...p} />
							))}
						</Prices>
					)}
				</div>
			</div>
			<div>
				<Image src="https://66.media.tumblr.com/60aeee62dc1aee0c3c0fbad1702eb860/tumblr_inline_pfp352ORsk1r4hkfd_250.png"></Image>
			</div>
		</main>
	);
};

export default BiddingUI;
