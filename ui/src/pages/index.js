import React, { useState } from "react";

import BiddingUI from "../components/bidding-ui";
import Layout from "../components/layout";

const IndexPage = () => {
	const [price, setPrice] = useState(0);
	return (
		<Layout>
			<BiddingUI price={price} />
			<button
				onClick={() => {
					setPrice(p => (!p ? 10 : 0));
				}}
			>
				p
			</button>
		</Layout>
	);
};

export default IndexPage;
