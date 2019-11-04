import React, {Fragment} from "react";
import "./Logo.scss";

export const Logo = (props) => {
    return (
        <Fragment>
            <span className={"logoText"}>COLO</span>
            <span  style={{color: props.color}}>RISER</span>
        </Fragment>
    )
};
