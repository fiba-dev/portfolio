import React from "react";
import css from "./index.css";
function Button(props) {
	return <button className={css.root}>{props.children}</button>;
}
function DesktopIcon(props) {
	return (
		<a
			className={css.desktop__button}
			href={props.href}
			onClick={props.onClick}
		>
			{props.children}
		</a>
	);
}
function MobilIcon(props) {
	return (
		<a className={css.mobil__button} onClick={props.onClick} href={props.href}>
			{props.children}
		</a>
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
