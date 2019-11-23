import css from "@emotion/css";
import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { lots } from "../helpers/lots";
import { getPrices, useFtcRate } from "../helpers/money";
import { PageState } from "../helpers/state";
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

const MysteryLot = ({ lot }: { lot?: number }) => (
	<main css={mysteryStyles}>
		<div>
			<Plaque
				isTransparent
				isLarge={false}
				item={lot ? `Lot #${lot}` : `?¿?¿`}
				standfirst={"Coming up next"}
			/>
		</div>
		<img src={require("../images/cube.png")} alt="" />
	</main>
);

const useImage = (images: string[]) => {
	const [active, setActive] = useState(0);
	useEffect(() => {
		const itvl = setInterval(() => {
			setActive(current => {
				if (images[current + 1]) return current + 1;
				return 0;
			});
		}, 3000);
		return () => {
			clearTimeout(itvl);
		};
	}, images.join());
	return images[active];
};

const BiddingUI = ({ price = 0, lot, teaser }: PageState) => {
	const ftcRate = useFtcRate();
	const prices = getPrices(price, ftcRate);
	const lotInfo = lots[lot] || undefined;
	const image = useImage(lotInfo.images || []);

	if (!lotInfo || teaser) {
		return <MysteryLot lot={teaser && lotInfo && lotInfo.id} />;
	}

	return (
		<main css={layoutStyles}>
			<div css={leftyLayoutStyles({ hasPrices: !!price })}>
				<Plaque
					isLarge={!price}
					item={lotInfo.title}
					standfirst={`Lot #${lotInfo.id}`}
				/>
				<div
					css={css`
						padding: ${tokens.padding};
						padding-bottom: 0;
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
				<Image src={image} />
			</div>
		</main>
	);
};

export default BiddingUI;
