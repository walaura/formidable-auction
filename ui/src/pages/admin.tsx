import css from "@emotion/css";
import React from "react";
import Layout from "../components/layout";
import tokens from "../tokens";
import { usePageState } from "../helpers/state";

const SecondPage = () => {
	const [, dispatch] = usePageState();

	return (
		<Layout>
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
						dispatch({ type: "boost_price", price: +15 });
					}}
				>
					price + 15
				</button>

				<button
					onClick={() => {
						dispatch({ type: "boost_price", price: -15 });
					}}
				>
					price - 15
				</button>

				<button
					onClick={() => {
						dispatch({ type: "reset" });
					}}
				>
					reset
				</button>
			</div>
		</Layout>
	);
};

export default SecondPage;
