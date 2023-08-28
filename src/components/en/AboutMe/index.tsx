import React from "react";
import { TypedReactHooksDemo } from "../../ui/typedJs";
import css from "../../es/AboutMe/index.css";
import Zoom from "react-reveal/Zoom";
function AboutMeEn(props) {
	return (
		<div className={css.container} id={props.id}>
			<Zoom>
				<div className={css.container__column}>
					<div className={css.column}>
						<p>
							{" "}
							I'm Web Developer in tecnologies like
							<b> HTML, CSS,JAVASCRIPT, React.js,</b>. With knowledge in
							Firebase, Express, Next.js, Vercel, Heroku, Postgress, Dropbox,
							Airtable, Cloudinary, Contenful, Mapbox, Algolia . Documentation
							using <b> Postman</b>. Version control in
							<b> Github</b> and working whit agile methodologies <b>(SCRUM)</b>
						</p>
					</div>
					<a
						className={css.cv__link}
						href="https://drive.google.com/uc?export=download&id=1XF7igf8YJhlMDPCrNVrB1v4hZescssNU"
					>
						Resumé
					</a>{" "}
				</div>
			</Zoom>
		</div>
	);
}

export { AboutMeEn };
