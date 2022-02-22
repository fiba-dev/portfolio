import React from "react";
import { Link } from "react-router-dom";
import css from "./index.css";
import { Layout } from "../../components/layout";
import { AboutMe } from "../AboutMe";
import { TypedReactHooksDemo } from "../../components/ui/typedJs";

function Home() {
	return (
		<div className={css.main}>
			<div className={css.container}>
				<div className={css.home__name__div}>
					<h1 className={css.titulo}>¡HOLA A TODOS!</h1>
					<TypedReactHooksDemo></TypedReactHooksDemo>
				</div>
			</div>
		</div>
	);
}

export { Home };
