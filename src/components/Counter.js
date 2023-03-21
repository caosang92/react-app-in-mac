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
    const [count, setCount] = useState(0);
    return (
        <div className="box" style={{ background: color }}>
            This is {color}
            {count}
            <button onClick={() => setCount(x => x + 1)}>Increase</button>
            <button onClick={() => setCount(x => x - 1)}>Decrease</button>
        </div>
    )
}


export default ColorBox;