import Detail from "pages/Detail";
import Login from "pages/Login";
import Register from "pages/Register";
import Search from "pages/Search";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import TablePage from "pages/TablePage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/detail/:id" children={<Detail />}></Route>
      <Route path="/table">
        <TablePage />
      </Route>
    </Switch>
  );
}

export default App;
