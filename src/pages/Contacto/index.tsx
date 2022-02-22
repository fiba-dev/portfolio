import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import css from "./index.css";
import { Layout } from "../../components/layout";
import { TypedReactHooksDemo } from "../../components/ui/typedJs";
import { ProgressPlugin } from "webpack";
import { CardProyects } from "../../components/ui/cards-proyects";
import { sendInfo } from "../../hooks";
function Contacto() {
	const navigate = useNavigate();
	const handlerSubmit = (e) => {
		e.preventDefault();

		const name = e.target.name.value;
		const telefono = e.target.email.value;
		const mensaje =
			"Asunto:" +
			e.target.asunto.value +
			"    Mensaje:" +
			e.target.mensaje.value;

		sendInfo({ name, telefono, mensaje }).then((res) => {
			console.log("termino res", res);
			navigate("/");
			// setInfoWindows(!infoWindows);
			// navigate("/");
		});
	};

	return (
		<div className={css.container}>
			<h1 className={css.titulo}>CONTACTO</h1>
			<div className={css.div__form}>
				<form onSubmit={handlerSubmit} className={css.form}>
					<input
						name="name"
						type={"text"}
						className={css.input}
						placeholder={"Nombre"}
					></input>
					<input
						name="email"
						type="email"
						className={css.input}
						placeholder={"Email"}
					></input>
					<input
						name="asunto"
						type={"text"}
						className={css.input}
						placeholder={"Asunto"}
					></input>
					<textarea
						name="mensaje"
						className={css.input2}
						placeholder={"Mensaje"}
					></textarea>
					<button className={css.button}>Enviar</button>
				</form>
			</div>
		</div>
	);
}

export { Contacto };
