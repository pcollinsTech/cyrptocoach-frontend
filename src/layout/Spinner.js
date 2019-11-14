import React from "react";
import spinner from "./spinner.gif";
const Spinner = () => (
    <React.Fragment>
        <img src={spinner} alt="loadin..." style={{ width: "200px", display: "block", margin: "auto" }} />
    </React.Fragment>
);

export default Spinner;
