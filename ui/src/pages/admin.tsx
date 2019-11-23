import css from "@emotion/css";
import React from "react";
import Layout from "../components/layout";
import tokens from "../tokens";
import { usePageState } from "../helpers/state";

const navLayout = css`
	display: grid;
	grid-template-columns: 10em 1fr;
	height: 100vh;
	width: 100vw;
	> :first-child {
		border-right: 2px solid black;
	}
	> * {
		padding: 1em;
	}
	button {
		border: none;
		display: flex;
		width: 100%;
		padding: 2em;
		align-items: center;
		justify-content: center;
		background-color: ${tokens.brand};
		color: white;
		font-size: 1em;
		font-weight: bold;
	}
`;

const SecondPage = () => {
	const [state, dispatch] = usePageState();

	if (!state.synced) {
		return (
			<Layout logo={false}>
				<div css={navLayout}>
					<div></div>
					<div>
						<button
							onClick={() => {
								dispatch({ type: "reset" });
							}}
						>
							reset
						</button>
					</div>
				</div>
			</Layout>
		);
	}

	return (
		<Layout logo={false}>
			<div css={navLayout}>
				<div
					css={css`
						padding: ${tokens.padding};
						border: 2px solid black;
					`}
				>
					<button
						onClick={() => {
							dispatch({ type: "next_lot" });
						}}
					>
						Next lot
					</button>
					<button
						onClick={() => {
							dispatch({ type: "prev_lot" });
						}}
					>
						Prev lot
					</button>
				</div>
				{state.teaser ? (
					<div
						css={css`
							padding: ${tokens.padding};
							border: 2px solid black;
						`}
					>
						<button
							onClick={() => {
								dispatch({ type: "toggle_teaser" });
							}}
						>
							teaser on/off
						</button>
					</div>
				) : (
					<div
						css={css`
							padding: ${tokens.padding};
							border: 2px solid black;
						`}
					>
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
					</div>
				)}
			</div>
		</Layout>
	);
};

export default SecondPage;
