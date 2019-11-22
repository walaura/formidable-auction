import css from "@emotion/css";
import React from "react";
import { getPrices, useFtcRate } from "../helpers/money";
import tokens from "../tokens";
import Image from "./bidding/image";
import Plaque from "./bidding/plaque";
import Prices, { Price } from "./bidding/price";
import { Lot } from "../helpers/lots";

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
	& > * {
		position: relative;
	}
`;

const mysteryStyles = css`
	padding: ${tokens.padding};
	background: ${tokens.dark};
	color: #fff;
	height: 100vh;
	width: 100vw;

	> img {
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		height: 60vh;
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

const MysteryLot = () => (
	<main css={mysteryStyles}>
		<div>
			<Plaque
				isTransparent
				isLarge={false}
				item="?¿?¿"
				standfirst={"Coming up next"}
			/>
		</div>
		<img src={require("../images/cube.png")} alt="" />
	</main>
);

const BiddingUI = ({
	price = undefined,
	lot
}: {
	price: number;
	lot?: Lot;
}) => {
	const ftcRate = useFtcRate();
	const prices = getPrices(price || 0, ftcRate);

	if (!lot) {
		return <MysteryLot />;
	}

	return (
		<main css={layoutStyles}>
			<div css={leftyLayoutStyles({ hasPrices: !!price })}>
				<Plaque
					isLarge={!price}
					item={lot.title}
					standfirst={`Lot #${lot.id}`}
				/>
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
				{lot.images.map(img => (
					<Image src={img}></Image>
				))}
			</div>
		</main>
	);
};

export default BiddingUI;
