import React from "react";

function CustomIcon({ name }) {
  return (
    <img
      key={name}
      src={`./media/${name}.svg`}
      alt="icon"
      style={{
        height: "23.33px",
        width: "25px",
        margin: "4px",
      }}
    />
  );
}

export default CustomIcon;
