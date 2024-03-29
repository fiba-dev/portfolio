import React from "react";
import css from "./index.css";
import { TypedReactHooksDemo } from "../../ui/typedJs";
import { motion } from "framer-motion";

function Contacto() {
	return (
		<div className={css.container_contacto} id="contacto">
			<motion.div className={css.div__form}>
				<a
					href=" https://wa.me/+59167306165"
					target="_blank"
					className={css.icons}
				>
					<img
						src="https://res.cloudinary.com/fiba06-dev/image/upload/v1658019259/portfolio/pngwing.com_l0ymyv.png"
						className={css.whatsapp}
						loading="lazy"
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
						loading="lazy"
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
						loading="lazy"
					/>
				</a>
			</motion.div>
		</div>
	);
}

export { Contacto };
