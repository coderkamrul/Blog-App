import React, { useContext } from 'react'
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Context } from './context/Context';
const App = () => {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/setting">
          <Route path="/setting">{user ? <Setting /> : <Register />}</Route>
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
      </Switch>
    </Router>
  );
}

export default App
