import React from "react";
import css from "./index.css"
function Button (props) {
	
		return (
			<button className={css.root}>{props.children}</button>
		);
	
}

export { Button };
