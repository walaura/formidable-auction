import { css } from "@emotion/core";
import React from "react";

const currencies = {
	FTC: { name: "Formicoins", symbol: "₣" },
	USD: { name: "US dollar", symbol: "$" },
	EUR: { name: "Euro", symbol: "€" },
	GBP: { name: "British Pound", symbol: "£" },
	MXN: { name: "Mexican Peso", symbol: "$" },
	JPY: { name: "Japanese Yen", symbol: "¥" }
};

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
	return (
		<div css={styles}>
			<span>
				<small>{currency}</small> {name}
			</span>
			<strong>
				{symbol} {value}
			</strong>
		</div>
	);
};

const listStyle = css`
	display: grid;
	grid-template-columns: minmax(max-content, 50%) minmax(max-content, 50%);
	row-gap: 0.5em;
	column-gap: 2em;
	margin: 1em 0;
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
