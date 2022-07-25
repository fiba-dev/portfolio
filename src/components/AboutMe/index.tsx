import React from "react";
import { TypedReactHooksDemo } from "../ui/typedJs";
import css from "./index.css";

function AboutMe(props) {
	return (
		<div className={css.container} id={props.id}>
			<div className={css.titulo}>
				{" "}
				<TypedReactHooksDemo velocidad={50} loop={false} class="letra3">
					Sobre mi
				</TypedReactHooksDemo>
			</div>

			<div className={css.container__column}>
				<div className={css.column}>
					<h1>Soy Francisco Ibarrola</h1>
					<p>
						{" "}
						Soy una persona muy apasionada por la tecnología, en el año 2010
						obtuve una base solida sobre los fundamentos de la programación.
						desde el año 2020 comencé con videos de YouTube acerca de JavaScript
						y en enero del 2021 con un curso de full-stack en APX aprendiendo
						React.js, Node.js y mucho mas. Actualmente en 2022 me encuentro
						capacitado para afrontar nuevos desafíos
					</p>
				</div>
				<a
					className={css.cv__link}
					href="https://drive.google.com/uc?export=download&id=1xtU4JfywLBZbjl5KtRzPISEhHD3GrSHn"
				>
					CURRICULUM
				</a>{" "}
			</div>
		</div>
	);
}

export { AboutMe };
