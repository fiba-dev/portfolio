import React from "react";
import css from "./index.css";

function AboutMe() {
	return (
		<div className={css.container}>
			<img
				className={css.robot}
				src="https://res.cloudinary.com/fiba06-dev/image/upload/v1654465374/portfolio/robot-izq_uhflq0.png"
			></img>
			<h1 className={css.titulo}>Sobre mi</h1>
			<div className={css.container__column}>
				<div className={css.column}>
					<h1>Soy Francisco Ibarrola</h1>
					<text>
						{" "}
						Soy una persona muy apasionada por la tecnología, en el año 2010
						obtuve una base solida sobre los fundamentos de la programación.
						desde el año 2020 comencé con videos de YouTube acerca de JavaScript
						y en enero del 2021 con un curso de full-stack. Actualmente en 2022
						me encuentro capacitado para afrontar nuevos desafíos
					</text>
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
