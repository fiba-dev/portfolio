import React from "react";
import css from "./index.css";
function Button(props) {
	return <button className={css.root}>{props.children}</button>;
}
function DesktopIcon(props) {
	return (
		<button className={css.desktop__button} onClick={props.onClick}>
			{props.children}
		</button>
	);
}
function MobilIcon(props) {
	return (
		<button className={css.mobil__button} onClick={props.onClick}>
			{props.children}
		</button>
	);
}
function CurriculumButton(props) {
	return (
		<a href="https://drive.google.com/uc?export=download&id=1NIWvuAx9wJi3ZNUEPV15NNHFiu9P2kUC">
			{" "}
			<button className={css.cv}>
				className={css.cv__link}
				CURRICULUM
			</button>
		</a>
	);
}
export { Button, DesktopIcon, MobilIcon };
