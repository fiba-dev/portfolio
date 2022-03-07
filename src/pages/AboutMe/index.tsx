import React from "react";
import css from "./index.css";

function AboutMe() {
	return (
		<div className={css.container}>
			<img
				className={css.robot}
				src="https://res.cloudinary.com/fiba06-dev/image/upload/v1646670365/portfolio/robot_2_1_yrfc1h.png"
			></img>
			<h1 className={css.titulo}>Sobre mi</h1>
			<div className={css.container__column}>
				<div className={css.column}>
					<h1>Soy Francisco Ibarrola</h1>
					<text>
						{" "}
						Soy una persona apasionada por la tecnologia, con una motivacion
						constante por aprender cosas nuevas y mejorar. comence nuevamente
						con la programacion a principios del 2020, y por el mes de marzo
						ingrese a un curso de 12 modulos fullstack en apx donde invierto la
						mayor parte del tiempo en practicar y desafiarme constantemente.
					</text>
				</div>
				<a
					className={css.cv__link}
					href="https://drive.google.com/uc?export=download&id=1JlevkGly9Ddu6V-oBWpmyPwFrkD0Jrro"
				>
					CURRICULUM
				</a>{" "}
			</div>
		</div>
	);
}

export { AboutMe };
