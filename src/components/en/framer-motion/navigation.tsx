import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";
import { Link, NavLink } from "react-router-dom";

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const Navigation = () => (
	<motion.ul variants={variants}>
		{routes.map((i: any) => (
			<MenuItem i={i}></MenuItem>
		))}
	</motion.ul>
);
const routes = [
	{ href: "#main", text: "Inicio" },
	{ href: "#aboutme", text: "Perfil" },
	{ href: "#proyectos", text: "Proyectos" },
	{ href: "#contacto", text: "Contacto" },
	{ href: "#contacto", text: "Contacto" },
] as any;
const itemIds = [0, 1, 2, 3, 4];
