import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { deleteorder, inc, dec, toggle } from "../Redux/slice";
import { Link } from "react-router-dom";

export default function Order() {
  const orderFood = useSelector((state) => state.food.value);

  const isDark = useSelector((state) => state.food.theme);

  const dispatch = useDispatch();
  const totalPric = [];
  let tottal = 0;
  orderFood.map((product) => {
    totalPric.push(product.price);
  });
  totalPric.map((product) => {
    tottal += product;
  });
  useEffect(() => {
    fetch("https://test-44c0b-default-rtdb.firebaseio.com/order.json", {
      method: "PUT",
      body: JSON.stringify(orderFood),
    }).catch((e) => console.log(e));
  });

  return (
    <>
      <div
        className={` ${
          isDark
            ? " w-screen h-20 bg-amber-200 grid grid-cols-2"
            : " w-screen h-20 bg-amber-400 grid grid-cols-2"
        }`}
      >
        <div className=" mt-6 md:ml-40 ml-5 font-mono  font-bold ">
          <p className=" inline mr-8 text-lg sm:text-lg  md:text-2xl text-stone-700">
            {" "}
            Chra Restaurant
          </p>
          <p className="inline sm:text-xl text-sm hover:text-stone-700 text-stone-600 ease-in-out duration-100 cursor-pointer ">
            <Link to="/">Home</Link>{" "}
          </p>
        </div>{" "}
        <div className="flex justify-end  mt-4 md:mr-48 mr-5">
          <Link to="/Order">
            <img
              className="sm:w-12 w-10 h-10  sm:h-12  cursor-pointer mt-2"
              src="https://cdn-icons.flaticon.com/png/512/3765/premium/3765442.png?token=exp=1643630090~hmac=e6e75e1217e500ec6d0845d398405f55"
              alt=""
            ></img>
          </Link>
          <button
            onClick={() => {
              dispatch(toggle());
            }}
          >
            {isDark ? (
              <img
                className="sm:w-12 w-10 h-10  sm:h-12  cursor-pointer ml-4 "
                src=" https://cdn-icons-png.flaticon.com/512/1827/1827880.png "
                alt=""
              ></img>
            ) : (
              <img
                className="sm:w-12 w-10 h-10  sm:h-12  cursor-pointer ml-4 "
                src=" https://cdn-icons-png.flaticon.com/512/1827/1827881.png"
                alt=""
              ></img>
            )}
          </button>
        </div>
      </div>

      <div
        className=" "
        className={` ${
          isDark
            ? " flex justify-center   h-screen"
            : " flex justify-center   h-screen bg-stone-300"
        }`}
      >
        <div className=" grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4     ">
          <div className="mt-40 font-bold text-2xl w-64 h-32 bg-gray-50  rounded-3xl">
            <p className="mt-12 ml-5">Total price : {tottal}$ </p>
          </div>
          {orderFood.map((product, index) => {
            return (
              <div
                className="bg-gray-50 w-72 h-80 m-6  grid grid-rows-2 rounded-3xl"
                key={index}
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
                  <div className=" grid grid-cols-2 font-mono text-sm ">
                    <p className="ml-3">Price : {product.price}$</p>
                    <div>Qualrty : {product.qualety}</div>{" "}
                  </div>
                  <div className="ml-7 mb-4">
                    {" "}
                    <button
                      className="bg-rose-400 text-gray-50 rounded-full p-2"
                      onClick={() => dispatch(deleteorder(index))}
                    >
                      {" "}
                      Delete
                    </button>{" "}
                    <button
                      className="mr-10 w-5 h-5 mt-2 ml-9"
                      onClick={() => dispatch(inc(product.name))}
                    >
                      <img src="https://cdn-icons-png.flaticon.com/128/25/25678.png"></img>
                    </button>
                    <button
                      className="mr-2 w-5 h-5 mt-2"
                      onClick={() => dispatch(dec(product.name))}
                    >
                      <img src="https://cdn-icons.flaticon.com/png/128/4655/premium/4655094.png?token=exp=1643741038~hmac=1a92c750766df0f1e4c3ac21436e5320"></img>
                    </button>
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
