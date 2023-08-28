import React from "react";
import { TypedReactHooksDemo } from "../../ui/typedJs";
import css from "../../es/AboutMe/index.css";
function AboutMeEn(props) {
	return (
		<div className={css.container} id={props.id}>
			<div className={css.container__column}>
				<div className={css.column}>
					<p>
						{" "}
						I'm Web Developer in tecnologies like
						<b> JAVASCRIPT, React.js, Node.js, HTML, CSS</b>. With knowledge in
						Firebase, Express, Next.js, Vercel, Heroku, Postgress, Dropbox,
						Airtable, Cloudinary, Contenful, Mapbox, Algolia,
						<b>Excel.js,PdfKit,Moment.js</b>. Documentation using
						<b> Postman</b>. Version control in
						<b> Github, GitLab</b> and working whit agile methodologies{" "}
						<b>(SCRUM)</b>
					</p>
				</div>
				<a
					className={css.cv__link}
					href="https://drive.google.com/uc?export=download&id=1XF7igf8YJhlMDPCrNVrB1v4hZescssNU"
				>
					Resumé
				</a>{" "}
			</div>
		</div>
	);
}

export { AboutMeEn };
