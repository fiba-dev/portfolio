import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Particulas } from "../../ui/particles";
import { HeaderEn } from "../header";

function LayoutEn(props) {
	return (
		<div>
			<HeaderEn></HeaderEn>

			<Outlet></Outlet>
			<Particulas></Particulas>
		</div>
	);
}

export { LayoutEn };
