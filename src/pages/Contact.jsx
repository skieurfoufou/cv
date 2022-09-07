import React, { useRef } from "react";
import Navigation from "../components/Navigation";
import CopyToClipboard from "react-copy-to-clipboard";
import SnackBar from "../components/SnackBar/SnackBar";
import { useTranslation } from "react-i18next";

const SnackBarType = {
  success: "success",
  fail: "fail",
};

function Contact() {
  const { t } = useTranslation("contact");
  const snackbarRef1 = useRef(null);
  const snackbarRef2 = useRef(null);

  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>{t("contact-me.title")}</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Kochav Yaacov (ISRAEL)</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="(972) 053-8226006">
                <span
                  className="clickInput"
                  onClick={() => {
                    snackbarRef1.current.show();
                  }}
                >
                  (972) 053-8226006
                </span>
              </CopyToClipboard>
              <SnackBar
                ref={snackbarRef1}
                message="phone number copied to clipboard"
                type={SnackBarType.success}
              />
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="skieurfou@hotmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    snackbarRef2.current.show();
                  }}
                >
                  skieurfou@hotmail.com
                </span>
              </CopyToClipboard>
              <SnackBar
                ref={snackbarRef2}
                message="email copied to clipboard"
                type={SnackBarType.success}
              />
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
                Linkedin
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/skieurfoufou"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
                <i className="fab fa-github"></i>
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
                <i className="fab fa-twitter"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
