import { css, keyframes } from "@emotion/core";
import React from "react";
import currencies from "../../moneys";

const styles = css`
	small {
		font-size: 0.5em;
	}
	strong {
		font-weight: bold;
	}
`;
const Price = ({ currency = "USD", value = 10.01 }) => {
	const { name, symbol } = currencies[currency] || currencies["USD"];
	const renderValue = value.toFixed(2);
	return (
		<div css={styles}>
			<span>
				<small>{currency}</small> {name}
			</span>
			<strong>
				{symbol} {renderValue}
			</strong>
		</div>
	);
};

const fadeIn = keyframes`
	from {
		transform:translateY(100%)
	}
	top {
		transform:translateY(0)
	}
`;

const listStyle = css`
	display: grid;
	grid-template-columns: minmax(max-content, 50%) minmax(max-content, 50%);
	row-gap: 0.75em;
	column-gap: 2em;
	animation: 0.5s ${fadeIn};
	> li {
		display: contents;
	}
	> li > div {
		display: contents;
	}
`;

const Prices = ({ children }) => (
	<ul css={listStyle}>
		{React.Children.map(children, child => (
			<li>{child}</li>
		))}
	</ul>
);

export { Price };
export default Prices;
