import React, { Component } from "react";

class PostCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    await this.fetchPosts();
  }

  async fetchPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const posts = await response.json();
      this.setState({ posts });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  render() {
    const { posts } = this.state;
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
}

export default PostCatalog;
