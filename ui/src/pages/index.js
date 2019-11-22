import React, { useState } from "react";

import BiddingUI from "../components/bidding-ui";

const IndexPage = () => {
	const [price, setPrice] = useState(0);
	return (
		<>
			<BiddingUI price={price} />
			<button
				onClick={() => {
					setPrice(p => (!p ? 10 : 0));
				}}
			>
				p
			</button>
		</>
	);
};

export default IndexPage;
