import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "../../es/Proyectos/index.css";
import Zoom from "react-reveal/Zoom";
import { TypedReactHooksDemo } from "../../ui/typedJs";
import { ProgressPlugin } from "webpack";
import { CardProyects } from "../../ui/cards-proyects";
import { obtenerProyectos, obtenerProyectosEnglish } from "../../../apiURL";

function Proyects() {
	let [data, setData] = useState([]);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			let proyects = await obtenerProyectosEnglish();
			setData(proyects);
		};

		// call the function
		fetchData()
			// make sulre to catch any error
			.catch(console.error);
	}, []);

	return (
		<div className={css.container} id="proyects">
			<div className={css.titulo}>
				<Zoom velocidad={50} loop={false} className={css.titulo} class="letra3">
					Proyects
				</Zoom>
			</div>

			<div className={css.home__name__div}>
				{data.map((r, index) => (
					<CardProyects
						title={r.title}
						pictureURL={r.pictureURL}
						info={r.info}
						GitHub={r.GitHub}
						webPage={r.webPage}
						id={r.key}
						key={index}
					></CardProyects>
				))}
			</div>
		</div>
	);
}

export { Proyects };
