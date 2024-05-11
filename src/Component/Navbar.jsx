import React, { useState } from "react";
import logo from "../assets/nav_logo.webp"
import sun from "../assets/sun.png";
import moon from "../assets/Moon.png";

const Navbar = () => {
 let theme = "light"

  return (
    <div className="p-6  text-black font-bold ">
      <nav className="flex flex-row justify-around sticky items-center w-full  bg-slate-50 p-4 -mt-6">
        <div>
          <img src={logo} className="pr-2" width={80} />
        </div>
        <div className="flex">
          <ul className="flex flex-row gap-8 p-2">
            <li>MakeMyWeb</li>
            <li>Home</li>
            <li>Company</li>
            <li>Blogs</li>
          </ul>
          <ul>
            <li className="mt-2">
              <button onClick={() => toggleTheme(theme)}>
                {" "}
                <img
                  src={theme === "light" ? moon : sun}
                  className="ml-5 w-6 "
                />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
