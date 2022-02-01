import React from "react";
import NavBar from "../Component/NavBar";
import { useSelector } from "react-redux";
export default function Order() {
  const orderFood = useSelector((state) => state.food.value);

  return (
    <>
      <NavBar />
      <div className="flex justify-center ">
        <div className=" grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4     ">
          {orderFood.map((product) => {
            return (
              <div
                className="bg-gray-50 w-72 h-72 m-10  grid grid-rows-2 rounded-3xl"
                key={product.id}
              >
                <div className="flex justify-center ">
                  <img
                    className=" w-24 h-24  mt-10  "
                    src={product.img}
                    alt=""
                  ></img>
                </div>

                <div className=" grid  grid-rows-3  ">
                  <div className=" text-lg  ml-3 font-mono ">
                    {product.catigory}
                  </div>
                  <div className=" ml-3 font-mono "> type : {product.name}</div>
                  <div className=" grid grid-cols-2 font-mono">
                    <p className="ml-3">Price : {product.price}$</p>
                    <div></div>
                  </div>
                </div>
              </div>
            );
          })}{" "}
        </div>
      </div>
    </>
  );
}
