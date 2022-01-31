import React from "react";
import NavBar from "../Component/NavBar";
import { useSelector } from "react-redux";
export default function Order() { 
    const showName = useSelector((state) => state.order.value);
console.log(showName)
  return (
    <>
     
      <NavBar />
     
      <div>order</div>
    </>
  );
}
