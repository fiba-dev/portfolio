import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Particulas } from "../../ui/particles";
import { Header } from "../header";

function Layout(props) {
	return (
		<div>
			<Header></Header>

			<Outlet></Outlet>
			<Particulas></Particulas>
		</div>
	);
}

export { Layout };
