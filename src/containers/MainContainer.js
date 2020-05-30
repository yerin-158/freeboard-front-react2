import React from "react";
import {connect} from 'react-redux';

import Main from "../components/Main";

import {loginApi} from '../store/api/userApi';
import {loginSuccess, loginFail} from "../store/modules/main/action";


const MainContainer = ({accountId, isLogged, errorMessage, loginSuccess, loginFail}) => {
    console.log("errorMsg : "+errorMessage);
    console.log("isLogged : "+isLogged);

    const loginSubmit = async (id, password) => {
        var response = await loginApi(id, password);
        debugger;
        if (typeof response.data.code != "undefined"){
            loginFail(response.data.message);
        } else {
            loginSuccess(id);
        }
    }

    return <Main
        handleClick={loginSubmit}
        message={errorMessage}
        />;
}

const mapStateToProps = state => ({
    accountId: state.main.accountId,
    isLogged: state.main.isLogged,
    errorMessage: state.main.errorMessage
})

const mapDispatchToProps = dispatch => ({
    loginSuccess: (accountId) => dispatch(loginSuccess(accountId)),
    loginFail: (errorMessage) => dispatch(loginFail(errorMessage))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);
