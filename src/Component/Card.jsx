import React, { useState } from "react";

export default function Card(props) {
  const [oredr, setorder] = useState();
  return (
    <>
      <div className="bg-gray-50 w-72 h-72 m-10  grid grid-rows-2 rounded-3xl">
        <div className="flex justify-center ">
          <img className=" w-24 h-24  mt-10  " src={props.img} alt=""></img>
        </div>

        <div className=" grid  grid-rows-3  ">
          <div className=" text-lg  ml-3 font-mono ">{props.catigory}</div>
          <div className=" ml-3 font-mono "> type : {props.type}</div>
          <div className=" grid grid-cols-2 font-mono">
            <p className="ml-3">Price : {props.price}$</p>
            <div>
              <button
                className="bg-blue-200 p-2 px-3 rounded-full ml-10  text-slate-800 "
                onClick={() => {
                  setorder(props.index);
                }}
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
