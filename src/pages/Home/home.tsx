import React from "react";
import { Link } from "react-router-dom";
import css from "./index.css";
import { Layout } from "../../components/layout";
import { AboutMe } from "../AboutMe";
import { TypedReactHooksDemo } from "../../components/ui/typedJs";
import { Particulas } from "../../components/ui/particles";
function Home() {
	return (
		<div className={css.main}>
			<div className={css.container}>
				<div className={css.home__name__div}>
					<img
						className={css.robot}
						src="https://res.cloudinary.com/fiba06-dev/image/upload/v1646516872/portfolio/robot_2_fga3vu.png"
					></img>
					<h1 className={css.titulo}>¡Hello World!</h1>
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
							Javascript React Css Html Typescript Firebase Postman
						</TypedReactHooksDemo>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Home };
