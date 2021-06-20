import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Switch, Route, Link } from "react-router-dom";
import Post from "./Post";
import User from "./User";

export const endpoint = "https://hasura-exercise.hasura.app/v1/graphql";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
