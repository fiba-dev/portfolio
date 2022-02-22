import React from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./index.css";
import { Layout } from "../../components/layout";
import { TypedReactHooksDemo } from "../../components/ui/typedJs";
import { ProgressPlugin } from "webpack";
import { CardProyects } from "../../components/ui/cards-proyects";

function Proyectos() {
	const proyectos = [
		{
			key: 1,
			pictureURL:
				"https://res.cloudinary.com/fiba06-dev/image/upload/v1645216294/dwf-m8/searchpet_ovefc7.jpg",
			info: " Se trabajo con React, se utilizo algolia, Mabpox, Dropzone,Cloudinary ",
			GitHub: "https://github.com/fiba-dev/dwf-m8.git",
			webPage: "https://dwf-m8-fiba-dev.web.app/",
		},
		{
			key: 2,
			pictureURL:
				"https://res.cloudinary.com/fiba06-dev/image/upload/v1645459311/dwf-m8/modulo7_c8ysny.jpg",
			info: " Se trabajo con React, se utilizo algolia, Mabpox, Dropzone,Cloudinary ",
			GitHub: "https://github.com/fiba-dev/dwf-m8.git",
			webPage: "https://dwf-m8-fiba-dev.web.app/",
		},
		{
			key: 3,
			pictureURL:
				"https://res.cloudinary.com/fiba06-dev/image/upload/v1645459311/dwf-m8/modulo7_c8ysny.jpg",
			info: " Se trabajo con React, se utilizo algolia, Mabpox, Dropzone,Cloudinary ",
			GitHub: "https://github.com/fiba-dev/dwf-m8.git",
			webPage: "https://dwf-m8-fiba-dev.web.app/",
		},
	];

	return (
		<div className={css.container}>
			<h1 className={css.titulo}>Proyectos Realizados</h1>

			<div className={css.home__name__div}>
				{proyectos.map((r, index) => (
					<CardProyects
						pictureURL={r.pictureURL}
						info={r.info}
						GitHub={r.GitHub}
						webPage={r.webPage}
						key={index}
						id={r.key}
					></CardProyects>
				))}
			</div>
		</div>
	);
}

export { Proyectos };
