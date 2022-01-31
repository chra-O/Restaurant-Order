import React from "react";
import NavBar from "../Component/NavBar";
import ShowCard from "../Component/ShowCard";

export default function Home() {
  return (
    <>
    {/* bg-neutral-700 */}
      <div className="w-full h-full  overflow-hidden">
        <NavBar />
        <div>
          <ShowCard />
        </div>
      </div>
    </>
  );
}
