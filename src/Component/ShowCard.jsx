import React from "react";
import Card from "./Card";
import { useEffect } from "react";

import { useSelector } from "react-redux";

export default function ShowCard() {
  const isDark = useSelector((state) => state.food.theme);
  let food = [
    {
      id: "1",
      img: "http://localhost:3000/image/pizza.png",
      catigory: "Pizza",
      name: "Peperony ",
      price: 5,
      qualety: 1,
    },
    {
      id: "2",
      img: "http://localhost:3000/image/legs.png",
      catigory: "Fried Chicken",
      name: "Chicken legs",
      price: 8,
      qualety: 1,
    },
    {
      id: "3",
      img: "http://localhost:3000/image/burger.png",
      catigory: "Burger",
      name: "cheese Burger",
      price: 3.5,
      qualety: 1,
    },
    {
      id: "4",
      img: "http://localhost:3000/image/finger.png",
      catigory: "Potato",
      name: "fries ",
      price: 2,
      qualety: 1,
    },
    {
      id: "5",
      img: "http://localhost:3000/image/cheps.png",
      catigory: "Potato",
      name: "chips",
      price: 2.5,
      qualety: 1,
    },
    {
      id: "6",
      img: "http://localhost:3000/image/salad.png",
      catigory: "Salad",
      name: "Tabwla",
      price: 4,
      qualety: 1,
    },
    {
      id: "7",
      img: "http://localhost:3000/image/noodels.png",
      catigory: "Noodles",
      name: "Ramun ",
      price: 5.5,
      qualety: 1,
    },
    {
      id: "8",
      img: "http://localhost:3000/image/rice.png",
      catigory: "Rice",
      name: "Bryany",
      price: 5,
      qualety: 1,
    },
    {
      id: "9",
      img: "http://localhost:3000/image/cake.png",
      catigory: "Sweet",
      name: "Cake",
      price: 5,
      qualety: 1,
    },
    {
      id: "10",
      img: "http://localhost:3000/image/pasta.png",
      catigory: "Pasta",
      name: "pasta with meat bolls",
      price: 3.6,
      qualety: 1,
    },
    {
      id: "11",
      img: "http://localhost:3000/image/Doughnut.png",
      catigory: "Sweets",
      name: "Doughnut",
      price: 1.5,
      qualety: 1,
    },
    {
      id: "12",
      img: "http://localhost:3000/image/lokmada.png",
      catigory: "Sweets",
      name: "Lokmada",
      price: 2.5,
      qualety: 1,
    },
    {
      id: "13",
      img: "http://localhost:3000/image/soup.png",
      catigory: "Soup",
      name: "Mix",
      price: 2,
      qualety: 1,
    },
  ];
  useEffect(() => {
    fetch("https://test-44c0b-default-rtdb.firebaseio.com/food.json", {
      method: "PUT",
      body: JSON.stringify(food),
    }).catch((e) => console.log(e));
  });
  return (
    <>
      <div
        className={` ${
          isDark
            ? " flex justify-center  w-full "
            : " flex justify-center   w-full bg-stone-300"
        }`}
      >
        <div className=" grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4    ">
          {food.map((product, index) => {
            return (
              <div key={product.id}>
                <Card
                  img={product.img}
                  catigory={product.catigory}
                  name={product.name}
                  price={product.price}
                  index={index}
                  data={food}
                  id={product.id}
                  qualety={product.qualety}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
