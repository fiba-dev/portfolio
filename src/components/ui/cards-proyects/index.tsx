import React, { useState } from "react";
import css from "./index.css";
import { Link } from "react-router-dom";

function CardProyects(props) {
	return (
		<div className={css.container}>
			<div className={css.card}>
				<div className={[css.card_front, css.face].join(" ")}>
					<a>
						<img
							loading="lazy"
							onClick={props.handlerImage}
							src={props.pictureURL}
							className={css.imagen}
						></img>
					</a>{" "}
				</div>

				<div className={[css.card_back, css.face].join(" ")}>
					<h1>{props.title}</h1>
					<p>{props.info}</p>

					<div className={css.links__container}>
						<a href={props.webPage} target="_blank" className={css.informacion}>
							Web-Page
						</a>

						<a className={css.informacion} target="_blank" href={props.GitHub}>
							Git-Hub
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export { CardProyects };
