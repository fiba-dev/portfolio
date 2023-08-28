import React from "react";
import { Link } from "react-router-dom";
import css from "./index.css";

import { TypedReactHooksDemo } from "../../components/ui/typedJs/index";
import { Particulas } from "../../components/ui/particles";
import { Contacto } from "../../components/es/Contacto";
import { Proyectos } from "../../components/es/Proyectos";
import { AboutMe } from "../../components/es/AboutMe";
import { SelectLenguageDesktop } from "../../components/selectLenguage";
import { MenuDesktop, MenuMobil } from "../../components/es/framer-motion";
import { MenuToggle } from "../../components/ui/buttons";

function Home() {
	return (
		<div className={css.main} id="main">
			<div className={css.container}>
				<SelectLenguageDesktop></SelectLenguageDesktop>

				<div className={css.home__name__div}>
					<h1 className={css.titulo}>¡Hola Mundo!</h1>
					<div className={css.typed}>
						<TypedReactHooksDemo velocidad={30} clase={"letra"} loop={false}>
							Soy Fran
						</TypedReactHooksDemo>
						<TypedReactHooksDemo
							velocidad={20}
							comenzar={1000}
							clase={"letra"}
							loop={false}
						>
							WEB DEVELOPER
						</TypedReactHooksDemo>
						<TypedReactHooksDemo
							velocidad={20}
							comenzar={2000}
							clase={"letra2"}
							loop={true}
						>
							React.js Css Html Typescript Firebase Vercel Postman Scrum Github
						</TypedReactHooksDemo>
					</div>
				</div>

				<AboutMe id="aboutme"></AboutMe>
			</div>

			<Proyectos></Proyectos>

			<Contacto></Contacto>
		</div>
	);
}

export { Home };
