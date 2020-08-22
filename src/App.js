import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Components/Home";
import { StandardRowsProvider } from './Context/StandardContext';

function App() {
  return (
    <StandardRowsProvider>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </StandardRowsProvider>
  );
}

export default App;
