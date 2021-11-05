import React, { useState, useEffect } from "react";
import "./style.css";

export default function EasyLevel() {
  //main array of orignal cards
  const [orginalCard, setOrginalCard] = useState([
    {
      id: 1,
      img: require(`./../assests/front1.JPEG`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 2,
      img: require(`./../assests/front2.JPEG`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 3,
      img: require(`./../assests/front3.JPEG`).default,
      count: 0,
      isFinish: false,
    },
  ]);

  const [game, setGame] = useState([
    //main array of game
    {
      id: 2,
      gameId: 1,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front1.JPEG`).default,
    },
    {
      id: 3,
      gameId: 2,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front2.JPEG`).default,
    },
    {
      id: 4,
      gameId: 2,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front2.JPEG`).default,
    },
    {
      id: 5,
      gameId: 3,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front3.JPEG`).default,
    },
    {
      id: 6,
      gameId: 3,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front3.JPEG`).default,
    },

    {
      id: 1,
      gameId: 1,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front1.JPEG`).default,
    },
  ]);

  const [finishedCardNum, setFinishedCardNum] = useState(0);
  const [opnedCards, setOpnedCards] = useState([0]); //only works with array

  const delay = (ms) => new Promise((res) => setTimeout(res, ms)); //to delay cards flip if wrong match

  const restartGame = () => {
    //to restart game on clicking restart button
    setOrginalCard([
      //the useState function use of array orignalcard
      {
        id: 1,
        img: require(`./../assests/front1.JPEG`).default,
        count: 0,
        isFinish: false,
      },
      {
        id: 2,
        img: require(`./../assests/front2.JPEG`).default,
        count: 0,
        isFinish: false,
      },
      {
        id: 3,
        img: require(`./../assests/front3.JPEG`).default,
        count: 0,
        isFinish: false,
      },
      // {
      //   id: 4,
      //   img: require(`./../assests/front4.JPEG`).default,
      //   count: 0,
      //   isFinish: false,
      // },
      // {
      //   id: 5,
      //   img: require(`./../assests/front5.JPEG`).default,
      //   count: 0,
      //   isFinish: false,
      // },
      // {
      //   id: 6,
      //   img: require(`./../assests/front6.JPEG`).default,
      //   count: 0,
      //   isFinish: false,
      // },
      // {
      //   id: 7,
      //   img: require(`./../assests/front7.JPEG`).default,
      //   count: 0,
      //   isFinish: false,
      // },
      // {
      //   id: 8,
      //   img: require(`./../assests/front8.JPEG`).default,
      //   count: 0,
      //   isFinish: false,
      // },
      // {
      //   id: 9,
      //   img: require(`./../assests/front9.JPEG`).default,
      //   count: 0,
      //   isFinish: false,
      // },
    ]);

    setGame([
      //the useState function use of array game

      {
        id: 2,
        gameId: 1,
        back: require(`./../assests/cardback.jpg`).default,
        front: require(`./../assests/front1.JPEG`).default,
      },
      {
        id: 3,
        gameId: 2,
        back: require(`./../assests/cardback.jpg`).default,
        front: require(`./../assests/front2.JPEG`).default,
      },
      {
        id: 4,
        gameId: 2,
        back: require(`./../assests/cardback.jpg`).default,
        front: require(`./../assests/front2.JPEG`).default,
      },
      {
        id: 5,
        gameId: 3,
        back: require(`./../assests/cardback.jpg`).default,
        front: require(`./../assests/front3.JPEG`).default,
      },
      {
        id: 6,
        gameId: 3,
        back: require(`./../assests/cardback.jpg`).default,
        front: require(`./../assests/front3.JPEG`).default,
      },

      {
        id: 1,
        gameId: 1,
        back: require(`./../assests/cardback.jpg`).default,
        front: require(`./../assests/front1.JPEG`).default,
      },
    ]);

    const newGame = game.map((item, i) => {
      //when starting a new game all cards will flip back and randomize
      item.back = require(`./../assests/cardback.jpg`).default;
      return item;
    });
    setGame(newGame); //restarts the game with the newGame array
    setFinishedCardNum(0); //restarts the ounter at 0 correct

    changeCardPlace(); //randomize the card places
  };

  const changeCardPlace = () => {
    //to change cards place every time it restarts
    //1- genrate random numbers from 0 to 5 for the easy level
    const numbers = [0, 1, 2, 3, 4, 5];
    numbers.sort(() => Math.random() - 0.5);

    //change cards place
    let newGame = [];
    for (let i = 0; i < numbers.length; i++) {
      newGame.push(game[numbers[i]]);
    }
    //console.log(newGame);
    setGame(newGame);
  };

  useEffect(() => {
    changeCardPlace();
  }, []); //to do the change card place with every refresh of page

  const check = async (id) => {
    //to check match
    // id = i+1 ind
    let backCard = require(`./../assests/cardback.jpg`).default;
    let getIndexInOrginalCard = game[id - 1].gameId - 1;
    let check = orginalCard[getIndexInOrginalCard].isFinish;

    // console.log(check + "  " + getIndexInOrginalCard + " " + id);
    if (check === false)
      if (game[id - 1].back === backCard) {
        //count number of cards to check if the same or not
        //1-change count of each card, when its matched count = 2 otherwise its not a match
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
          //  && countCard.count !== 2) <this is a deleted code
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
        // const newOrginalCard = orginalCard.map((item) => {
        //   if (item.id === getIndexInOrginalCard) {
        //     item.count = 0;
        //   }
        //   return item;
        // });
        // setGame(newOrginalCard);

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
          <button className="backBtn">
            <img
              className="backIcon"
              src="https://img.icons8.com/material-outlined/24/ffffff/circled-left--v1.png"
            />
          </button>
          <button
            className="restartBtn"
            onClick={() => {
              restartGame();
            }}
          >
            <img
              className="resIcon"
              src="https://img.icons8.com/material-outlined/24/ffffff/restart--v1.png"
            />
          </button>
        </div>
        <div className="timerDiv">
          <div className="counter">
            <h1 className="countNum">{finishedCardNum} </h1>
            <h1 className="countHead"> correct </h1>
          </div>

          <h1 className="timer"> 00:30 </h1>
          {/*will make this into dynamic soon */}
        </div>
      </div>
      {/*start of cards return */}
      <div className="cardContinerEasy">
        {game.map((item, i) => {
          return (
            <div className="cardEasy" key={i}>
              <img
                src={item.back}
                className="backImgEasy"
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
