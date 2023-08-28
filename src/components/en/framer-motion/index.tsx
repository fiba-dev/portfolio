import * as React from "react";
import { useRef } from "react";
import { motion, MotionConfig, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { DesktopIcon, MenuToggle, MobileIcon } from "../../ui/buttons";
import { Particulas } from "../../ui/particles";
import css from "../../es/framer-motion/index.css";
import { SelectLenguageMobile } from "../../selectLenguage";

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
			delay: 0.3,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

export const MenuMobilEn = () => {
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
					<motion.li variants={variants} whileHover={{ scale: 1.1 }}>
						<MobileIcon onClick={() => toggleOpen()} href="#main">
							Main
						</MobileIcon>
					</motion.li>
					<motion.li variants={variants} whileHover={{ scale: 1.1 }}>
						{" "}
						<MobileIcon onClick={() => toggleOpen()} href="#proyects">
							Proyects
						</MobileIcon>
					</motion.li>
					<motion.li variants={variants} whileHover={{ scale: 1.1 }}>
						{" "}
						<MobileIcon onClick={() => toggleOpen()} href="#contact">
							Contact
						</MobileIcon>
					</motion.li>

					<motion.li variants={variants} whileHover={{ scale: 1.1 }}>
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
export const MenuDesktopEn = () => {
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
			{" "}
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
					<motion.li variants={variants} whileHover={{ scale: 1.1 }}>
						<DesktopIcon href="#main">Main</DesktopIcon>
					</motion.li>
					<motion.li variants={variants} whileHover={{ scale: 1.1 }}>
						{" "}
						<DesktopIcon href="#proyects">Proyects</DesktopIcon>
					</motion.li>
					<motion.li variants={variants} whileHover={{ scale: 1.1 }}>
						{" "}
						<DesktopIcon href="#contact">Contact</DesktopIcon>
					</motion.li>
				</motion.ul>
			</motion.div>
			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	);
};
