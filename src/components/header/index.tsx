import React, { useRef, useState } from "react";
import { DesktopIcon, HomeButton, MobilIcon } from "../ui/buttons";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
let estado = false;

function Header() {
  const navigate = useNavigate();
  const [estado, cambiarEstado] = useState(false);
  function restartTypedJs(path) {
    window.location.href = path;
  }
  return (
    <div className={css.main}>
      <HomeButton
        href="#main"
        onClick={() => {
          console.log("SOY RESET");

          restartTypedJs("#main");
        }}
      ></HomeButton>
      <div>
        {estado && (
          <div className={css.ventana}>
            <button
              className={css.close__button}
              onClick={() => {
                cambiarEstado(!estado);
              }}
            >
              {" "}
              X
            </button>
            <MobilIcon
              className={css.mobil__links}
              onClick={() => {
                cambiarEstado(!estado);
              }}
              href="#main"
            >
              Menu{" "}
            </MobilIcon>
            <MobilIcon
              className={css.mobil__links}
              onClick={() => {
                cambiarEstado(!estado);
              }}
              href="#aboutme"
            >
              Perfil
            </MobilIcon>

            <MobilIcon
              className={css.mobil__links}
              onClick={() => {
                cambiarEstado(!estado);
                restartTypedJs("#proyectos");
              }}
              href="#proyectos"
            >
              Proyectos
            </MobilIcon>
            <MobilIcon
              className={css.mobil__links}
              href="#contacto"
              onClick={() => {
                cambiarEstado(!estado);
                restartTypedJs("#contacto");
              }}
            >
              Contacto{" "}
            </MobilIcon>
          </div>
        )}
      </div>
      <div className={css.links_container}>
        <DesktopIcon className={css.links} href="#aboutme">
          {" "}
          Perfil{" "}
        </DesktopIcon>

        <DesktopIcon className={css.links} href="#proyectos">
          {" "}
          Proyectos{" "}
        </DesktopIcon>
        <DesktopIcon className={css.links} href="#contacto">
          Contacto
        </DesktopIcon>
      </div>
      <button
        className={css.mobile_menu}
        onClick={() => {
          cambiarEstado(!estado);
        }}
      ></button>
    </div>
  );
}

export { Header };
