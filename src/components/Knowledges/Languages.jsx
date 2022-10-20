import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const arrLang = [
  { id: 1, value: "Javascript", xp: 1.0 },
  { id: 2, value: "Css", xp: 0.9 },
  { id: 3, value: "Html", xp: 0.9 },
  { id: 4, value: "SQL", xp: 0.6 },
  { id: 5, value: "Node JS", xp: 0.7 },
];
const arrFrame = [
  { id: 1, value: "React", xp: 0.85 },
  { id: 2, value: "Sass", xp: 0.8 },
  { id: 3, value: "Material UI", xp: 0.4 },
  { id: 4, value: "Bootstrap", xp: 0.3 },
  { id: 5, value: "Vue", xp: 0.1 },
];

function Languages() {
  const [languages, setLanguages] = useState(arrLang);
  const [frameworks, setFrameworks] = useState(arrFrame);

  return (
    <div className="languagesFrameworks">
      <ProgressBar
        languages={languages}
        className="languagesDisplay"
        title="languages"
      />
      <ProgressBar
        languages={frameworks}
        className="frameworksDisplay"
        title="frameworks"
      />
    </div>
  );
}

export default Languages;
