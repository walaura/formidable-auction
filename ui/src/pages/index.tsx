import React from "react";
import BiddingUI from "../components/bidding-ui";
import Layout from "../components/layout";
import { lots } from "../helpers/lots";
import { usePageState } from "../helpers/state";
import css from "@emotion/css";
import tokens from "../tokens";

const IndexPage = () => {
	const [pageState, dispatch] = usePageState();
	return (
		<Layout>
			<BiddingUI {...pageState} />
			<div
				css={css`
					position: fixed;
					bottom: 0;
					right: 0;
					padding: ${tokens.padding};
				`}
			>
				<button
					onClick={() => {
						dispatch({ type: "toggle_teaser" });
					}}
				>
					teaser
				</button>
				<button
					onClick={() => {
						dispatch({ type: "next_lot" });
					}}
				>
					+ lot
				</button>
				<button
					onClick={() => {
						dispatch({ type: "prev_lot" });
					}}
				>
					- lot
				</button>
				<button
					onClick={() => {
						dispatch({ type: "set_price", price: 0 });
					}}
				>
					price to 0
				</button>
				<button
					onClick={() => {
						dispatch({ type: "set_price", price: 15 });
					}}
				>
					price to 15
				</button>
			</div>
		</Layout>
	);
};

export default IndexPage;
