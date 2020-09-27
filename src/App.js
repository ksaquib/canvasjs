import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import LiveChart from "./components/LiveChart";
import "./App.css";
const routes = [
  { path: "/", name: "Dashboard", Component: Dashboard },
  { path: "/home", name: "Home", Component: Home },
  {
    path: "/live-charts",
    name: "Live Charts",
    Component: LiveChart,
  },
];
function App() {
  return (
    <div className="container-fluid">
      <Switch>
        {routes.map(({ path, name, Component }) => (
          <Route exact path={path} component={Component} key={name} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
