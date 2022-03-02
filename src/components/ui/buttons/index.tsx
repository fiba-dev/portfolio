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

export { Button, DesktopIcon, MobilIcon };
