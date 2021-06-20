import React from "react";
import { useQuery } from "react-query";
import { gql } from "graphql-request";
import { graphQLClient } from "./App";

function useUsers() {
  return useQuery("users", async () => {
    const query = gql`
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
    `;
    const { users } = await graphQLClient.request(query);
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
