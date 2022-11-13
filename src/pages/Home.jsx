import React from "react";
import Navigation from "../components/Navigation";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation("home");

  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Mordehai Benichou</h1>
          <h2>{t("developer fullStack")}</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              {t("download cv")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
