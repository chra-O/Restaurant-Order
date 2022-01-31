import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="w-screen h-20 bg-amber-400 grid grid-cols-2 ">
        <div className=" mt-6 md:ml-40 ml-5 font-mono  font-bold ">
          <p className=" inline mr-8 text-lg sm:text-lg  md:text-2xl text-stone-700">
            {" "}
            Chra Restaurant
          </p>
          <p className="inline sm:text-xl text-sm hover:text-stone-700 text-stone-600 ease-in-out duration-100 cursor-pointer ">
            Home{" "}
          </p>
        </div>{" "}
        <div className="flex justify-end  mt-4 md:mr-48 mr-5">
          <img
            className="sm:w-12 w-10 h-10  sm:h-12  cursor-pointer ease-in-out duration-100"
            src="https://cdn-icons.flaticon.com/png/512/3765/premium/3765442.png?token=exp=1643630090~hmac=e6e75e1217e500ec6d0845d398405f55"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
}
