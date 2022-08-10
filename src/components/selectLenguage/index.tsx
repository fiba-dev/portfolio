import { UsaFlag, SpainFlag } from "../ui/buttons";
import React from "react";
import css from "./index.css";
import { ProgressPlugin } from "webpack";
export function SelectLenguageDesktop(props) {
	return (
		<a onClick={props.onClick} className={css.container_lenguage_desktop}>
			<UsaFlag href="/en"></UsaFlag>
			<SpainFlag href="/"></SpainFlag>
		</a>
	);
}
export function SelectLenguageMobile(props) {
	return (
		<a onClick={props.onClick} className={css.container_lenguage_mobile}>
			<UsaFlag href="/en"></UsaFlag>
			<SpainFlag href="/"></SpainFlag>
		</a>
	);
}
