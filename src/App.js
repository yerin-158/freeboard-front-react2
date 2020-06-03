import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import BoardContainer from "./containers/BoardContainer";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainContainer}/>
                <Route path="/board" component={BoardContainer} />
            </Switch>
        </BrowserRouter>
    )

}

export default App;
