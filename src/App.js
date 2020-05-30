import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Main from "./components/Main";
import Join from "./components/Join";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/join" component={Join}/>
            </Switch>
        </BrowserRouter>
    )

}

export default App;
