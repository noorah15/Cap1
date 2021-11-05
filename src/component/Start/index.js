import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();
  return (
    <div className="mainstart">
      <div className="startup">
        <h1 className="gamename"> Halloween </h1>
        <h2 className="gamename2"> Match-Up </h2>
        <div className=".choiceFP">
          <button
            className="easy"
            onClick={() => {
              navigate("/easyLevel");
            }}
          >
            easy level
          </button>
          <button
            className="medium"
            onClick={() => {
              navigate("/mediumLevel");
            }}
          >
            medium level
          </button>
          <button
            className="high"
            className="inst"
            onClick={() => {
              navigate("/hardLevel");
            }}
          >
            high level
          </button>
        </div>
      </div>
    </div>
  );
}
