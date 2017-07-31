/**
 * Created by frederickmacgregor on 28/07/2017.
 */
"use strict";

import React from "react";
import ReactDOM from "react-dom";
import  {Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Reckoning from "./pages/Reckoning";
import Announcements from "./pages/Announcements";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Reckoning}/>
            <Route path="announcements" component={Announcements}></Route>
        </Route>
    </Router>
, app);

