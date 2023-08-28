import Particles from "react-tsparticles";
import React, { useState } from "react";
import css from "./index.css";
export function Particulas(props) {
	console.log("PROPS DE PARTICLES", props);

	return (
		<Particles
			options={{
				style: {
					width: props.width,
					position: "relative",
					height: props.height,
				},

				fpsLimit: 60,
				interactivity: {
					events: {
						onHover: {
							enable: true,
							mode: props.repulse ? "connect" : "",
						},
						resize: true,
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.4,
							size: 40,
						},
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 100,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "rgb(255, 255, 255)",
					},
					links: {
						color: "rgb(255, 255, 255)",
						distance: 50,
						enable: true,
						opacity: 1,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outMode: "bounce",
						random: false,
						speed: 2,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: props.value,
					},
					opacity: {
						value: 0.9,
					},
					shape: {
						type: "star",
					},
					size: {
						random: true,
						value: 1,
					},
				},
				detectRetina: true,
			}}
			// className={css.particula}
			// canvasClassName={css.canvas}
		>
			<div className={css.fondo}></div>
		</Particles>
	);
}
