import { useEffect, useRef } from "react";
import Typed from "typed.js";
import React from "react";
import css from "./index.css";

function TypedReactHooksDemo() {
	// Create reference to store the DOM element containing the animation
	const el = useRef(null);
	const el2 = useRef(null);
	// Create reference to store the Typed instance itself
	const typed = useRef(null);

	useEffect(() => {
		const options = {
			strings: [
				"<strong>Javascript</strong>",
				"<strong>React</strong>",
				"<strong>Css</strong>",
				"<strong>Html</strong>",
				"<strong>Typescript</strong>",
				"<strong>Firebase</strong>",
				"<strong>Postman</strong>",
			],
			typeSpeed: 30,
			backSpeed: 50,
			loop: true,
			startDelay: 3000,
			showCursor: false,
		};
		const option2 = {
			strings: ["<strong> Soy Francisco  <br>WEB DEVELOPER FULLSTACK</strong>"],
			typeSpeed: 40,
			backSpeed: 50,
			showCursor: false,
		};

		// elRef refers to the <span> rendered below
		typed.current = new Typed(el2.current, option2);
		typed.current = new Typed(el.current, options);
	}, []);

	return (
		<div className="wrap">
			<div className="type-wrap">
				<span className={css.letra} style={{ whiteSpace: "pre" }} ref={el2} />
			</div>
			<div className="type-wrap">
				<span className={css.letra2} style={{ whiteSpace: "pre" }} ref={el} />
			</div>
		</div>
	);
}
export { TypedReactHooksDemo };
