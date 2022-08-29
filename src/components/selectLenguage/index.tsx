import { UsaFlag, SpainFlag } from "../ui/buttons";
import React from "react";
import css from "./index.css";

export function SelectLenguageDesktop(props) {
	return (
		<div onClick={props.onClick} className={css.container_lenguage_desktop}>
			<UsaFlag href="/en"></UsaFlag>
			<SpainFlag href="/"></SpainFlag>
		</div>
	);
}
export function SelectLenguageMobile(props) {
	return (
		<div onClick={props.onClick} className={css.container_lenguage_mobile}>
			<UsaFlag href="/en"></UsaFlag>
			<SpainFlag href="/"></SpainFlag>
		</div>
	);
}
