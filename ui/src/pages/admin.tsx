import css from "@emotion/css";
import React from "react";
import Layout from "../components/layout";
import tokens from "../helpers/tokens";
import { usePageState } from "../helpers/state";
import { lots } from "../helpers/lots";

const navLayout = css`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  height: 100vh;
  width: 100vw;
  > :first-child {
    background: ${tokens.dark};
    color: #fff;
  }
  > * {
    padding: 1em;
  }
  button {
    border: none;
    display: flex;
    width: 100%;
    padding: 2em;
    align-items: center;
    justify-content: center;
    background-color: ${tokens.brand};
    color: ${tokens.textOverBrand};
    font-size: 1em;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      filter: brightness(1.1);
      transform: scale(1.01);
    }
    &[data-secondary] {
      background: #aaa;
      color: ${tokens.dark};
      font-weight: normal;
    }
  }
  input {
    border: 2px solid black;
    display: flex;
    width: 100%;
    padding: 2em;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: bold;
  }
`;

const rowStyles = css`
  display: grid;
  grid-auto-columns: auto;
  grid-template-rows: 1fr;
  gap: 1em;
  grid-auto-flow: column;
  align-items: flex-start;
`;

const uppers = [1, 10, 100];

const SecondPage = () => {
  const [state, dispatch] = usePageState();

  return (
    <Layout>
      <div css={navLayout}>
        <div
          css={css`
            display: grid;
            grid-template-rows: auto 1fr auto;
            grid-gap: 1em;
          `}
        >
          <h1>
            {lots[state.lot].id} - {lots[state.lot].title}
          </h1>
          <div css={rowStyles}>
            <button
              data-secondary
              onClick={() => {
                dispatch({ type: "prev_lot" });
              }}
            >
              👈
            </button>
            <button
              onClick={() => {
                dispatch({ type: "next_lot" });
              }}
            >
              Next lot 👉
            </button>
          </div>
          <button
            onClick={() => {
              dispatch({ type: "reset" });
            }}
            data-secondary
          >
            reset & sync
          </button>
        </div>
        {state.teaser ? (
          <div
            css={css`
              display: grid;
            `}
          >
            <button
              onClick={() => {
                dispatch({ type: "toggle_teaser" });
              }}
            >
              REVEAL ITEM
            </button>
          </div>
        ) : (
          <div
            css={css`
              display: grid;
              grid-auto-rows: min-content;
              align-content: space-between;
            `}
          >
            <div
              css={css`
                display: grid;
                gap: 1em;
                grid-auto-rows: min-content;
              `}
            >
              <h2>Price - {state.price}</h2>
              <div css={rowStyles}>
                {(state.price === 0
                  ? [lots[state.lot].startingPrice]
                  : uppers
                ).map(upper => (
                  <button
                    key={upper}
                    onClick={() => {
                      dispatch({ type: "boost_price", price: upper });
                    }}
                  >
                    {state.price === 0 ? "start at " + upper : "+" + upper}
                  </button>
                ))}
              </div>
            </div>
            <div
              css={css`
                display: grid;
                gap: 1em;
                grid-auto-rows: min-content;
              `}
            >
              <h2>type a price</h2>
              <form
                onSubmit={ev => {
                  ev.preventDefault();
                  const price = parseInt(new FormData(ev.target).get("price"));
                  if (price && !isNaN(price)) {
                    dispatch({ type: "set_price", price });
                    ev.target.reset();
                  }
                }}
                css={css`
                  display: grid;
                  grid-template-columns: 1fr min-content;
                `}
              >
                <input
                  placeholder={state.price.toString()}
                  type="number"
                  name="price"
                  autoFocus
                ></input>
                <button>submit</button>
              </form>
            </div>

            <button
              css={
                state.price === 0 &&
                css`
                  visibility: hidden;
                `
              }
              data-secondary
              disabled={state.price === 0}
              onClick={() => {
                dispatch({ type: "set_price", price: 0 });
              }}
            >
              reset to 0
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SecondPage;
