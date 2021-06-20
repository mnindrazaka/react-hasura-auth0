import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Post from "./Post";
import User from "./User";

export default function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <Link to="/post">Post</Link>
        &nbsp;
        <Link to="/user">User</Link>
      </div>
      <Switch>
        <Route path="/post" component={Post} />
        <Route path="/user" component={User} />
      </Switch>
    </div>
  );
}
