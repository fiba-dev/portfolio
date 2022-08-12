import React, { useState } from "react";
import {
	BurgerButton,
	DesktopIcon,
	GithubButton,
	HomeButton,
	MobilIcon,
} from "../../ui/buttons";
import css from "../../es/header/index.css";
import { useNavigate } from "react-router-dom";
import { SelectLenguageMobile } from "../../selectLenguage";
let estado = false;

function HeaderEn() {
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
					restartTypedJs("#main");
				}}
			></HomeButton>
			<div className={css.links_container}>
				<DesktopIcon className={css.links} href="#aboutme">
					{" "}
					About Me{" "}
				</DesktopIcon>

				<DesktopIcon className={css.links} href="#proyects">
					{" "}
					Proyects{" "}
				</DesktopIcon>
				<DesktopIcon className={css.links} href="#contact">
					Contact
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
							Main{" "}
						</MobilIcon>
						<MobilIcon
							className={css.mobil__links}
							onClick={() => {
								cambiarEstado(!estado);
							}}
							href="#aboutme"
						>
							About Me
						</MobilIcon>

						<MobilIcon
							className={css.mobil__links}
							onClick={() => {
								cambiarEstado(!estado);
								restartTypedJs("#proyects");
							}}
							href="#proyects"
						>
							Proyects
						</MobilIcon>
						<MobilIcon
							className={css.mobil__links}
							href="#contact"
							onClick={() => {
								cambiarEstado(!estado);
								restartTypedJs("#contact");
							}}
						>
							Contact{" "}
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

export { HeaderEn };
