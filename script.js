document.addEventListener('DOMContentLoaded', function() {
  const commentBtn = document.querySelector('.comment-btn');
  const commentInput = document.querySelector('.comment-input');

  // Event listener for reply buttons
  document.querySelectorAll('.reply-btn').forEach(button => {
    button.addEventListener('click', function() {
      const replyText = prompt('Enter your reply:');
      if (replyText) {
        addReply(replyText, button.parentElement.querySelector('.replies'));
      }
    });
  });

  // Event listener for like buttons
  document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
      const likeCount = button.parentElement.querySelector('.like-count');
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });
  });

  // Event listener for dislike buttons
  document.querySelectorAll('.dislike-btn').forEach(button => {
    button.addEventListener('click', function() {
      const dislikeCount = button.parentElement.querySelector('.dislike-count');
      dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
    });
  });

  // Function to add a reply
  function addReply(replyText, repliesDiv) {
    const replyDiv = document.createElement('div');
    replyDiv.classList.add('comment');
    replyDiv.innerHTML = `
      <p>${replyText}</p>
      <button class="like-btn">Like</button>
      <span class="like-count">0</span>
      <button class="dislike-btn">Dislike</button>
      <span class="dislike-count">0</span>
      <button class="reply-btn">Reply</button>
      <div class="replies"></div>
    `;
    repliesDiv.appendChild(replyDiv);

    // Add event listeners for newly created buttons
    replyDiv.querySelector('.like-btn').addEventListener('click', function() {
      const likeCount = replyDiv.querySelector('.like-count');
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });

    replyDiv.querySelector('.dislike-btn').addEventListener('click', function() {
      const dislikeCount = replyDiv.querySelector('.dislike-count');
      dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
    });

    replyDiv.querySelector('.reply-btn').addEventListener('click', function() {
      const nestedReplyText = prompt('Enter your reply:');
      if (nestedReplyText) {
        addReply(nestedReplyText, replyDiv.querySelector('.replies'));
      }
    });
  }
});