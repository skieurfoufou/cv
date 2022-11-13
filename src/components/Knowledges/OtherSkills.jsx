import React from "react";
import { useTranslation } from "react-i18next";

function OtherSkills() {
  const { t } = useTranslation("knowledge");

  return (
    <div className="otherSkills">
      <h3>{t("others-skills")}</h3>
      <div className="list">
        <ul>
          <li className="fas fa-check-circle">
            <span>{t("english")} </span>
          </li>
          <li className="fas fa-check-circle">
            <span>{t("french")} </span>
          </li>
          <li className="fas fa-check-circle">
            <span>{t("hebrew")} </span>
          </li>
        </ul>
        <ul>
          <li className="fas fa-check-square">
            <span> Github</span>
          </li>
          <li className="fas fa-check-square">
            <span> Jira</span>
          </li>
          <li className="fas fa-check-square">
            <span> Postman</span>
          </li>
          <li className="fas fa-check-square">
            <span> Mongo DB</span>
          </li>
          <li className="fas fa-check-square">
            <span> Firebase</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OtherSkills;
