import React from "react";
import { AiFillLeftCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Instructions() {
  //const navigation = useNavigate();

  return (
    <div className="mainInIns">
      <div className="instrac">
        <h1 class="instractions">Instructions</h1>

        <h3>
          1-Click the cards to reveal a magic icon .
          <br />
          2- Memorize it so that you can match it to similar cards.
          <br />
          3- Match all of the cards on the board to complete the level.
        </h3>

        <AiFillLeftCircle
          className="backBtn"
          onClick={() => {
            //navigation.goBack();
          }}
        />
      </div>
    </div>
  );
}
