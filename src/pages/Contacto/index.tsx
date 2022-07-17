import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./index.css";

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
			<img
				className={css.robot}
				src="https://res.cloudinary.com/fiba06-dev/image/upload/v1646670365/portfolio/robot_2_1_yrfc1h.png"
			></img>
			<h1 className={css.titulo}>Contacto</h1>
			<div className={css.div__form}>
				<a
					href=" https://wa.me/+5491133180059"
					target="_blank"
					className={css.icons}
				>
					<img
						src="https://res.cloudinary.com/fiba06-dev/image/upload/v1658019259/portfolio/pngwing.com_l0ymyv.png"
						className={css.whatsapp}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/fran-ibarrola/"
					className={css.icons}
					target="_blank"
				>
					<img
						src="https://res.cloudinary.com/fiba06-dev/image/upload/v1658019258/portfolio/pngwing.com_1_lopg2d.png"
						className={css.linkedin}
					/>
				</a>
				<a
					className={css.icons}
					target="_blank"
					href="mailto:fibarrola06@gmail.com"
				>
					<img
						src="https://res.cloudinary.com/fiba06-dev/image/upload/v1658019258/portfolio/pngwing.com_2_hg7ytq.png"
						className={css.gmail}
					/>
				</a>
			</div>
		</div>
	);
}

export { Contacto };
