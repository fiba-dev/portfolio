import React from "react";
import css from "./index.css";
import { motion } from "framer-motion";

const Path = (props) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(0, 5.555555555555538%, 92.94117647058823%)"
		strokeLinecap="round"
		border="transparent"
		{...props}
	/>
);

export const MenuToggle = ({ toggle }) => (
	<button onClick={toggle} className={css.botonBurger}>
		<svg width="23" height="23" viewBox="0 0 23 23">
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
			/>
		</svg>
	</button>
);

function Button(props) {
	return <button className={css.root}>{props.children}</button>;
}
function DesktopIcon(props) {
	return (
		<a
			className={css.desktop__button}
			href={props.href}
			onClick={props.onClick}
		>
			{props.children}
		</a>
	);
}
function MobileIcon(props) {
	return (
		<a className={css.mobil__button} onClick={props.onClick} href={props.href}>
			{props.children}
		</a>
	);
}
function HomeButton(props) {
	return (
		<a className={css.home__button} onClick={props.onClick} href={props.href}>
			{" "}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
				<path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z" />
			</svg>{" "}
		</a>
	);
}
function BurgerButton(props) {
	return (
		<a className={css.burger__button} onClick={props.onClick} href={props.href}>
			{" "}
			<svg
				viewBox="0 0 32 32"
				enable-background="new 0 0 32 32"
				id="Glyph"
				version="1.1"
			>
				<path
					d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z"
					id="XMLID_314_"
				/>
				<path
					d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z"
					id="XMLID_315_"
				/>
				<path
					d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z"
					id="XMLID_316_"
				/>
			</svg>
		</a>
	);
}

function GithubButton(props) {
	return (
		<a onClick={props.onClick} href={props.href} target={props.target}>
			<svg viewBox="0 0 30 30" className={css.github__button}>
				{" "}
				<path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
			</svg>
		</a>
	);
}
function LinkedinButton(props) {
	return (
		<a onClick={props.onClick} href={props.href} target={props.target}>
			<svg viewBox="0 0 50 50" className={css.linkedin__button}>
				{" "}
				<path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z" />
			</svg>
		</a>
	);
}

function SpainFlag(props) {
	return (
		<a onClick={props.onClick} href={props.href} target={props.target}>
			<img
				className={css.flags}
				src="https://res.cloudinary.com/fiba06-dev/image/upload/v1660089336/portfolio/spain_eoj5i9.png"
			/>
		</a>
	);
}
function UsaFlag(props) {
	return (
		<a onClick={props.onClick} href={props.href} target={props.target}>
			<img
				className={css.flags}
				src="https://res.cloudinary.com/fiba06-dev/image/upload/v1660089336/portfolio/united-states_t2sasa.png"
			/>
		</a>
	);
}

export {
	Button,
	DesktopIcon,
	MobileIcon,
	HomeButton,
	BurgerButton,
	GithubButton,
	LinkedinButton,
	UsaFlag,
	SpainFlag,
};
