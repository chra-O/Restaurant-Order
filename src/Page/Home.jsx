import React from "react";
import NavBar from "../Component/NavBar";

import ShowCard from "../Component/ShowCard";

export default function Home() {
  return (
    <>
      {/* bg-neutral-700 */}
      <NavBar/>
      <div className="w-full h-full  overflow-hidden">
        
        <div>
          <ShowCard />
        </div>
      </div>
    </>
  );
}
