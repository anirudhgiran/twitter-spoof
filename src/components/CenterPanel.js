import React from "react";

//Center Panel Component Imports
import Header from "./centerPanelComponents/Header";

//React Router DOM Imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const CenterPanel = () => {
  return (
    <div className="centerPanel">
      <Router>
        <Switch>
          <Route
            path="/home"
            exact
            render={(props) => <Header {...props} headerText="Home" />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default CenterPanel;
