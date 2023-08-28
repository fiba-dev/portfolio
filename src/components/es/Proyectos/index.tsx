import React, { useEffect, useState } from "react";
import css from "./index.css";
import { CardProyects } from "../../ui/cards-proyects";
import { obtenerProyectos } from "../../../apiURL";
import Zoom from "react-reveal/Zoom";

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
			{/* <div className={css.titulo}>
				<Zoom className={css.titulo}>Proyectos Realizados</Zoom>
			</div> */}
			<div className={css.home__name__div}>
				{data.map((r, index) => (
					<Zoom key={r.key}>
						<CardProyects
							title={r.title}
							pictureURL={r.pictureURL}
							info={r.info}
							GitHub={r.GitHub}
							webPage={r.webPage}
							id={r.key}
						></CardProyects>
					</Zoom>
				))}
			</div>
		</div>
	);
}

export { Proyectos };
