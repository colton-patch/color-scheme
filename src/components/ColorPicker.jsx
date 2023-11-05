import React from "react";
import { SketchPicker } from "react-color";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    background: "rgb",
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.rgb });
  };

  parseRgb = (rgb) => {
    let rgbArr = [rgb.r, rgb.g, rgb.b];
    return rgbArr;
  };

  render() {
    let buttonStyle = {
      backgroundColor: `rgb(${this.props.fiveColors[1][0]}, ${this.props.fiveColors[1][1]}, ${this.props.fiveColors[1][2]})`,
      border: `2px solid rgb(${this.props.fiveColors[5][0]}, ${this.props.fiveColors[5][1]}, ${this.props.fiveColors[5][2]})`,
      color: `rgb(${this.props.fiveColors[5][0]}, ${this.props.fiveColors[5][1]}, ${this.props.fiveColors[5][2]})`,
    };

    return (
      <>
        <SketchPicker
          color={this.state.background}
          onChangeComplete={this.handleChangeComplete}
        />
        <button
          onClick={() =>
            this.props.request(this.parseRgb(this.state.background))
          }
          style={buttonStyle} className="centered"
        >
          Palette from Color
        </button>
      </>
    );
  }
}

export default ColorPicker;
