import React, { useState, useEffect } from "react";
import axios from "axios";
import { FlashStack, StackForm } from "../../components";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./style.css";
import { useScore } from "../../context/ScoreContext";

const FlashStacksPage = () => {
  const [stacks, setStacks] = useState([]);
  const [topic, setTopic] = useState("");
  const { score, setScore } = useScore();

  const { user } = useAuthContext();
  setScore(0);

  useEffect(() => {
    const displayStacks = async () => {
      const { data } = await axios.get("http://localhost:3000/flashStacks", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setStacks(data);
    };
    if (user) {
      displayStacks(user);
    }
  }, [stacks, user, topic]);

  return (
    <div id="flashStack">
      <h1>Your flashcard stacks</h1>
      <StackForm topic={topic} setTopic={setTopic} />
      <div className="stacksContainer">
        {stacks.map((stack) => (
          <FlashStack stack={stack} key={stack._id} />
        ))}
      </div>
    </div>
  );
};

export default FlashStacksPage;
