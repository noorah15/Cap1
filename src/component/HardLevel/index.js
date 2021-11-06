import React, { useState, useEffect } from "react";
import "./../HardLevel/style.css";
import { useNavigate } from "react-router-dom";

export default function HardLevel() {
  const navigate = useNavigate();

  const [orginalCard, setOrginalCard] = useState([
    {
      id: 1,
      img: require(`./../newFronts/image0.jpg`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 2,
      img: require(`./../newFronts/image1.jpg`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 3,
      img: require(`./../newFronts/image2.jpg`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 4,
      img: require(`./../newFronts/image3.jpg`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 5,
      img: require(`./../newFronts/image4.jpg`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 6,
      img: require(`./../newFronts/image5.jpg`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 7,
      img: require(`./../newFronts/image6.jpg`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 8,
      img: require(`./../newFronts/image7.jpg`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 9,
      img: require(`./../newFronts/image8.jpg`).default,
      count: 0,
      isFinish: false,
    },
  ]);

  const [game, setGame] = useState([
    {
      id: 14,
      gameId: 7,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image6.jpg`).default,
    },
    {
      id: 2,
      gameId: 1,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image0.jpg`).default,
    },
    {
      id: 3,
      gameId: 2,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image1.jpg`).default,
    },
    {
      id: 4,
      gameId: 2,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image1.jpg`).default,
    },
    {
      id: 5,
      gameId: 3,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image2.jpg`).default,
    },
    {
      id: 6,
      gameId: 3,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image2.jpg`).default,
    },
    {
      id: 7,
      gameId: 4,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image3.jpg`).default,
    },
    {
      id: 8,
      gameId: 4,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image3.jpg`).default,
    },
    {
      id: 10,
      gameId: 5,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image4.jpg`).default,
    },
    {
      id: 18,
      gameId: 9,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image8.jpg`).default,
    },
    {
      id: 11,
      gameId: 6,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image5.jpg`).default,
    },
    {
      id: 9,
      gameId: 5,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image4.jpg`).default,
    },
    {
      id: 12,
      gameId: 6,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image5.jpg`).default,
    },
    {
      id: 13,
      gameId: 7,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image6.jpg`).default,
    },

    {
      id: 15,
      gameId: 8,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image7.jpg`).default,
    },
    {
      id: 16,
      gameId: 8,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image7.jpg`).default,
    },
    {
      id: 17,
      gameId: 9,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image8.jpg`).default,
    },

    {
      id: 1,
      gameId: 1,
      back: require(`./../newFronts/backCard.jpg`).default,
      front: require(`./../newFronts/image0.jpg`).default,
    },
  ]);

  const [finishedCardNum, setFinishedCardNum] = useState(0);
  const [opnedCards, setOpnedCards] = useState([0]); //only works with array

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const changeCardPlace = () => {
    //1- genrate random numbers from 0 to 17
    const numbers = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    ];
    numbers.sort(() => Math.random() - 0.5);

    //change cards place
    let newGame = [];
    for (let i = 0; i < numbers.length; i++) {
      newGame.push(game[numbers[i]]); //numbers[0] = 4  numbers[1] = 17
    }
    //console.log(newGame);
    setGame(newGame);
  };

  useEffect(() => {
    changeCardPlace();
  }, []);

  const check = async (id) => {
    // id = i+1 ind
    let backCard = require(`./../newFronts/backCard.jpg`).default;
    let getIndexInOrginalCard = game[id - 1].gameId - 1;
    let check = orginalCard[getIndexInOrginalCard].isFinish;

    // console.log(check + "  " + getIndexInOrginalCard + " " + id);
    if (check === false)
      if (game[id - 1].back === backCard) {
        //count number of cards to check if the same or not
        //1-change count to each card
        const newOrginalCard = orginalCard.map((item) => {
          if (game[id - 1].front === item.img) {
            item.count++;
          }
          return item;
        });
        setOrginalCard(newOrginalCard);

        //2-use find to return count
        let countCard = orginalCard.find((item) => {
          return game[id - 1].front === item.img;
        });

        const newGame = game.map((item, i) => {
          if (i === id - 1) {
            item.back = item.front;
          }
          return item;
        });
        setGame(newGame);

        await delay(1000);

        //3- cheack if is equals or not
        //begin
        if (countCard.count === 2) {
          //1- change image to finishCard

          const newGame = orginalCard.map((item, i) => {
            if (item.id === game[id - 1].gameId) {
              item.isFinish = true;
              //item.back = finishCard;
            }
            return item;
          });
          setOrginalCard(newGame);

          //2- increase number of finished cards
          setFinishedCardNum(finishedCardNum + 1);
        }
        //end

        // check how many card are filp
        //beagin
        opnedCards[0]++;

        if (opnedCards[0] === 2) {
          //  && countCard.count !== 2)
          const newGame = game.map((item) => {
            //change
            let getIndexInOrginalCard = item.gameId - 1;
            let check = orginalCard[getIndexInOrginalCard].isFinish;
            if (check === false) item.back = backCard;
            return item;
          });
          opnedCards[0] = 0;
          setGame(newGame);
          //set all count to 0 to
          const newOrginalCard2 = orginalCard.map((item) => {
            item.count = 0;
            return item;
          });

          setOrginalCard(newOrginalCard2);
        } else if (opnedCards[0] === 2) opnedCards[0] = 0;
        setOpnedCards(opnedCards);
        //finish check from filpNum

        //finish
      } else {
        orginalCard[getIndexInOrginalCard].count = 0;

        const newGame = game.map((item, i) => {
          if (i === id - 1) {
            item.back = backCard;
          }
          return item;
        });
        setGame(newGame);
      }
  };
  /* main return, style here  */
  return (
    <div className="main">
      <div className="upperPage">
        <div className="btnsDiv">
          <button className="backBtn" onClick={() => navigate("/start")}>
            <img
              className="backIcon"
              src="https://img.icons8.com/material-outlined/24/ffffff/circled-left--v1.png"
              alt="card"
            />
          </button>
        </div>
        <div className="timerDiv">
          <div className="counter">
            <h1 className="countNum">{finishedCardNum} </h1>
            <h1 className="countHead"> correct </h1>{" "}
          </div>

          <h1 className="timer"> 00:30 </h1>
          {/*will make this into dynamic soon */}
        </div>
      </div>
      {/*start of cards return */}
      <div className="cardContinerHard">
        {game.map((item, i) => {
          return (
            <div className="cardHard" key={i}>
              <img
                src={item.back}
                className="backImgHard"
                onClick={() => {
                  check(i + 1);
                }}
                alt="card"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
