import * as React from "react";
import {Fragment} from "react";
import {LoginForm} from "../LoginForm/LoginForm";
import "./HomePage.scss";
import {Header} from "../Header/Header";
import photoIcon from "../../assets/photo.png";
import FastEditionTab from '../FastEditiongTab/FastEditiongTab'
import {changeBodyColor, changeHeaderColor, changeTextColor} from "../../actions/fastEditiongActions";
import {connect} from "react-redux";

class HomePage extends React.Component{
    constructor(props)  {
        super(props);
        this.state = {
            toggleSettingsBar: false
        };
        this.toggleSettingsPanel = this.toggleSettingsPanel.bind(this);
    }

    toggleSettingsPanel(e) {
        this.setState( {
           toggleSettingsBar: !this.state.toggleSettingsBar
        });
    }



    render() {
        return (
            <Fragment>
                <Header headerColor={this.props.headerColor} />
                <div className={"mainContainer"}>
                    <div className={"leftCorrectionBlock"} />
                    <div className={"mainContainerWrapper"}>
                        <div className={"avatarContainer"}>
                            <h2>User Name</h2>
                            <img alt={""} className={"avatarImg"} src={photoIcon} />
                        </div>
                        <div className={"fastEditing"}>
                            <input type="file"/>
                            <input onClick={ (event) => this.toggleSettingsPanel(event)} value={"Fast Edition"} type={"button"} />
                            {this.state.toggleSettingsBar ? <FastEditionTab /> : false}
                        </div>
                        <div className={"rightCorrectionBlock"} />
                    </div>
                </div>
                <LoginForm />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        headerColor: state.fastEditorReducer.headerColor
    }
};

const mapDispatchToProps = dispatch => ({
    changeHeaderColor: (newColor) => dispatch(changeHeaderColor(newColor)),
    changeBodyColor: (newColor) => dispatch(changeBodyColor(newColor)),
    changeTextColor: (newColor) => dispatch(changeTextColor(newColor))
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
