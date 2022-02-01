import React from "react";
import "./Welcome.scss";
import logo from "../../assets/logo_mb.svg";

function Welcome({ handleChange }) {
  return (
    <div className="welcome">
      <div className="container welcome-grid animate">
        {/* <div className="header"></div> */}
        <div className="main">
          <div className="heading">
            <h1 className="heading__title">Witaj</h1>
            <p className="heading__slogan">
              Skonfiguruj i zamów swoją tablicę manipulacyjną.
            </p>
          </div>
          <button className="main__btn" onClick={handleChange}>
            ROZPOCZNIJ
          </button>
        </div>
        <div className="footer">
          <p className="footer__copy-txt">Copyright &copy;</p>
          <a className="footer__copy-link" href="https://www.manipuloboards.pl">
            <img className="footer__copy-img" src={logo} alt="Logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
