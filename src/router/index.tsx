import { Routes, Route } from "react-router-dom";
import React from "react";
import { Layout } from "../components/es/Layout/layout";
import { Home } from "../pages/es/index";
import { HomeEn } from "../pages/en/index";
import { Header } from "../components/es/header";
import { LayoutEn } from "../components/en/Layout";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
			<Route path="/en" element={<LayoutEn />}>
				<Route index element={<HomeEn />} />
			</Route>
		</Routes>
	);
}
export { AppRoutes };
