export interface Lot {
  title: string;
  id: number;
  images: string[];
}

const addLotIds = (value, id) => ({ ...value, id: id + 1 });

export const lots: Lot[] = [
  {
    title: "22 sharpies (dried out)",
    images: [require("../images/sharpes.jpg")]
  },
  {
    title: "Pixel 3 headphones, iPhone 6s headphones, Galaxy S6 Headphones",
    images: [require("../images/cables.jpg")]
  },
  {
    title:
      "Lego train set that the ux department somehow convinced the business into purchasing",
    images: [require("../images/lego.jpg")]
  },
  {
    title: "Defaced declarative UI framework stickers (Set of 20)",
    images: [require("../images/defaced.jpg")]
  },
  {
    title: "Printed out trello board with cards crossed out",
    images: [require("../images/trello.jpg")]
  },
  {
    title: "Perimeter security device (left half)",
    images: [
      require("../images/security.jpg"),
      require("../images/security-2.jpg")
    ]
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
    title: "Funko pop that looks vaguely like Jani Evakalio",
    images: [require("../images/jani.jpg")]
  },
  {
    title: "Bike seat (no bike)",
    images: [require("../images/bike-1.jpg"), require("../images/bike-2.jpg")]
  },
  {
    title: "Toilet doorknob touched by Dan Abromov",
    images: [
      require("../images/bth.jpg"),
      require("../images/bth-dan.jpg"),
      require("../images/bth-me.jpg")
    ]
  }
].map(addLotIds);
