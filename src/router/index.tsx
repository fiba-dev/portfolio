import { Routes, Route } from "react-router-dom";
import React from "react";
import { Layout } from "../components/layout";
import { Home } from "../pages/Home/home";
import { AboutMe } from "../components/Aboutme";
import { Proyectos } from "../components/Proyectos";
import { Contacto } from "../components/Contacto";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="#aboutme" element={<AboutMe></AboutMe>}></Route>
				<Route path="#proyects" element={<Proyectos></Proyectos>}></Route>
				<Route path="#contacto" element={<Contacto></Contacto>}></Route>
			</Route>
		</Routes>
	);
}
export { AppRoutes };
