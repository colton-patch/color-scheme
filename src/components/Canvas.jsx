import React, { useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Canvas = ({ fiveColors }) => {
  const colorArray = Object.values(fiveColors);
  const [currentColor, setCurrentColor] = useState(colorArray[0]);

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const styles = {
    border: "1rem solid #9c9c9c",
    borderRadius: "2",
    height: '20rem',
  };

  return (
    <div className="centerParent">
      <div>
        {colorArray.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
              width: "2rem",
              height: "2rem",
              border: "1px solid #ccc",
              display: "inline-block",
              cursor: "pointer",
              marginRight: "5px",
            }}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>
      <div className="canvasArea">
        <div width="3rem">
          <ReactSketchCanvas
            strokeColor={`rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`}
            strokeWidth={20}
            width="95%"
            display="flex"
            style={styles}
          />
        </div>
      </div>
    </div>
  );
};

export default Canvas;
