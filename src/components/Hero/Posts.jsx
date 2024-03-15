import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container">
      <div className="posts">
        <div className="title">
          <h1>Our Latest Posts</h1>
          <form>
            <input required type="search" placeholder="Search" id="search" />
            <button htmlFor="search">🔍</button>
          </form>
        </div>
        <div className="cards">
          {posts.map((post) => (
            <div className="card">
              <div className="card-img"></div>
              <p className="id">ID: {post.id}</p>
              <h5>{post.body}</h5>
              <p className="data">Floyd Miles 3 Days Ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
