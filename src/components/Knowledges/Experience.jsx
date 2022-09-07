import React from "react";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation("knowledge");

  return (
    <div className="experience">
      <h3>{t("experience")}</h3>
      <div className="exp-1">
        <h4>{t("exp-1.title")}</h4>
        <p>{t("exp-1.content")}</p>
        <h4>{t("exp-2.title")}</h4>
        <p>{t("exp-2.content")}</p>
        <h4>{t("exp-3.title")}</h4>
        <p>{t("exp-3.content")}</p>
        <h4>{t("exp-4.title")}</h4>
        <p>{t("exp-4.content")}</p>
      </div>
      <div className="exp-2">
        <h3>{t("education")}</h3>
        <h4>{t("edu-1.title")}</h4>
        <p>{t("edu-1.content")}</p>
        <h4>{t("edu-2.title")}</h4>
        <p>{t("edu-2.content")}</p>
        <h4>{t("edu-3.title")}</h4>
        <p>{t("edu-3.content")}</p>
        <h4>{t("edu-4.title")}</h4>
        <p>{t("edu-4.content")}</p>
      </div>
    </div>
  );
}

export default Experience;
