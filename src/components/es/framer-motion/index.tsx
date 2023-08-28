import * as React from "react";
import { useRef } from "react";
import { motion, MotionConfig, useCycle, useForceUpdate } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { DesktopIcon, MenuToggle, MobileIcon } from "../../ui/buttons";
import css from "./index.css";
import { SelectLenguageMobile } from "../../selectLenguage";
import { Particulas } from "../../ui/particles";
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

const variantsUl = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};
const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px  40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(30px at  40px  40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

export const MenuMobil = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

	return (
		<motion.nav
			initial={false}
			animate={isOpen ? "open" : "closed"}
			custom={height}
			ref={containerRef}
			className={css.menuMobil}
		>
			<motion.div className={css.background} variants={sidebar}>
				{isOpen && (
					<Particulas
						width={"100vw"}
						height={"100vh"}
						value={100}
						repulse={false}
					/>
				)}
				<motion.ul variants={variantsUl} className={css.backgroundUl}>
					<motion.li variants={variants}>
						<MobileIcon
							onClick={() => {
								toggleOpen(), useForceUpdate;
							}}
							href="#main"
						>
							Inicio
						</MobileIcon>
					</motion.li>
					<motion.li variants={variants}>
						{" "}
						<MobileIcon onClick={() => toggleOpen()} href="#proyectos">
							Proyectos
						</MobileIcon>
					</motion.li>
					<motion.li variants={variants}>
						{" "}
						<MobileIcon onClick={() => toggleOpen()} href="#contacto">
							Contacto
						</MobileIcon>
					</motion.li>

					<motion.li variants={variants}>
						{" "}
						<SelectLenguageMobile
							onClick={() => toggleOpen()}
						></SelectLenguageMobile>
					</motion.li>
				</motion.ul>
			</motion.div>
			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	);
};

export const MenuDesktop = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

	return (
		<motion.nav
			initial={false}
			animate={isOpen ? "open" : "closed"}
			custom={height}
			ref={containerRef}
			className={css.menuDesktop}
		>
			<motion.div className={css.background} variants={sidebar}>
				{isOpen && (
					<Particulas
						width="12rem"
						height="100vh"
						value={200}
						repulse={false}
					/>
				)}
				<motion.ul variants={variantsUl} className={css.backgroundUl}>
					<motion.li variants={variants}>
						<DesktopIcon href="#main">Inicio</DesktopIcon>
					</motion.li>
					<motion.li variants={variants}>
						{" "}
						<DesktopIcon href="#proyectos">Proyectos</DesktopIcon>
					</motion.li>
					<motion.li variants={variants}>
						{" "}
						<DesktopIcon href="#contacto">Contacto</DesktopIcon>
					</motion.li>
				</motion.ul>
			</motion.div>
			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	);
};
