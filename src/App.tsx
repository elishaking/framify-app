import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, UploadPage } from "./components/pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/upload" component={UploadPage} />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  );
};

export default App;
