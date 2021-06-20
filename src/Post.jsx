import React from "react";
import { useQuery } from "react-query";
import { gql, request } from "graphql-request";
import { endpoint } from "./App";

function usePosts() {
  return useQuery("posts", async () => {
    const { posts } = await request(
      endpoint,
      gql`
        query {
          posts {
            id
            title
            user {
              id
              name
              email
            }
          }
        }
      `
    );
    return posts;
  });
}

export default function Post() {
  const { status, data, error } = usePosts();
  return (
    <div>
      <h1>Post</h1>
      <div>
        {status === "loading" ? (
          "loading..."
        ) : status === "error" ? (
          error.message
        ) : (
          <ol>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
