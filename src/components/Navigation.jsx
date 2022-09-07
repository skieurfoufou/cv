import React from "react";
import imgProfile from "../media/gillesTete.jpg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { i18n, t } = useTranslation("navigation");

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src={imgProfile} alt="profile-pic" />
          <h3>Mordehai Benichou</h3>
        </div>
      </div>
      <div className="language">
        <ul>
          <li>
            <i className="fa-solid fa-globe"></i>
            <select
              // defaultValue={"en"}
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="fr">Francais</option>
              <option value="heb">עברית</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              <i className="fas fa-home"></i>
              <span>{t("home")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/knowledge"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              <i className="fas fa-mountain"></i>
              <span>{t("knowledge")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              <i className="fas fa-images"></i>
              <span>{t("portfolio")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              <i className="fas fa-address-book"></i>
              <span>{t("contact")}</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/mordehai-benichou-8bb306238/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/skieurfoufou"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          {/* <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google"></i>
            </a>
          </li> */}
        </ul>
        <div className="signature">
          <p>skieurfoufou - 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
