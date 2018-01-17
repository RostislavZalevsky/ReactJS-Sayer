import React, { Component } from 'react';
import { Router, Route, Switch} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import Index from './View/Index';
import AddItem from './View/AddItem';
import Item from './View/Item';

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Index}/>
                    <Route path="/AddItem" exact component={AddItem}/>
                    <Route path="/Item/:id" exact component={Item}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
