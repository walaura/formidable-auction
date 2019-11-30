const listen = (callback: (button: unknown) => void) => {
	let lastKnown = [];
	const pollGamepads = () => {
		// Grab a list of gamepads that are currently connected or a empty array
		const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
		const pressedButtons = [];

		// Loop through all gamepads connect to the computer
		for (let g = 0; g < gamepads.length; g++) {
			const gp = gamepads[g];
			if (!!gp) {
				// Loop through all gamepad buttons pick out pressed ones
				for (let b = 0; b < gp.buttons.length; b++) {
					if (gp.buttons[b].pressed) {
						pressedButtons.push(b);
					}
				}
			}
		}
		if (lastKnown.join() !== pressedButtons.join()) {
			const diff = pressedButtons.filter(id => !lastKnown.includes(id));
			diff.forEach(callback);
			lastKnown = [...pressedButtons];
		}
	};
	setInterval(pollGamepads, 100);
	window.addEventListener('keydown',ev=>{
		callback(ev.code)
	})
};

export { listen };
