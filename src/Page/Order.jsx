import React, { useEffect ,useContext } from "react";

import { useSelector, useDispatch } from "react-redux";
import { deleteorder, inc, dec } from "../Redux/slice";
import ThemeContext from "../Contex/ThemeContext"
import NavBar from "../Component/NavBar";

export default function Order() {
  const {theme} = useContext(ThemeContext)
  const orderFood = useSelector((state) => state.food.value);

  const dispatch = useDispatch();
  const totalPric = [];
  let tottal = 0;
  let x;
  totalPric.push(tottal);
  orderFood.map((product) => {
    x = product.price * product.qualety;
    totalPric.push(x);
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
      <NavBar />
      <div className={`${" flex justify-center    h-screen "} ${theme==='dark'?" flex justify-center      h-screen bg-stone-300":null}`}
       
      
        >
        <div className=" grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4   ">
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
                    <div>quantity: {product.qualety}</div>{" "}
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
                      <img
                        src="http://localhost:3000/image/up.png"
                        alt=""
                      ></img>
                    </button>
                    <button
                      className="mr-2 w-5 h-5 mt-2"
                      onClick={() => dispatch(dec(product.name))}
                    >
                      <img
                        src="http://localhost:3000/image/down.png"
                        alt="
                      "
                      ></img>
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
