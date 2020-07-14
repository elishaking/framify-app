import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./components/pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" render={HomePage} exact />
        <Route path="/upload" render={() => <h1>Upload Image</h1>} />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
