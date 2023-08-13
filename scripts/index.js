'use strict';

const searchButton = document.getElementById('searchButton');
const postIdInput = document.getElementById('postId');
const postContainer = document.getElementById('postContainer');
const postContent = document.getElementById('postContent');
const commentsButton = document.getElementById('commentsButton');
const commentsContainer = document.getElementById('commentsContainer');

searchButton.addEventListener('click', () => {
  const postId = Number(postIdInput.value);
  if (postId >= 1 && postId <= 100) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Post not found');
        }
        return response.json();
      })
      .then(post => {
        postContent.innerHTML = `
              <h3>Title: ${post.title}</h3>
              <p>${post.body}</p>
            `;
        postContainer.style.display = 'block';
        postContent.style.marginBottom = '15px';
        commentsContainer.innerHTML = '';
      })
      .catch(error => {
        console.error(error);
        postContainer.style.display = 'none';
        commentsContainer.innerHTML = '';
      });
  } else {
    console.error('Invalid Post ID');
    postContainer.style.display = 'none';
    commentsContainer.innerHTML = '';
  }
});

commentsButton.addEventListener('click', () => {
  const postId = Number(postIdInput.value);
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
      commentsContainer.innerHTML = '<h3>Comments:</h3>';
      comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
              <h4>${comment.name}</h4>
              <p>${comment.body}</p>
            `;
        commentsContainer.append(commentElement);
        commentsContainer.style.marginTop = '15px';
      });
    })
    .catch(error => {
      console.error(error);
      commentsContainer.innerHTML = '<p>Error loading comments</p>';
    });
});