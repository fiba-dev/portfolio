import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { HeaderEn } from "../header";

function LayoutEn(props) {
	return (
		<div>
			<HeaderEn></HeaderEn>

			<Outlet></Outlet>
		</div>
	);
}

export { LayoutEn };
