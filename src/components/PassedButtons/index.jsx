import React from "react";
import "./style.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useScore } from "../../context/ScoreContext";

const PassedButtons = ({ cardIncrement, setCardIncrement, card }) => {
  const { user } = useAuthContext();
  const { score, setScore } = useScore();

  async function updatePass() {
    setCardIncrement(cardIncrement + 1);
    setScore(score + 1);

    const options = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        passed: true,
      }),
    };

    const response = await fetch(
      `https://flashcardsbackend-v5tb.onrender.com/flashCards/${card["_id"]}`,
      options
    );
  }

  async function updateFail() {
    setCardIncrement(cardIncrement + 1);

    const options = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        passed: false,
      }),
    };

    const response = await fetch(
      `https://flashcardsbackend-v5tb.onrender.com/flashCards/${card["_id"]}`,
      options
    );
  }

  return (
    <>
      <button className="passButton" onClick={updatePass}>
        Got it
      </button>
      <button className="failButton" onClick={updateFail}>
        Not quite
      </button>
    </>
  );
};

export default PassedButtons;
