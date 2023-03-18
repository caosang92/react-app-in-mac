import React from "react";
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
    return (
        <div className="box" style={{ background: color }}>
            This is {color}
        </div>
    )
}


export default ColorBox;