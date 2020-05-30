import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Join from "./components/Join";
import MainContainer from "./containers/MainContainer";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainContainer} />
                <Route path="/join" component={Join}/>
            </Switch>
        </BrowserRouter>
    )

}

export default App;
