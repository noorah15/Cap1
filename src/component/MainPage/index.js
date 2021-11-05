import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="mainInMainPage">
      <div className="choiceFP">
        <h1 className="gamename3"> Halloween </h1>
        <h2 className="gamename4"> Match-Up </h2>
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
