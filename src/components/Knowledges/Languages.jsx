import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const arrLang = [
  {
    id: 1,
    value: "Javascript",
    xp: new Date("October 15, 2021 18:00:00 GMT+00:00").getTime(),
  },
  {
    id: 2,
    value: "Css",
    xp: new Date("November 01, 2021 18:00:00 GMT+00:00").getTime(),
  },
  {
    id: 3,
    value: "Html",
    xp: new Date("November 01, 2021 18:00:00 GMT+00:00").getTime(),
  },
  {
    id: 4,
    value: "SQL",
    xp: new Date("February 01, 2022 09:00:00 GMT+00:00").getTime(),
  },
  {
    id: 5,
    value: "Node JS",
    xp: new Date("January 01, 2022 18:00:00 GMT+00:00").getTime(),
  },
];
const arrFrame = [
  {
    id: 1,
    value: "React",
    xp: new Date("December 01, 2021 10:00:00 GMT+00:00").getTime(),
  },
  {
    id: 2,
    value: "Sass",
    xp: new Date("Mars 01, 2022 10:00:00 GMT+00:00").getTime(),
  },
  {
    id: 3,
    value: "Material UI",
    xp: new Date("May 01, 2022 10:00:00 GMT+00:00").getTime(),
  },
  {
    id: 4,
    value: "Bootstrap",
    xp: new Date("July 01, 2022 10:00:00 GMT+00:00").getTime(),
  },
  {
    id: 5,
    value: "Vue",
    xp: new Date("September 14, 2022 10:00:00 GMT+00:00").getTime(),
  },
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
