import React, { useState, useEffect } from "react";
import "./style.css";

export default function HardLevel() {
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
    {
      id: 4,
      img: require(`./../assests/front4.JPEG`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 5,
      img: require(`./../assests/front5.JPEG`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 6,
      img: require(`./../assests/front6.JPEG`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 7,
      img: require(`./../assests/front7.JPEG`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 8,
      img: require(`./../assests/front8.JPEG`).default,
      count: 0,
      isFinish: false,
    },
    {
      id: 9,
      img: require(`./../assests/front9.JPEG`).default,
      count: 0,
      isFinish: false,
    },
  ]);

  const [game, setGame] = useState([
    {
      id: 14,
      gameId: 7,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front7.JPEG`).default,
    },
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
      id: 7,
      gameId: 4,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front4.JPEG`).default,
    },
    {
      id: 8,
      gameId: 4,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front4.JPEG`).default,
    },
    {
      id: 10,
      gameId: 5,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front5.JPEG`).default,
    },
    {
      id: 18,
      gameId: 9,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front9.JPEG`).default,
    },
    {
      id: 11,
      gameId: 6,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front6.JPEG`).default,
    },
    {
      id: 9,
      gameId: 5,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front5.JPEG`).default,
    },
    {
      id: 12,
      gameId: 6,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front6.JPEG`).default,
    },
    {
      id: 13,
      gameId: 7,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front7.JPEG`).default,
    },

    {
      id: 15,
      gameId: 8,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front8.JPEG`).default,
    },
    {
      id: 16,
      gameId: 8,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front8.JPEG`).default,
    },
    {
      id: 17,
      gameId: 9,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front9.JPEG`).default,
    },

    {
      id: 1,
      gameId: 1,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front1.JPEG`).default,
    },
  ]);

  const [finishedCardNum, setFinishedCardNum] = useState(0);
  const [flipNum, setFlipNum] = useState([0]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const changeCardPlace = () => {
    //genrate random numbers from 0 to 17

    const numbers = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    ];
    numbers.sort(() => Math.random() - 0.5);

    //change cards place
    let newGame = [];

    for (let i = 0; i < numbers.length; i++) {
      newGame.push(game[numbers[i]]);
    }
    console.log(newGame);
    setGame(newGame);
  };

  useEffect(() => {
    changeCardPlace();
  }, []);

  const check = async (id) => {
    let backCard = require(`./../assests/cardback.jpg`).default;
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
          // const newGame = game.map((item) => {
          //   if (item.back === game[id - 1].front) {
          //     //item.back = finishCard;

          //   }
          //   return item;
          // });
          // setGame(newGame);

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
        flipNum[0]++;

        if (flipNum[0] === 2 && countCard.count !== 2) {
          const newGame = game.map((item) => {
            //change
            let getIndexInOrginalCard = item.gameId - 1;
            let check = orginalCard[getIndexInOrginalCard].isFinish;
            if (check === false) item.back = backCard;
            return item;
          });
          flipNum[0] = 0;
          setGame(newGame);
          //set all count to 0 to
          const newOrginalCard2 = orginalCard.map((item) => {
            item.count = 0;
            return item;
          });

          setOrginalCard(newOrginalCard2);
        } else if (flipNum[0] === 2) flipNum[0] = 0;
        setFlipNum(flipNum);
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
      <div className="cardContiner">
        {game.map((item, i) => {
          return (
            <div className="card" key={i}>
              <img
                src={item.back}
                className="backImg"
                onClick={() => {
                  check(i + 1);
                }}
                alt="card"
              />
            </div>
          );
        })}
      </div>

      <h1>{finishedCardNum} </h1>
    </div>
  );
}
