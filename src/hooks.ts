import react from "react";
import { useEffect, useLayoutEffect } from "react";
import {
	atom,
	useRecoilState,
	useRecoilValue,
	selector,
	useSetRecoilState,
	RecoilState,
} from "recoil";
import { API_URL } from "./apiURL";

//ENVIA EMAIL CON LA INFORMACION DE DONDE VIERON LA MASCOTA
export async function sendInfo(params) {
	const res = await fetch(API_URL + "/contact", {
		method: "post",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({
			donde: params.mensaje,
			name: params.name,

			telefono: params.telefono,
		}),
	});

	const data = await res.json();

	return data;
}
