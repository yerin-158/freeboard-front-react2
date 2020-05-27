import React from "react";
import Main from "../components/Main";
import {login} from '../store/api/userApi';


const MainContainer = () => {

    const loginSubmit = async (accountId, password) => {
        var test = await login(accountId, password);
    }

    return <Main
        handleClick={loginSubmit}
        />;
}

export default MainContainer;
