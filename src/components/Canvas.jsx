import React, { useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const Canvas = ({ fiveColors }) => {
    const colorArray = Object.values(fiveColors);
    const [currentColor, setCurrentColor] = useState(colorArray[0]);

    const handleColorChange = (color) => {
        setCurrentColor(color);
    };

    return (
        <div className='centerParent'>
            <div>
                {colorArray.map((color, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                            width: '30px',
                            height: '30px',
                            border: '1px solid #ccc',
                            display: 'inline-block',
                            cursor: 'pointer',
                            marginRight: '5px',
                        }}
                        onClick={() => handleColorChange(color)}
                    ></div>
                ))}
            </div >
            <div width='3rem' height='50rem'>
                <ReactSketchCanvas
                    strokeColor={`rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`}
                    strokeWidth={20}
                    width="30%"
                    display='flex'
                />
            </div>
        </div>
    );
};

export default Canvas;
