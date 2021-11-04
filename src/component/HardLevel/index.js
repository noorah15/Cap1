import React, { useState } from "react";
import "./style.css";

export default function HardLevel() {
  const [ch, setCh] = useState([
    {
      img: "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
      count: 0,
    },
    { img: "http://webmeup.com/upload/blog/lead-image-105.png", count: 0 },
  ]);

  const [real, setReal] = useState([
    {
      id: 1,
      img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=",
      hIamge:
        "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=",
      hIamge: "http://webmeup.com/upload/blog/lead-image-105.png",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=",
      hIamge:
        "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=",
      hIamge: "http://webmeup.com/upload/blog/lead-image-105.png",
    },
  ]);

  const [finishedCardNum, setFinishedCardNum] = useState(0);

  const [flexNum, setFlexNum] = useState([0]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  function wait(ms) {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  const check = async (id) => {
    let finishCard =
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
    let backCard =
      "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=";

    if (real[id - 1].img !== finishCard)
      if (real[id - 1].img === backCard) {
        //count number of cards to check if the same or not
        //1-change count to each card
        const newCh = ch.map((item) => {
          if (real[id - 1].hIamge === item.img) {
            item.count++;
          }
          return item;
        });
        setCh(newCh);

        //2-use find to return count
        let countCard = ch.find((item) => {
          return real[id - 1].hIamge === item.img;
        });

        const newReal = real.map((item) => {
          if (item.id === id) {
            item.img = item.hIamge;
          }
          return item;
        });
        setReal(newReal);

        await delay(1000);
        //wait(1000);

        console.log("Waited 1s");

        //console.log(countCard.count);

        //3- cheack if is equals or not
        //begin
        if (countCard.count === 2) {
          //1- change image to finishCard
          const newReal = real.map((item) => {
            if (item.hIamge === real[id - 1].hIamge) {
              item.img = finishCard;
            }
            return item;
          });
          setReal(newReal);

          //2- increase number of finished cards

          setFinishedCardNum(finishedCardNum + 1);
        }
        //end

        flexNum[0]++;
        console.log(flexNum[0]);
        if (flexNum[0] === 2 && countCard.count !== 2) {
          const newReal = real.map((item) => {
            item.img =
              "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=";
            return item;
          });
          flexNum[0] = 0;
          setReal(newReal);
          //set all count to 0
          const newCh2 = ch.map((item) => {
            item.count = 0;
            return item;
          });

          setCh(newCh2);
          console.log(newCh2);
        } else if (flexNum[0] === 2) flexNum[0] = 0;
        setFlexNum(flexNum);

        //finish
      } else {
        const newReal = real.map((item) => {
          if (item.id === id) {
            item.img =
              "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=";
          }
          return item;
        });

        setReal(newReal);
      }

    // if (a === 0) {
    // } else if (a === 1) {
    // } else {
    // }
  };

  return (
    <div className="main">
      {real.map((item, i) => {
        return (
          <div className="cardContiner">
            <div className="card">
              <img
                src={item.img}
                className="backImg"
                onClick={() => {
                  check(i + 1);
                }}
              />
            </div>
          </div>
        );
      })}

      <h1>{finishedCardNum} </h1>
    </div>
  );
}
