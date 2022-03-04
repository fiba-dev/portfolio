import React, { useState } from "react";
import { DesktopIcon, MobilIcon } from "../ui/buttons";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
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
			<button
				className={css.mobile_menu}
				onClick={() => {
					cambiarEstado(!estado);
				}}
			></button>
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
						<MobilIcon
							className={css.mobil__links}
							onClick={() => {
								navigate("/");
								cambiarEstado(!estado);
							}}
						>
							Menu{" "}
						</MobilIcon>
						<MobilIcon
							className={css.mobil__links}
							onClick={() => {
								navigate("/aboutme");
								cambiarEstado(!estado);
							}}
						>
							Perfil
						</MobilIcon>

						<MobilIcon
							className={css.mobil__links}
							onClick={() => {
								navigate("/proyects");
								cambiarEstado(!estado);
							}}
						>
							Proyectos
						</MobilIcon>
						<MobilIcon
							className={css.mobil__links}
							onClick={() => {
								navigate("/contacto");
								cambiarEstado(!estado);
							}}
						>
							Contacto{" "}
						</MobilIcon>
					</div>
				)}
			</div>
			<div className={css.links_container}>
				<DesktopIcon
					className={css.links}
					onClick={() => {
						navigate("/aboutme");
					}}
				>
					{" "}
					About Me{" "}
				</DesktopIcon>

				<DesktopIcon
					className={css.links}
					onClick={() => {
						navigate("proyects");
					}}
				>
					{" "}
					Proyects{" "}
				</DesktopIcon>
				<DesktopIcon
					className={css.links}
					onClick={() => {
						navigate("/contacto");
					}}
				>
					Contact
				</DesktopIcon>
			</div>
		</div>
	);
}

export { Header };
