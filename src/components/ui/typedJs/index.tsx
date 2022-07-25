import { useEffect, useRef } from "react";
import Typed from "typed.js";
import React from "react";
import css from "./index.css";

function TypedReactHooksDemo(props) {
	// Create reference to store the DOM element containing the animation
	const el = useRef(null);

	// Create reference to store the Typed instance itself
	const typed = useRef(null);

	let letra;
	if (props.clase == "letra2") {
		letra = props.children.split(" ");
	} else {
		letra = [props.children];
	}

	console.log("soy letra", letra);
	const velocidad = props.velocidad;
	const comenzar = props.comenzar;
	const loop = props.loop;
	console.log("soy props.clase", props.clase);

	const clase =
		props.clase == "letra"
			? css.letra
			: props.clase == "letra2"
			? css.letra2
			: css.letra3;
	console.log("soy clase", clase);

	useEffect(() => {
		const options = {
			strings: letra,
			typeSpeed: velocidad,
			backSpeed: 50,
			loop: loop,
			startDelay: comenzar,
			showCursor: false,
		};

		// elRef refers to the <span> rendered below

		typed.current = new Typed(el.current, options);
	}, []);

	return (
		<div className="wrap">
			<div className="type-wrap">
				<span className={clase} style={{ whiteSpace: "pre" }} ref={el} />
			</div>
		</div>
	);
}
export { TypedReactHooksDemo };
