import React from "react";
import { useDispatch } from "react-redux";
import { addindex } from "../Redux/slice";
export default function Card(props) {
  const dispatch = useDispatch();

  const handleAdd = (event) => {
    dispatch(
      addindex({
        id: props.id,
        img: props.img,
        catigory: props.catigory,
        name: props.name,
        price: props.price,
        qualety :props.qualety
      })
    );
  };

  return (
    <>
      <div className="bg-gray-50 w-72 h-72 m-10  grid grid-rows-2 rounded-3xl">
        <div className="flex justify-center ">
          <img className=" w-24 h-24  mt-10  " src={props.img} alt=""></img>
        </div>

        <div className=" grid  grid-rows-4  ">
          <div className=" text-lg  ml-3 font-mono ">{props.catigory}</div>
          <div className=" ml-3 font-mono "> type : {props.name}</div>
          <div className=" grid grid-cols-2 font-mono">
            <p className="ml-3">Price : {props.price}$</p>
      
            
              <button
                className="bg-blue-200 p-2 px-3 rounded-full mr-2   text-slate-800  mt-2"
                onClick={handleAdd}
              >
                Order
              </button>
            
          </div>
        </div>
      </div>
    </>
  );
}
