import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/organisms";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" render={() => <h1>Home</h1>} exact />
        <Route path="/upload" render={() => <h1>Upload Image</h1>} />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
