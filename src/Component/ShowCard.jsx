import React from "react";
import Card from "./Card";

export default function ShowCard() {
  let food = [
    {
      id: "1",
      img: "https://cdn-icons-png.flaticon.com/128/1404/1404945.png",
      catigory: "Pizza",
      type: "Peperony ",
      price: "5",
    },
    {
      id: "2",
      img: "https://cdn-icons-png.flaticon.com/128/1404/1404945.png",
      catigory: "Pizza",
      type: "Peperony ",
      price: "5",
    },
  ];
  return (
    <>
      <div className="flex justify-center ">
        <div className=" grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4     ">
          {food.map((product) => {
            return (
              <div key={product.id}>
                <Card
                  img={product.img}
                  catigory={product.catigory}
                  type={product.type}
                  price={product.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
