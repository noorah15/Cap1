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

  const [countNum, setCountNum] = useState([0]);

  const [flexNum, setFlexNum] = useState([0]);

  const check = (id) => {
    if (
      real[id - 1].img !==
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    )
      if (
        real[id - 1].img ===
        "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk="
      ) {
        ch.map((item) => {
          if (real[id - 1].hIamge === item.img) {
            item.count++;
          }
          return item;
        });

        let countCard = ch.find((item) => {
          return real[id - 1].hIamge === item.img;
        });
        //console.log(countCard.count);
        if (countCard.count === 2) {
          const newReal = real.map((item) => {
            if (item.hIamge === real[id - 1].hIamge) {
              item.img =
                "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
            }
            return item;
          });
          setReal(newReal);
          countNum[0]++;
          setCountNum(countNum);
        } else {
          const newReal = real.map((item) => {
            if (item.id === id) {
              item.img = item.hIamge;
            }
            return item;
          });
          setReal(newReal);
        }
        // flexNum[0]++;
        // console.log(flexNum[0]);
        // if (flexNum[0] === 2) {
        //   const newReal = real.map((item) => {
        //     item.img =
        //       "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=";
        //     return item;
        //   });
        //   flexNum[0] = 0;
        //   setReal(newReal);
        // }
        // setFlexNum(flexNum);
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

      <h1>{countNum[0]} </h1>
    </div>
  );
}
