"use strict";

(function() {

  const searchButton = document.getElementById("searchButton");
  const postIdInput = document.getElementById("postId");
  const postContainer = document.getElementById("postContainer");
  const postContent = document.getElementById("postContent");
  const commentsButton = document.getElementById("commentsButton");
  const commentsContainer = document.getElementById("commentsContainer");

  const requestURL = "https://jsonplaceholder.typicode.com/posts/";

  const getPostId = () => {
    return Number(postIdInput.value);
  };

  const fetchPost = (postId) => {
    return fetch(`${requestURL}${postId}`)
      .then(response => {
        if (!response.ok) throw new Error("Post is not found!");
        return response.json();
      });
  };

  const fetchComments = (postId) => {
    return fetch(`${requestURL}${postId}/comments`)
      .then(response => response.json());
  };

  const renderPost = (post) => {
    postContent.innerHTML = `
      <h3>Title:${post.title}</h3>
      <p>${post.body}</p>
    `;
    postContainer.style.display = "block";
    postContent.style.marginBottom = "15px";
    commentsContainer.innerHTML = "";
  };

  const renderComments = (comments) => {
    commentsContainer.innerHTML = `<h3>Comments:</h3>`;
    comments.forEach(comment => {
      const commentEl = document.createElement("div");
      commentEl.innerHTML = `
      <h4>${comment.body}</h4>
      <p>${comment.body}</p>
    `;
      commentsContainer.append(commentEl);
    });
  };

  searchButton.addEventListener("click", () => {
    const postId = getPostId();
    if (postId >= 1 && postId <= 100) {
      fetchPost(postId)
        .then(post => {
          renderPost(post);
        })
        .catch(error => {
          console.error(error);
          postContainer.style.display = "none";
          commentsContainer.innerHTML = "";
        });
    } else {
      console.error("Invalid post Id");
      postContainer.style.display = "none";
      commentsContainer.innerHTML = "";
    }
  });

  commentsButton.addEventListener("click", () => {
    const postId = getPostId();
    fetchComments(postId)
      .then(comments => {
        renderComments(comments);
      })
      .catch(error => {
        console.error(error);
        commentsContainer.innerHTML = "<p>Error loading comments</p>";
      });
  });

})();


