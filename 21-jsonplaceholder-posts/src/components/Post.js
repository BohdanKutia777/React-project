function Post({ userId, title, body }) {
  return (
    <div className="container">
      <h2>UserId:{userId}</h2>
      <h2>Title: {title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default Post;
