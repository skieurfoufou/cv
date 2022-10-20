import React, { useState } from "react";
import { portfolioData as projects } from "../../data/portfolioData";
import Project from "./Project";

const radios = [
  { id: 11, value: "html-css" },
  { id: 21, value: "javascript" },
  { id: 31, value: "typescript" },
  { id: 41, value: "react" },
  { id: 51, value: "node JS" },
  { id: 61, value: "mongo DB" },
  { id: 71, value: "vue" },
];
function ProjectList() {
  const [selectedRadio, setSelectedRadio] = useState("javascript");

  const handleRadio = (event) => {
    let radio = event.target.value;
    setSelectedRadio(radio);
  };

  return (
    <div className="portfolioContent">
      <ul className="radioDisplay">
        {radios.map((radio) => {
          return (
            <li key={radio.id}>
              <input
                type="radio"
                name="radio"
                value={radio.value}
                onChange={handleRadio}
                checked={radio.value === selectedRadio}
              />
              <label htmlFor={radio.value}>{radio.value}</label>
            </li>
          );
        })}
      </ul>
      <div className="projects">
        {projects
          .filter((item) => item.languages.includes(selectedRadio))
          .map((project) => {
            return <Project key={project.id} project={project} />;
          })}
      </div>
    </div>
  );
}

export default ProjectList;
