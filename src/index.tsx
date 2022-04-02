import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { AppRoutes } from "./router/index";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { RecoilRoot } from "recoil";
import { Header } from "./components/header";
import { css } from "./index.css";
import { Particulas } from "./components/ui/particles";

class index extends React.Component<any, any> {
  constructor(props) {
    super(props);
    console.log("Soy el index.ts");
  }

  render() {
    return <Home></Home>;
  }
}

ReactDOM.render(
  <Suspense fallback={null}>
    <RecoilRoot>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RecoilRoot>
  </Suspense>,
  document.querySelector(".app")
);
