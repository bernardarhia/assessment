import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Report from "./components/Report";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/report" component={Report} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
