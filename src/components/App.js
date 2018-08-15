import React from "react";
import { Todo1 } from "./Todos";
import { About1 } from "./About";
import { Nav } from "./Navigation"
import "typeface-roboto";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div id="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={About1} />
          <Route path="/About" exact component={About1} />
          <Route path="/Todos" component={Todo1} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
