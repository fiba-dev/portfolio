import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "../../es/Proyectos/index.css";

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
			console.log("soydata", data);
		};

		// call the function
		fetchData()
			// make sulre to catch any error
			.catch(console.error);
	}, []);

	return (
		<div className={css.container} id="proyects">
			<div className={css.titulo}>
				<TypedReactHooksDemo
					velocidad={50}
					loop={false}
					className={css.titulo}
					class="letra3"
				>
					Proyects
				</TypedReactHooksDemo>
			</div>
			<div className={css.home__name__div}>
				{data.map((r, index) => (
					<CardProyects
						title={r.title}
						pictureURL={r.pictureURL}
						info={r.info}
						GitHub={r.GitHub}
						webPage={r.webPage}
						key={index}
						id={r.key}
					></CardProyects>
				))}
			</div>
		</div>
	);
}

export { Proyects };
