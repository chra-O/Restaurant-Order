import React from "react";
import Card from "./Card";

export default function ShowCard() {
  let food = [
    {
      id: "1",
      img: "https://cdn-icons-png.flaticon.com/128/1404/1404945.png",
      catigory: "Pizza",
      name: "Peperony ",
      price: "5",
    },
    {
      id: "2",
      img: "https://cdn-icons-png.flaticon.com/512/837/837606.png",
      catigory: "Fried Chicken",
      name: "Chicken legs",
      price: "8",
    },
    {
      id: "3",
      img: "https://cdn-icons-png.flaticon.com/512/1858/1858002.png",
      catigory: "Burger",
      name: "cheese Burger",
      price: "3.5",
    },
    {
      id: "4",
      img: "https://cdn-icons.flaticon.com/png/512/706/premium/706907.png?token=exp=1643637122~hmac=f3ca500c7d58eb50698a481d9bc0aa75",
      catigory: "Potato",
      name: "fries ",
      price: "2",
    },
    {
      id: "5",
      img: "https://cdn-icons.flaticon.com/png/128/783/premium/783079.png?token=exp=1643637190~hmac=8ec9a28dcc37a7afa792ecba7a20f2f8",
      catigory: "Potato",
      name: "chips",
      price: "2.5",
    },
    {
      id: "6",
      img: "https://cdn-icons.flaticon.com/png/128/2515/premium/2515183.png?token=exp=1643637292~hmac=f9fad1a4f5700c9bdfcbe4b777ea943f",
      catigory: "Salad",
      name: "Tabwla",
      price: "4",
    },
    {
      id: "7",
      img: "https://cdn-icons.flaticon.com/png/128/3067/premium/3067801.png?token=exp=1643637357~hmac=496b90a8e326b2be27bfc1d9d181d5d8",
      catigory: "Noodles",
      name: "Ramun ",
      price: "5.5",
    },
    {
      id: "8",
      img: "https://cdn-icons.flaticon.com/png/128/4780/premium/4780045.png?token=exp=1643637614~hmac=c939f6d0ec6c3e31a156600c885a0f3e",
      catigory: "Rice",
      name: "Bryany",
      price: "5",
    },
    {
      id: "9",
      img: "https://cdn-icons.flaticon.com/png/512/3068/premium/3068017.png?token=exp=1643637820~hmac=49d6528e83880e08a7128cad13bc72d7",
      catigory: "Sweet",
      name: "Cake",
      price: "5",
    },
    {
      id: "10",
      img: "https://cdn-icons-png.flaticon.com/512/3480/3480618.png",
      catigory: "Pasta",
      name: "pasta with meat bolls",
      price: "3.6",
    },
    {
      id: "11",
      img: "https://cdn-icons-png.flaticon.com/128/1041/1041345.png",
      catigory: "Sweets",
      name: "Donat",
      price: "1.5",
    },
    {
      id: "12",
      img: "https://cdn-icons.flaticon.com/png/512/4062/premium/4062767.png?token=exp=1643638146~hmac=bc9305e6d4f3bb9d6b878c1dd15f0223",
      catigory: "Sweets",
      name: "Lokmada",
      price: "2.5",
    },
    {
      id: "13",
      img: "https://cdn-icons.flaticon.com/png/512/2388/premium/2388080.png?token=exp=1643638448~hmac=8fb66142b172502cd38f61d19803c8dc",
      catigory: "Soup",
      name: "Mix",
      price: "2",
    },
  ];
  return (
    <>
      <div className="flex justify-center ">
        <div className=" grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4     ">
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
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
