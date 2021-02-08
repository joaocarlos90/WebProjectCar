import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../views/Home';
import Register from '../views/Register';
import List from '../views/List';

export default function Routes (){
    return(
        <BrowserRouter>
          <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/register" exact component={Register}/>
             <Route path="/register/:id" exact component={Register}/>
             <Route path="/register/filter/all/" exact component={List}/>
          </Switch>
        </BrowserRouter>
    )
}