import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
          <Route exact path="/" component={Landing} />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
};

export default App;
