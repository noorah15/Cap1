import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="choiceFP">
        <h1 className="gamename"> Halloween </h1>
        <h2 className="gamename2"> Match-Up </h2>
        <button
          className="inst"
          onClick={() => {
            navigate("/instructions");
          }}
        >
          Instructions
        </button>
        <button
          className="start"
          onClick={() => {
            navigate("/start");
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

/*

const navigation = useNavigation();
navigation.goBack();


*/
