import React from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container fixed>
      <Dashboard />
    </Container>
  );
}

export default App;
