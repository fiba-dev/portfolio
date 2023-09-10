import { UsaFlag, SpainFlag } from "../ui/buttons";
import React from "react";
import css from "./index.css";

export function SelectLenguageDesktop(props) {
	return (
		<div onClick={props.onClick} className={css.container_lenguage_desktop}>
			<a className={css.lenguage} href="/en">
				EN
			</a>
			<a className={css.lenguage} href="/">
				ES
			</a>
		</div>
	);
}
export function SelectLenguageMobile(props) {
	return (
		<div onClick={props.onClick} className={css.container_lenguage_mobile}>
			<a className={css.lenguage} href="/en">
				EN
			</a>
			<a className={css.lenguage} href="/">
				ES
			</a>
		</div>
	);
}
