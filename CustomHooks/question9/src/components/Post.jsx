import React, { useState, useCallback, useMemo } from "react";

const Post = ({ id, title, body }) => {
  const [verifyPost, setVerifyPost] = useState(false);

  const toggleVerify = useCallback(() => {
    setVerifyPost((prev) => !prev);
  }, []);

  const bgColor = useMemo(() => {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
  }, []);

  console.log("Post rendered:", id);

  return (
    <div style={{ backgroundColor: bgColor, padding: "10px", margin: "10px 0" }}>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Status: {verifyPost ? "Verified" : "Verify"}</p>
      <button onClick={toggleVerify}>
        {verifyPost ? "Unverify" : "Verify"}
      </button>
    </div>
  );
};

export default React.memo(Post);
