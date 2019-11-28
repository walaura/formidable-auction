export interface Lot {
	title: string;
	id: number;
	images: string[];
}

const addLotIds = (value, id) => ({ ...value, id: id + 1 });

export const lots: Lot[] = [
	{
		title: "Mug w/ 46 sharpies (dry)",
		images: [require("../images/gatsby-astronaut.png")]
	},
	{
		title: "Printed out trello board with cards crossed out",
		images: [require("../images/gatsby-astronaut.png")]
	},
	{
		title: "Defaced declarative UI framework stickers (Set of 20)",
		images: [require("../images/defaced.jpg")]
	},
	{
		title: "Home security device (left half)",
		images: [require("../images/security.jpg")]
	},
	{
		title: "Pixel 3 headphones",
		images: [require("../images/gatsby-astronaut.png")]
	},
	{
		title: "USB drive from the guardian investigations desk",
		images: [require("../images/usb.jpg")]
	},
	{
		title: "Puliter prize (2)",
		images: [require("../images/pul.jpg")]
	},
	{
		title: "Nandos card that appeared on top of my locker",
		images: [require("../images/nandos.jpg")]
	},
	{
		title: "he-man figurine painted to kinda look like Jani Evakalio",
		images: [require("../images/gatsby-astronaut.png")]
	},
	{
		title: "Bike seat (no bike)",
		images: [require("../images/gatsby-astronaut.png")]
	},
	{
		title: "Toilet doorknob touched by Dan Abromov",
		images: [
			require("../images/bth.jpg"),
			require("../images/bth-dan.jpg"),
			require("../images/bth-me.jpg")
		]
	},
	{
		title: "Facebook avocados (1KG)",
		images: [require("../images/gatsby-astronaut.png")]
	}
].map(addLotIds);
