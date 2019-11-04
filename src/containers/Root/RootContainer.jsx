import {RootComponent} from "../../components/Root/RootComponent";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
};

const mapDispatchToProps = () => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);