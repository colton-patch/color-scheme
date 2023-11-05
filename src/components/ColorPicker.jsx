import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    buttonStyle = {
        backgroundColor: `rgb(${this.props.fiveColors[1][0]}, ${this.props.fiveColors[1][1]}, ${this.props.fiveColors[1][2]})`,
        border: `2px solid rgb(${this.props.fiveColors[5][0]}, ${this.props.fiveColors[5][1]}, ${this.props.fiveColors[5][2]})`,
        color: `rgb(${this.props.fiveColors[5][0]}, ${this.props.fiveColors[5][1]}, ${this.props.fiveColors[5][2]})`
    }

    state = {
        background: 'rgb',
    };

    handleChangeComplete = (color) => {
        this.setState({ background: color.rgb });
    };

    parseRgb = (rgb) => {
        let rgbArr = [rgb.r, rgb.g, rgb.b];
        return rgbArr;
    };

    render() {
        return (
            <>
            <button onClick = {() => this.props.request(this.parseRgb(this.state.background))} style = {this.buttonStyle}>Palette from Color</button>

            <SketchPicker
                color={this.state.background}
                onChangeComplete={this.handleChangeComplete}
            />
            </>
        );
    }

    
}

export default ColorPicker;