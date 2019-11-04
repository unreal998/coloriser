import HomePage from "../HomePage/HomePage";
import {LoginForm} from "../LoginForm/LoginForm";
import React from "react";
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';

export const RootComponent = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/"  render = {() => !(props.userData && Object.keys(props.userData).length !== 0)  ? <Redirect to ='/login'/> : <Redirect to = 'home'/>}  />
                    <Route path ={"/home"} component= {HomePage} />
                    <Route path={"/login"} component = {LoginForm}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
};
