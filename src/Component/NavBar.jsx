import React, {  useContext } from "react";
import { Link } from "react-router-dom";

import ThemeContext from "../Contex/ThemeContext";
export default function NavBar() {


  const {theme} = useContext(ThemeContext)
  return (
    <>
      <ThemeContext.Consumer>
        {(ctx) => (
     <div
     className={`${ "  h-20 bg-amber-200 grid grid-cols-2 "} ${
       theme === "dark"
         ? "  h-20 bg-amber-400 grid grid-cols-2"
         : null
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
            <button onClick={ctx.themeToggler}>
              {ctx.theme === "dark" ? (
                <img
                  className="sm:w-12 w-10 h-10  sm:h-12  cursor-pointer ml-4 "
                  src=" https://cdn-icons-png.flaticon.com/512/1827/1827880.png "
                  alt=""
                ></img>
              ) : (
                <img
                  className="sm:w-12 w-10 h-10  sm:h-12  cursor-pointer ml-4 "
                  src=" https://cdn-icons-png.flaticon.com/512/1827/1827881.png "
                  alt=""
                ></img>
              )}

              {}
            </button>
          </div>
        </div>
         )}
      </ThemeContext.Consumer>
    </>
  );
}
