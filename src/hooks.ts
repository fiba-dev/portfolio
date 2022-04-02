import react from "react";

import { API_URL } from "./apiURL";


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
