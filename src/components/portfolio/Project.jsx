import React, { useState } from "react";
import CustomIcon from "./CustomIcon";
import { useTranslation } from "react-i18next";

function Project({ project }) {
  const [showInfo, setShowInfo] = useState(false);
  const { t } = useTranslation("portfolio");

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

  let {
    id,
    info,
    languages,
    languagesIcons,
    otherIcons,
    name,
    picture,
    source,
    webSite,
  } = project;
  return (
    <div className="project">
      <div className="icons">
        {languagesIcons.map((icon) => (
          <i className={icon} key={icon}></i>
        ))}
        {otherIcons?.map((el) => (
          <CustomIcon name={el} key={el} />
        ))}
      </div>
      <a href={webSite} target="_blank" rel="noopener noreferrer">
        <h3>{name}</h3>
      </a>
      <img src={picture} alt="" onClick={handleInfo} />
      <span className="infos" onClick={handleInfo}>
        <i className="fas fa-plus-circle"></i>
      </span>
      {showInfo && (
        <div className="showInfos">
          <div className="infosContent">
            <div className="head">
              <h2>{name}</h2>
              <div className="sourceCode">
                <a
                  href={source}
                  rel="noopener noreferrer"
                  className="button"
                  target="_blank"
                >
                  {t("source-code")}
                </a>
              </div>
            </div>
            <p className="text">{t(info)}</p>
            <div className="button return" onClick={handleInfo}>
              {t("return-to-projects-page")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
