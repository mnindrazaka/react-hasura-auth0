import React from "react";
import { useQuery } from "react-query";
import { gql, request } from "graphql-request";
import { endpoint } from "./App";

function useUsers() {
  return useQuery("users", async () => {
    const { users } = await request(
      endpoint,
      gql`
        query {
          users {
            id
            name
            email
            posts {
              id
              title
            }
          }
        }
      `
    );
    return users;
  });
}

export default function User() {
  const { status, data, error } = useUsers();
  return (
    <div>
      <h1>Users</h1>
      <div>
        {status === "loading" ? (
          "loading..."
        ) : status === "error" ? (
          error.message
        ) : (
          <ol>
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
