import { useState, useEffect } from "react";

export const currencies = {
  FTC: { name: "Formicoins", symbol: "₣", rate: -2 },
  USD: { name: "US dollar", symbol: "$", rate: 1 },
  EUR: { name: "Euro", symbol: "€", rate: 0.91 },
  GBP: { name: "British Pound", symbol: "£", rate: 0.77 },
  MXN: { name: "Mexican Peso", symbol: "$", rate: 19.55 },
  JPY: { name: "Japanese Yen", symbol: "¥", rate: 109.48 }
};

export const getPrices = (basePrice, ftcRate) =>
  Object.entries(currencies).map(([key, { rate }]) => {
    const dollarPrice = basePrice * ftcRate;
    return {
      currency: key,
      value: key === "FTC" ? basePrice : dollarPrice * rate
    };
  });

export const useFtcRate = () => {
  const [rate, setRate] = useState(Math.random());
  useEffect(() => {
    const itvl = setInterval(() => {
      const diff = (0.5 - Math.random()) / 10;
      setRate(r => (r > 0.5 ? r + diff : r + Math.abs(diff)));
    }, 100);
    return () => {
      clearTimeout(itvl);
    };
  });
  return rate;
};
