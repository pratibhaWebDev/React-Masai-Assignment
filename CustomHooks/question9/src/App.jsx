import React, { useState, useEffect } from "react";
import Post from "./components/Post";

let postId = 1;

const App = () => {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddPost = () => {
    if (!title.trim() || !body.trim()) return;
    const newPost = {
      id: postId++,
      title,
      body,
    };
    setPosts((prev) => [...prev, newPost]);
    setTitle("");
    setBody("");
  };

  return (
    <div className="app">
      <h1>Timer: {timer}</h1>
      <input
        type="text"
        value={title}
        placeholder="Post Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={body}
        placeholder="Post Body"
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleAddPost}>Add Post</button>

      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default App;
