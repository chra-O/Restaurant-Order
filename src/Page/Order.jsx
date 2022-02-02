import React, { useEffect } from "react";
import NavBar from "../Component/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { deleteorder } from "../Redux/slice";

export default function Order() {
  const orderFood = useSelector((state) => state.food.value);
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
      <NavBar />

      <div className="flex justify-center   ">
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
                    <div>Qualrty :</div>{" "}
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
                    <button className="mr-10 w-5 h-5 mt-2 ml-9">
                      <img src="https://cdn-icons-png.flaticon.com/128/25/25678.png"></img>
                    </button>
                    <button className="mr-2 w-5 h-5 mt-2">
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
