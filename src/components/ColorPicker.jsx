import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
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
            <SketchPicker
                color={this.state.background}
                onChangeComplete={this.handleChangeComplete}
            />

            <button onClick = {() => this.props.request(this.parseRgb(this.state.background))}> Worjkdshh</button>
            </>
        );
    }

    
}

export default ColorPicker;