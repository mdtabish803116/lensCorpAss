import React from "react";
import home_bg from "../assets/home_bg.webp";

const Home = () => {
  return (
    <div className="flex justify-between w-full items-center flex-row bg-[url('./src/assets/home_bg.webp')] bg-no-repeat bg-cover p-52">
      <div className="flex flex-col">
        <h1 className="text-[40px] text-black font-semibold mb-4">
          We are at the <br /> forefront of AI{" "}
        </h1>
        <p className="text-[18px] text-black mb-4">
          From Conserving Wildlife to Automatically <br />
          Generating Caricatures– We Do It All
        </p>
        <button className="bg-black text-white rounded-xl p-2 w-40 text-lg">
          Learn More
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
