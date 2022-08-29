import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../src/pages/es";
import { RecoilRoot } from "recoil";
import { AppRoutes } from "../src/router";
import { Particulas } from "./components/ui/particles";

// class index extends React.Component<any, any> {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return <Home></Home>;
// 	}
// }
const rootElement = document.querySelector(".app");
const root = createRoot(rootElement);
root.render(
	<Suspense fallback={<h1>LOADING</h1>}>
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	</Suspense>
);
