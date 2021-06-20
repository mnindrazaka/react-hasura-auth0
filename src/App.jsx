import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Switch, Route, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Post from "./Post";
import User from "./User";

export const endpoint = "https://hasura-exercise.hasura.app/v1/graphql";
const queryClient = new QueryClient();

export default function App() {
  const { loginWithRedirect, isLoading, isAuthenticated, logout } = useAuth0();

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) loginWithRedirect();
  }, [isLoading, isAuthenticated]);

  return (
    <QueryClientProvider client={queryClient}>
      <h1>Welcome</h1>
      <button onClick={logout}>Logout</button>
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
