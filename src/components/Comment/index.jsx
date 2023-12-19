import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CommentItem = () => {
  const [comment, setComment] = useState(null);
  const [error, setError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await fetch(`http://localhost:3000/comments/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch comment");
        }

        const data = await response.json();
        setComment(data);

        console.log(comment)
      } catch (error) {
        setError(error.message);
      }
    };

    fetchComment();


  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (comment === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{comment.comment}</p>
    </div>
  );
};

export default CommentItem
