import React from "react";
import data from "../Data/ActorData";

const ActorComp = () => {
  return (
    <div className="actor--wrapper text-black">
      <h4>Actors Lens</h4>
      <div className="actor--container">
        {data.map(
          ({ name: name, img: img, color: color, info: link }, index) => {
            return (
              <a
                className="actor--link"
                href={link}
                target="_blank"
                key={index}
              >
                <div
                  style={{
                    backgroundImage: `url("${img}")`,
                  }}
                  className="actor--comp shadow-lg"
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

export default ActorComp;
