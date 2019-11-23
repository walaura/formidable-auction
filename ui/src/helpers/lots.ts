export interface Lot {
	title: string;
	id: number;
	images: string[];
}

const addLotIds = (value, id) => ({ ...value, id: id + 1 });

export const lots: Lot[] = [
	{
		title: "Pulitzer prize (2 units)",
		images: [
			"https://i.pinimg.com/originals/50/85/99/5085994ede8255506b1f0051528da2eb.jpg",
			"https://66.media.tumblr.com/60aeee62dc1aee0c3c0fbad1702eb860/tumblr_inline_pfp352ORsk1r4hkfd_250.png"
		]
	},
	{
		title: "Other test",
		images: [
			"https://66.media.tumblr.com/60aeee62dc1aee0c3c0fbad1702eb860/tumblr_inline_pfp352ORsk1r4hkfd_250.png"
		]
	}
].map(addLotIds);
