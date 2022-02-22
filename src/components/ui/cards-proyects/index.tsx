import React, { useState } from "react";
import css from "./index.css";
import { Link } from "react-router-dom";

function CardProyects(props) {
	console.log("entre al log", props.id);
	let claseDiv;
	if (props.id % 2 == 0) {
		console.log("soy props.id");
		claseDiv = css.div1;
	} else {
		claseDiv = css.div2;
	}
	return (
		<div className={claseDiv}>
			<div className={css.container}>
				<a>
					<img
						onClick={props.handlerImage}
						src={props.pictureURL}
						className={css.imagen}
					></img>
				</a>
				<div className={css.links__container}>
					<a href={props.webPage} target="_blank" className={css.informacion}>
						Web-Page
					</a>

					<a className={css.informacion} target="_blank" href={props.GitHub}>
						Git-Hub
					</a>
				</div>
			</div>
			<div className={css.info_container}>
				<div className={css.info}>
					<h4 className={css.webpage__detalle}>{props.info}</h4>
				</div>
			</div>
		</div>
	);
}
export { CardProyects };
