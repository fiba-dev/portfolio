import React, { useEffect, useState } from "react";
import css from "./index.css";
import { CardProyects } from "../../ui/cards-proyects";
import { obtenerProyectos } from "../../../apiURL";

function Proyectos() {
	let [data, setData] = useState([]);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			let proyects = await obtenerProyectos();
			setData(proyects);
		};

		// call the function
		fetchData()
			// make sulre to catch any error
			.catch(console.error);
	}, []);

	return (
		<div className={css.container} id="proyectos">
			<div className={css.home__name__div}>
				{data.map((r, index) => (
					<CardProyects
						title={r.title}
						pictureURL={r.pictureURL}
						info={r.info}
						GitHub={r.GitHub}
						webPage={r.webPage}
						id={r.key}
					></CardProyects>
				))}
			</div>
		</div>
	);
}

export { Proyectos };
