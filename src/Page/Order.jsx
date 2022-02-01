import React from "react";
import NavBar from "../Component/NavBar";
import { useSelector } from "react-redux";
export default function Order() {
  const orderFood = useSelector((state) => state.food.value);
  console.log(orderFood);

  return (
    <>
      <NavBar />

      <div className="bg-gray-50 w-72 h-72 m-10  grid grid-rows-2 rounded-3xl">
        <div className="flex justify-center ">
          <img className=" w-24 h-24  mt-10  " src={orderFood.img} alt=""></img>
        </div>

        <div className=" grid  grid-rows-3  ">
          <div className=" text-lg  ml-3 font-mono ">{orderFood.catigory}</div>
          <div className=" ml-3 font-mono "> type : {orderFood.name}</div>
          <div className=" grid grid-cols-2 font-mono">
            <p className="ml-3">Price : {orderFood.price}$</p>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
