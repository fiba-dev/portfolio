import React from "react";
import { Link } from "react-router-dom";
import css from "../es/index.css";

import { TypedReactHooksDemo } from "../../components/ui/typedJs";
import { Particulas } from "../../components/ui/particles";
import { Contact } from "../../components/en/Contact";
import { Proyects } from "../../components/en/Proyectos";
import { AboutMeEn } from "../../components/en/AboutMe";
import { SelectLenguageDesktop } from "../../components/selectLenguage";
function HomeEn() {
	return (
		<div className={css.main} id="main">
			<SelectLenguageDesktop></SelectLenguageDesktop>
			<div className={css.container}>
				<div className={css.home__name__div}>
					<Particulas></Particulas>
					<img
						className={css.robot}
						src="https://res.cloudinary.com/fiba06-dev/image/upload/v1646670365/portfolio/robot_2_1_yrfc1h.png"
					></img>
					<h1 className={css.titulo}>¡Hello World!</h1>
					<div className={css.typed}>
						<TypedReactHooksDemo velocidad={30} clase={"letra"} loop={false}>
							I'm Fran
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
			</div>
			<AboutMeEn id="aboutme"></AboutMeEn>
			<Proyects></Proyects>
			<Contact></Contact>
		</div>
	);
}

export { HomeEn };
