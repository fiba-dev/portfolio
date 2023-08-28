import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Particulas } from "../../ui/particles";
import { MenuDesktop, MenuMobil } from "../framer-motion";
import { Header } from "../header";

function Layout(props) {
	return (
		<div>
			<MenuMobil></MenuMobil>
			<MenuDesktop></MenuDesktop>
			<Outlet></Outlet>
		</div>
	);
}

export { Layout };
