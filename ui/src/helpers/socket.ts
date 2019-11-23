import { Dispatch, Reducer, useEffect, useReducer, useRef } from "react";

type GenericAction = { type: string };

export const useSocketReducer = <S, A extends GenericAction>(
	reducer: Reducer<S, A>,
	initialState: S
): [S, Dispatch<A>] => {
	const [state, dispatch] = useReducer<Reducer<S, A>>(reducer, initialState);

	const socket = useRef<WebSocket>();
	useEffect(() => {
		socket.current = new WebSocket(
			`wss://connect.websocket.in/v2/${"1"}?token=${process.env.TOKEN}`
		);
		socket.current.onmessage = event => {
			try {
				const action = JSON.parse(event.data) as A;
				if (action.type) {
					console.log("received action");
					dispatch(action);
				} else {
					throw "invalid action";
				}
			} catch (e) {
				console.error(e);
			}
		};
		socket.current.onerror = err => {
			throw err;
		};
	}, []);

	return [
		state,
		(action: A) => {
			if (socket.current && socket.current.readyState) {
				socket.current.send(JSON.stringify(action));
			} else {
				console.error("ate up state");
			}
			dispatch(action);
		}
	];
};
