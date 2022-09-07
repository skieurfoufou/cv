import React from "react";
import { useTranslation } from "react-i18next";

function Hobbies() {
  const { t } = useTranslation("knowledge");
  return (
    <div className="hobbies">
      <h3>{t("hobbies")}</h3>
      <ul>
        <li>
          <i className="fas fa-skiing"></i>
          <span>{t("ski")}</span>
        </li>
        <li>
          <i className="fas fa-seedling"></i>
          <span>{t("permaculture")}</span>
        </li>
        <li>
          <i className="fas fa-hiking"></i>
          <span>{t("hiking")}</span>
        </li>
        <li>
          <i className="fas fa-walking"></i>
          <span>{t("walking")}</span>
        </li>
        <li>
          <i className="fas fa-computer"></i>
          <span>{t("computer-science")}</span>
        </li>
      </ul>
    </div>
  );
}

export default Hobbies;
