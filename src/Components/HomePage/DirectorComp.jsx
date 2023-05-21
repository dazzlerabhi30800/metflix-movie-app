import React from "react";
import data from "../Data/DirectorData";

const DirectorComp = () => {
  return (
    <div className="director--wrapper text-black">
      <h4>Directors Chair</h4>
      <div className="director--container">
        {data.map(
          ({ name: name, img: img, color: color, info: link }, index) => {
            return (
              <a href={link} target="_blank" key={index}>
                <div
                  style={{
                    backgroundImage: `url("${img}")`,
                  }}
                  className="director--comp shadow-lg"
                  key={index}
                >
                  <h5 className={`${color ? "text-black" : "text-white"}`}>
                    {name}
                  </h5>
                </div>
              </a>
            );
          }
        )}
      </div>
    </div>
  );
};

export default DirectorComp;
