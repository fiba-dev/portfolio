import React, { useState } from "react";

import css from "./index.css";
import { useNavigate, NavLink } from "react-router-dom";
let estado = false;

function Header() {
	const navigate = useNavigate();
	const [estado, cambiarEstado] = useState(false);
	return (
		<div className={css.main}>
			<button
				onClick={() => {
					navigate("/");
				}}
				className={css.home_icon}
			></button>
			<div
				className={css.mobile_menu}
				onClick={() => {
					cambiarEstado(!estado);
				}}
			></div>
			<div>
				{estado && (
					<div className={css.ventana}>
						<button
							className={css.close__button}
							onClick={() => {
								cambiarEstado(!estado);
							}}
						>
							{" "}
							X
						</button>
						<button
							className={css.mobil__links}
							onClick={() => {
								navigate("/");
								cambiarEstado(!estado);
							}}
						>
							Menu{" "}
						</button>
						<button
							className={css.mobil__links}
							onClick={() => {
								navigate("/aboutme");
								cambiarEstado(!estado);
							}}
						>
							Perfil
						</button>

						<button
							className={css.mobil__links}
							onClick={() => {
								navigate("/proyects");
								cambiarEstado(!estado);
							}}
						>
							Proyectos
						</button>
						<button
							className={css.mobil__links}
							onClick={() => {
								navigate("/contacto");
								cambiarEstado(!estado);
							}}
						>
							Contacto{" "}
						</button>
					</div>
				)}
			</div>
			<div className={css.links_container}>
				<button
					className={css.links}
					onClick={() => {
						navigate("/aboutme");
					}}
				>
					{" "}
					About Me{" "}
				</button>

				<button
					className={css.links}
					onClick={() => {
						navigate("proyects");
					}}
				>
					{" "}
					Proyects{" "}
				</button>
				<button
					className={css.links}
					onClick={() => {
						navigate("/contacto");
					}}
				>
					Contact
				</button>
			</div>
		</div>
	);
}

export { Header };
