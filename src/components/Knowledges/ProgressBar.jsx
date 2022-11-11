import React from "react";
import { useTranslation } from "react-i18next";

function ProgressBar({ languages, className, title }) {
  const { t } = useTranslation("knowledge");

  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className="years">
        <span>{t("experience-years")}</span>
        <span>{t("6-months")}</span>
        <span>{t("1-year")}</span>
        <span>{t("1.5-year")}</span>
      </div>
      <div>
        {languages.map((language) => {
          let xpYears = 1.5;
          // let progressBar = (language.xp / xpYears) * 100 + "%";
          let dateNow = Date.now();
          let YearsOfXp = (
            (dateNow - language.xp) /
            (1000 * 60 * 60 * 24 * 365)
          ).toFixed(2);
          let progressBar = (YearsOfXp / xpYears) * 100 + "%";
          return (
            <div key={language.id} className="languagesList">
              <li>{language.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;
