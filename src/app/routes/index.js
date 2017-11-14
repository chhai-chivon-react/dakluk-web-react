import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Home from './../pages/Home';
import About from './../pages/About';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
        </Switch>
    </BrowserRouter>
);