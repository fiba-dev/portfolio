import React from "react";

import css from "./index.css";

function AboutMe(props) {
	return (
		<div className={css.container} id={props.id}>
			<div className={css.container__column}>
				<div className={css.column}>
					<p>
						{" "}
						Soy Desarrollador web en tecnologías como
						<b> HTML, CSS,JAVASCRIPT, React.js,</b>. Con conocimiento en
						Firebase, Express, Next.js, Vercel, Heroku, Postgress, Dropbox,
						Airtable, Cloudinary, Contenful, Mapbox, Algolia . Documentación
						usando <b> Postman</b>. Control de Versiones en
						<b> Github</b> y trabajando con metodologías Agiles<b>(SCRUM)</b>
					</p>
				</div>
				<a
					className={css.cv__link}
					href="https://drive.google.com/uc?export=download&id=1xtU4JfywLBZbjl5KtRzPISEhHD3GrSHn"
				>
					CURRICULUM
				</a>{" "}
			</div>
		</div>
	);
}

export { AboutMe };
