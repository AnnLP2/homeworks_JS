import React, { useState, useEffect } from "react";

function PostCatalog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }

    fetchPosts().then();
  }, []);

  return (
    <div className="posts">
      <ul className="posts__list">
        {posts.map((post) => (
          <li
            className="posts_single-post"
            key={post.id}
            data-post-id={post.id}
          >
            <h3 className="posts__post-title">{post.title}</h3>
            <p className="posts__post-description">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostCatalog;
