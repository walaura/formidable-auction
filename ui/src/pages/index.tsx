import React, { useState } from "react";

import BiddingUI from "../components/bidding-ui";
import Layout from "../components/layout";
import { lots } from "../helpers/lots";

const IndexPage = () => {
	const [price, setPrice] = useState(0);
	const [lot, setLot] = useState(undefined);
	return (
		<Layout>
			<BiddingUI price={price} lot={lot} />
			<button
				onClick={() => {
					setPrice(p => (!p ? 10 : 0));
				}}
			>
				p
			</button>
			<button
				onClick={() => {
					setLot(l => (!l ? lots[0] : undefined));
				}}
			>
				l
			</button>
		</Layout>
	);
};

export default IndexPage;
