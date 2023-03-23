import React, { useState } from "react";
import PropTypes from "prop-types";

Count.propTypes = {
    color: PropTypes.string.isRequired,
    rounded: PropTypes.bool,

};
Count.defaultProps = {
    rounded: true,
}
function Count(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            This is {count}
            {count}
            <button onClick={() => setCount(x => x + 1)}>Increase</button>
            <button onClick={() => setCount(x => x - 1)}>Decrease</button>
        </div>
    )
}


export default Count;