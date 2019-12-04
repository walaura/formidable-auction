export interface Lot {
  title: string;
  id: number;
  images: string[];
  startingPrice: number;
}

const addLotIds = (value, id) => ({ ...value, id: id + 1 });

export const lots: Lot[] = [
  {
    title: "22 sharpies (dried out)",
    images: [require("../images/sharpes.jpg")],
    startingPrice: 5
  },
  {
    title: "Defaced declarative UI framework stickers (Set of 20)",
    images: [require("../images/defaced.jpg")],
    startingPrice: 1
  },
  {
    title: "Printed out trello board with cards crossed out",
    images: [require("../images/trello.jpg")],
    startingPrice: 5
  },
  {
    title: "Random Samsung phone with the brexit app installed",
    images: [
      require("../images/galaxy.jpg"),
      require("../images/galaxy-2.jpg")
    ],
    startingPrice: 400
  },
  {
    title: "Open door alarm sensor (left half)",
    images: [
      require("../images/security.jpg"),
      require("../images/security-2.jpg")
    ],
    startingPrice: -10
  },

  {
    title: "Funko pop that looks vaguely like Jani Evakalio",
    images: [require("../images/jani.jpg")],
    startingPrice: 50
  },
  {
    title: "Pulitzer prize (2)",
    images: [require("../images/pul.jpg")],
    startingPrice: 100
  },
  {
    title: "Toilet doorknob touched by Dan Abramov",
    images: [
      require("../images/bth.jpg"),
      require("../images/bth-dan.jpg"),
      require("../images/bth-me.jpg")
    ],
    startingPrice: 1000
  },
  { title: "SECRET_ENDING", images: [], startingPrice: 0 },
  { title: "SECRET_BYE", images: [], startingPrice: 0 }
].map(addLotIds);
