import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Particulas } from "../../ui/particles";
import { MenuDesktopEn, MenuMobilEn } from "../framer-motion";
import { HeaderEn } from "../header";

function LayoutEn(props) {
	return (
		<div>
			<MenuMobilEn></MenuMobilEn>
			<MenuDesktopEn></MenuDesktopEn>
			<Outlet></Outlet>
		</div>
	);
}

export { LayoutEn };
