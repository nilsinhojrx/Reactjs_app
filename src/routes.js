import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Repositories from "./pages/Repositories/Repositories";
import Home from "./pages/Home/Home";

// Switch -> Container -> define troca de rotas
export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/> 
                <Route path="/repositories" component={Repositories} />
            </Switch>
        </BrowserRouter>
    );
}