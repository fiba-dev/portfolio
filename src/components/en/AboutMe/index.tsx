import React from "react";
import { TypedReactHooksDemo } from "../../ui/typedJs";
import css from "../../es/AboutMe/index.css";

function AboutMeEn(props) {
	return (
		<div className={css.container} id={props.id}>
			<div className={css.titulo}>
				{" "}
				<TypedReactHooksDemo velocidad={50} loop={false} class="letra3">
					About Me
				</TypedReactHooksDemo>
			</div>

			<div className={css.container__column}>
				<div className={css.column}>
					<h1>I'm Francisco Ibarrola</h1>
					<p>
						{" "}
						I'm Web Developer in tecnologies like
						<b> HTML, CSS,JAVASCRIPT, React.js,</b>. With knowledge in Firebase,
						Express, Next.js, Vercel, Heroku, Postgress, Dropbox, Airtable,
						Cloudinary, Contenful, Mapbox, Algolia . Documentation using{" "}
						<b> Postman</b>. Version control in
						<b> Github</b> and working whit agile methodologies <b>(SCRUM)</b>
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

export { AboutMeEn };
