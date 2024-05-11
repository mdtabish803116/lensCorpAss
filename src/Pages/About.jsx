import React from "react";

const About = () => {
  return (
    <div className="mt-6 pb-4">
      <h1 className="text-center text-[40px] font-bold  ">About Us</h1>
      <div className="flex justify-center items-center  mt-2">
        <div className="bg-[#e2f2ff] flex flex-row justify-between p-20 w-[80%] rounded-xl">
          <div>
            <h1 className="text-black font-bold text-[40px] mb-6">
              Welcome To LENS
            </h1>
            <p className="text-gray-500 mb-10 text-lg ">
              We put our hearts, souls and sweat into designing
              <br /> and developing custom AI - powered solutions for <br />
              your business so you don't have to.
            </p>
            <button className="border border-black text-black bg-transparent p-4 rounded-md">
              Learn More
            </button>
          </div>
          <div className="object-contain border border-white ">
            <img
              className="w-[24rem] h-[24rem]  object-cover rounded-lg"
              src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
