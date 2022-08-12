import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "./es/header";
import { Particulas } from "./ui/particles";

function Layout(props) {
	return (
		<div>
			<Header />
			<Outlet></Outlet>
			<Particulas></Particulas>
		</div>
	);
}

export { Layout };
