import React from "react";
import BiddingUI from "../components/bidding";
import Layout from "../components/layout";
import { usePageState } from "../helpers/state";

const IndexPage = () => {
	const [pageState] = usePageState();
	return (
		<Layout>
			<BiddingUI {...pageState} />
		</Layout>
	);
};

export default IndexPage;
