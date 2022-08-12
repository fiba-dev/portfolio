import React, { useState } from "react";
import {
	BurgerButton,
	DesktopIcon,
	GithubButton,
	HomeButton,
	MobilIcon,
} from "../../ui/buttons";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
import { SelectLenguageMobile } from "../../selectLenguage";
import { Particulas } from "../../ui/particles";
let estado = false;

function Header() {
	const navigate = useNavigate();
	const [estado, cambiarEstado] = useState(false);
	function restartTypedJs(path) {
		window.location.href = path;
	}
	return (
		<div className={css.main}>
			<HomeButton
				href="#main"
				onClick={() => {
					console.log("SOY RESET");

					restartTypedJs("#main");
				}}
			></HomeButton>
			<div className={css.links_container}>
				<DesktopIcon className={css.links} href="#aboutme">
					{" "}
					Perfil{" "}
				</DesktopIcon>

				<DesktopIcon className={css.links} href="#proyectos">
					{" "}
					Proyectos{" "}
				</DesktopIcon>
				<DesktopIcon className={css.links} href="#contacto">
					Contacto
				</DesktopIcon>
				<div className={css.redes}>
					{" "}
					<GithubButton
						href="https://github.com/fiba-dev"
						target="_blank"
					></GithubButton>
				</div>
			</div>
			<div>
				{estado && (
					<div className={css.ventana}>
						<a
							className={css.close__button}
							onClick={() => {
								cambiarEstado(!estado);
							}}
						>
							{" "}
							X
						</a>
						<MobilIcon
							className={css.mobil__links}
							onClick={() => {
								cambiarEstado(!estado);
							}}
							href="#main"
						>
							Inicio{" "}
						</MobilIcon>
						<MobilIcon
							className={css.mobil__links}
							onClick={() => {
								cambiarEstado(!estado);
							}}
							href="#aboutme"
						>
							Perfil
						</MobilIcon>

						<MobilIcon
							className={css.mobil__links}
							onClick={() => {
								cambiarEstado(!estado);
								restartTypedJs("#proyectos");
							}}
							href="#proyectos"
						>
							Proyectos
						</MobilIcon>
						<MobilIcon
							className={css.mobil__links}
							href="#contacto"
							onClick={() => {
								cambiarEstado(!estado);
								restartTypedJs("#contacto");
							}}
						>
							Contacto{" "}
						</MobilIcon>
						<div className={css.redes}>
							{" "}
							<GithubButton
								href="https://github.com/fiba-dev"
								target="_blank"
							></GithubButton>
						</div>
						<SelectLenguageMobile
							onClick={() => {
								cambiarEstado(!estado);
							}}
						></SelectLenguageMobile>
					</div>
				)}
			</div>

			<BurgerButton
				className={css.mobile_menu}
				onClick={() => {
					cambiarEstado(!estado);
				}}
			></BurgerButton>
		</div>
	);
}

export { Header };
