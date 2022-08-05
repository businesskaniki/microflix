/* eslint-disable consistent-return */
/* eslint-disable camelcase */
class Comment {
  constructor(item_id, username, comment) {
    this.item_id = item_id;
    this.username = username;
    this.comment = comment;
  }
}

const postComment = async (comment) => {
  const posts = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6eqgGD4SLBYFy2PQu6P9/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  const result = await posts.json();
  return result;
};
const commentCounter = (value) => {
  value += 1;
  return value;
};
export { postComment, Comment, commentCounter };
