import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {
    color: PropTypes.string.isRequired,
    rounded: PropTypes.bool,

};
ColorBox.defaultProps = {
    rounded: true,
}
function ColorBox(props) {
    const { color } = props;
    const [colour, setColour] = useState('');
    return (
        <div className="box" style={{ background: color }}>
            Prop is {color} but
            You are select {colour}
            <button onClick={() => setColour('black')}>Change to black</button>
            <button onClick={() => setColour('white')}>Change to white</button>
        </div>
    )
}


export default ColorBox;