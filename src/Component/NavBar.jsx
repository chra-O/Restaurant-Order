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
    {localStorage.setItem("theme", ctx.theme)}

     
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
                src="http://localhost:3000/image/order.png"
                alt=""
              ></img>
            </Link>
            <button onClick={ctx.themeToggler}>
              {ctx.theme === "dark" ? (
                <img
                  className="sm:w-12 w-10 h-10  sm:h-12  cursor-pointer ml-4 "
                  src="http://localhost:3000/image/light.png"
                  alt=""
                ></img>
              ) : (
                <img
                  className="sm:w-12 w-10 h-10  sm:h-12  cursor-pointer ml-4 "
                  src="http://localhost:3000/image/dark.png"
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
