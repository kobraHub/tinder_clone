import React from 'react';
import Header from "./Header";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
    return (
        <div>

            <Header/>
            <Router>
                <Switch>
                    <Route path='/chat'>
                        <h1>I am the chatpage</h1>
                    </Route>
                    <Route path='/'>
                        <h1>I am the home</h1>
                        <TinderCards />
                    </Route>
                </Switch>


            </Router>
        </div>
    );
}

export default App;
