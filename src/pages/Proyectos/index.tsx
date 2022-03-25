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
			title: "Modelo Portfolio",
			key: 1,
			pictureURL:
				"https://res.cloudinary.com/fiba06-dev/image/upload/v1646669861/portfolio/modulo4_por71k.jpg",
			info: " Primera pagina con diseño responsive, utilizando datos randoms administrados desde contentful, y enviando request para poder utilizar el formulario de contacto",
			GitHub: "https://github.com/fiba-dev/desafio-final-m4.git",
			webPage: "https://fiba-dev.github.io/desafio-final-m4/",
		},
		{
			title: "Piedra-Papel-Tijeta vs Maquina",
			key: 2,
			pictureURL:
				"https://res.cloudinary.com/fiba06-dev/image/upload/v1646669867/portfolio/piedra-papel-tijera-maquina_xqgiio.jpg",
			info: " Se trabajo con la arquitectura web pages-components, estado, Router y Parcel. ",
			GitHub: "https://fiba-dev.github.io/dwf-m5-parcel-server/",
			webPage: "https://github.com/fiba-dev/dwf-m5-parcel-server.git/",
		},
		{
			title: "Piedra-Papel-Tijeta Multijugador Online",
			key: 3,
			pictureURL:
				"https://res.cloudinary.com/fiba06-dev/image/upload/v1646669873/portfolio/piedra-papel-tijera-multi_1_uc3cxa.jpg",
			info: " Se creo el Juego de Piedra Papel o Tijera multijugador, usando firebase, Realtime DB, express y documentando en postman. ",
			GitHub: "https://github.com/fiba-dev/m6-desafio-final.git",
			webPage: "https://m6-desafio-final.herokuapp.com/",
		},
		{
			title: "Reportar Mascotas Perdidas",
			key: 4,
			pictureURL:
				"https://res.cloudinary.com/fiba06-dev/image/upload/v1646669817/portfolio/modulo7_c8ysny_1_ivpwbm.jpg",
			info: " Se hizo enfoque en el backend, aplicando estructura MVC, añadiendo librerias como SendGrid, Algolia, Cloudinary, Mapbox. ",
			GitHub: "https://github.com/fiba-dev/m7-final.git",
			webPage: "https://m7-final.herokuapp.com/",
		},
		{
			title: "Reportar Mascotas Perdidas 2",
			key: 5,
			pictureURL:
				"https://res.cloudinary.com/fiba06-dev/image/upload/v1646669934/portfolio/modulo8_1_uyaz6f.jpg",
			info: " Se trabajo con React,utilizando el un backend ya armado, tambien utilizando Algolia, Mapbox, dividiendo en capas, como componentes UI y hooks.  ",
			GitHub: "https://github.com/fiba-dev/dwf-m8.git",
			webPage: "https://dwf-m8-fiba-dev.web.app/",
		},

		{
			title: "Portfolio",
			key: 6,
			pictureURL:
				"https://res.cloudinary.com/fiba06-dev/image/upload/v1646669880/portfolio/portfolio_1_qsvyjd.jpg",
			info: " Se trabajo con React, tiene componentes,ui, y la llamada correspondiente para enviar un email para contactar. ",
			GitHub: "https://github.com/fiba-dev/portfolio.git",
			webPage: "https://portfolio-f9b95.firebaseapp.com/",
		},
	];

	return (
		<div className={css.container}>
			<h1 className={css.titulo}>Proyectos Realizados</h1>

			<div className={css.home__name__div}>
				{proyectos.map((r, index) => (
					<CardProyects
						title={r.title}
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
