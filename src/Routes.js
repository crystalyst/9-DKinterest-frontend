import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "Pages/Main";
import Home from "Pages/Home";
import Pin from "Pages/Pin";
import MyPage from "Pages/Mypage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/home" exact component={Home} />
        <Route path="/pin/:id" exact component={Pin} />
        <Route path="/mypage" exact component={MyPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
