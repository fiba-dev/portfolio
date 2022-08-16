import * as React from "react";
import { motion } from "framer-motion";
import css from "./index.css";
import { Link, NavLink } from "react-router-dom";

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
	// const style = { border: `2px solid ${colors[i.index]}` };
	console.log("SOY i", i);
	console.log("SOY i", i);
	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			{i.text}
			<div className={css.iconPlaceholder} />
			<div className={css.textPlaceholder} />
		</motion.li>
	);
};
