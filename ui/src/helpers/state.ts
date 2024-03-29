import { Dispatch, useEffect } from "react";
import { lots } from "./lots";
import { PageState } from "./state";
import { useSocketReducer } from "./socket";
import { listen } from "./gamepad";

export interface PageState {
  lot: number;
  price: number;
  teaser: boolean;
  synced: boolean;
}

export type PageStateActions =
  | { type: "reset" }
  | { type: "prev_lot" }
  | { type: "next_lot" }
  | { type: "set_lot"; lot: PageState["lot"] }
  | { type: "toggle_teaser" }
  | { type: "set_price_to_starting" }
  | { type: "set_price"; price: PageState["price"] }
  | { type: "boost_price"; price: PageState["price"] };

const initialState: PageState = {
  price: 0,
  lot: 0,
  teaser: true,
  synced: true
};

export const usePageState = (): [PageState, Dispatch<PageStateActions>] => {
  const [state, dispatch] = useSocketReducer<PageState, PageStateActions>(
    (state, action) => {
      switch (action.type) {
        case "reset":
          return initialState;
        case "prev_lot":
          const prev = state.lot - 1;
          return { ...initialState, lot: lots[prev] ? prev : lots.length - 1 };
        case "next_lot":
          const next = state.lot + 1;
          return { ...initialState, lot: lots[next] ? next : 0 };
        case "set_lot":
          return { ...initialState, lot: lots[action.lot] ? action.lot : 0 };
        case "set_price":
          return { ...state, price: action.price };
        case "set_price_to_starting":
          return { ...state, price: lots[state.lot].startingPrice };
        case "boost_price":
          return { ...state, price: state.price + action.price };
        case "toggle_teaser":
          return { ...state, teaser: !state.teaser, price: 0 };
      }
      return state;
    },
    { ...initialState, synced: false }
  );
  useEffect(() => {
    listen(btn => {
      if (btn === 0 || btn === "ArrowRight") {
        dispatch({ type: "next_lot" });
      } else if (btn === 3 || btn === "ArrowLeft") {
        dispatch({ type: "prev_lot" });
      } else if (btn === 1 || btn === "ArrowUp") {
        dispatch({ type: "set_price_to_starting" });
      } else if (btn === 2 || btn === "ArrowDown") {
        dispatch({ type: "toggle_teaser" });
      }
    });
  }, []);

  return [state, dispatch];
};
