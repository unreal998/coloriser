import * as React from "react";
import * as PropTypes from 'prop-types'
import {connect} from "react-redux";
import {changeBodyColor, changeHeaderColor, changeTextColor} from "../../actions/fastEditiongActions";

class FastEditionTab extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <input value={this.props.headerColor} type = "color" defaultValue={"#000"} onChange={(event) => this.props.changeHeaderColor(event.target.value)} />
                <input value={this.props.bodyColor}  type = "color" onChange={(event) => this.props.changeBodyColor(event.target.value)}/>
                <input value={this.props.textColor}  type = "color" onChange={(event) => this.props.changeTextColor(event.target.value)}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        headerColor: state.fastEditorReducer.headerColor,
        bodyColor: state.fastEditorReducer.bodyColor,
        textColor: state.fastEditorReducer.textColor
    }
};

const mapDispatchToProps = dispatch => ({
    changeHeaderColor: (newColor) => dispatch(changeHeaderColor(newColor)),
    changeBodyColor: (newColor) => dispatch(changeBodyColor(newColor)),
    changeTextColor: (newColor) => dispatch(changeTextColor(newColor))
});

FastEditionTab.propTypes = {
    changeHeaderColor: PropTypes.func,
    changeBodyColor: PropTypes.func,
    changeTextColor: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(FastEditionTab);