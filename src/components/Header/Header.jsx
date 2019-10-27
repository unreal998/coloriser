import * as React from "react";
import {Link} from "react-router-dom";
export const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="headerMain">
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
        </div>
    )
};