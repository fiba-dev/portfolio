import React from "react";
import css from "./index.css";

function AboutMe() {
	return (
		<div className={css.container}>
			<h1 className={css.titulo}>Sobre mi</h1>
			<div className={css.container__column}>
				<div className={css.column}>
					<h2>Soy Francisco Ibarrola</h2>
					<text>
						{" "}
						Soy una persona apasionada por la tecnologia, con una motivacion
						constante por aprender cosas nuevas y mejorar. comence nuevamente
						con la programacion a principios del 2020, y por el mes de marzo
						ingrese a un curso de 12 modulos fullstack en apx donde invierto la
						mayor parte del tiempo en practicar y desafiarme constantemente.
					</text>
				</div>
				<div className={css.column}>
					<button className={css.cv}>
						<a
							className={css.cv__link}
							href="https://drive.google.com/uc?export=download&id=1NIWvuAx9wJi3ZNUEPV15NNHFiu9P2kUC"
						>
							CURRICULUM
						</a>
					</button>{" "}
				</div>
			</div>
		</div>
	);
}

export { AboutMe };
