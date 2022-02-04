import React from "react";
import NavBar from "../Component/NavBar";

import ShowCard from "../Component/ShowCard";

export default function Home() {
  return (
    <>
      {/* bg-neutral-700 */}
      <NavBar/>
      <div className="w-screen  ">
        
        <div>
          <ShowCard />
        </div>
      </div>
    </>
  );
}
