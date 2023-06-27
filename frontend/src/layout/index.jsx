import React from "react";
import "../App.css";

function Index({ children, min, seconds }) {
  return (
    <main className="main-container flex flex-col  w-[100%] h-[100%] items-center">
      <header className="header-container flex justify-center items-center font-mono font-bold italic text-4xl w-[100%] h-[72px] bg-black text-white mb-[60px]">
        {min.toString().padStart(2, "0")} :{" "}
        {seconds.toString().padStart(2, "0")}
      </header>
      {children}
    </main>
  );
}

export default Index;
