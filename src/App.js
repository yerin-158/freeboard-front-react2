import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import BoardContainer from "./containers/BoardContainer";
import Board from "./components/Board";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainContainer}/>
                <Route path="/board" component={Board} />
            </Switch>
        </BrowserRouter>
    )

}

export default App;
