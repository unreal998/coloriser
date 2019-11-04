import * as React from "react";
import {Link} from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./Header.scss";
import {Logo} from "../Logo/Logo";
export const Header = (props) => {
    return (
        <div className="headerWrapper" style={{"background": props.headerColor}}>
            <div className="headerMain">
                <div className="logoContainer">
                    <Logo color={props.textColor} />
                </div>
                <div className="headerMenuWrapper">
                    <div className="headerButton">
                        <Link to={'/'} className="headerNav">HOME</Link>
                    </div>
                    <div className="headerButton">
                        <Link to={'/messages'} className="headerNav">MESSAGES</Link>
                    </div>
                    <div className="headerButton">
                        <Link  to={'/settings'} className="headerNav">SETTINGS</Link>
                    </div>
                </div>
                <div className="userInfoWrapper">
                    <AccountCircleIcon fontSize="large"/>
                    <p>User Name</p>
                    <ArrowDropDownIcon fontSize="default" />
                    {/*<img alt="" className="userIcon" src="#"/>*/}
                </div>
            </div>
        </div>
    )
};
