import React, {useEffect} from "react";
import {connect} from 'react-redux';

import Main from "../components/Main";

import {joinApi, loginApi} from '../store/api/userApi';
import {loginSuccess, loginFail, pageChange, joinFail} from "../store/modules/main/action";


const MainContainer = ({accountId, isLogged, isLoginPage,  errorMessage, loginSuccess, loginFail, pageChange, joinFail}) => {

    const loginSubmit = async (id, password) => {
        var response = await loginApi(id, password);
        if (typeof response.data.code != "undefined"){
            loginFail(response.data.message);
        } else {
            loginSuccess(id);
            alert("로그인에 성공하셨습니다. 게시판으로 이동합니다.");
            // eslint-disable-next-line no-restricted-globals
            location.href = "/board";
        }
    }

    const joinSubmit = async (id, password) => {
        var response = await joinApi(id, password);
        if (typeof response.data.code != "undefined"){
            joinFail(response.data.message);
        } else {
            alert("회원 가입에 성공하셨습니다. 로그인 페이지로 이동합니다.");
            pageChange();
        }
    }

    return <Main
        handleClick={isLoginPage? loginSubmit : joinSubmit}
        message={errorMessage}
        isLoginPage={isLoginPage}
        pageChange={pageChange}
        />;
}

const mapStateToProps = state => ({
    accountId: state.main.accountId,
    isLogged: state.main.isLogged,
    errorMessage: state.main.errorMessage,
    isLoginPage: state.main.isLoginPage
})

const mapDispatchToProps = dispatch => ({
    loginSuccess: (accountId) => dispatch(loginSuccess(accountId)),
    loginFail: (errorMessage) => dispatch(loginFail(errorMessage)),
    pageChange : () => dispatch(pageChange()),
    joinFail: (errorMessage) => dispatch(joinFail(errorMessage))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);
