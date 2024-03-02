import React from "react";
import { ConnectKitButton } from "connectkit";
import { NavLink } from "react-router-dom";
import icon from "../assets/pngegg.png";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-[5rem_0.8fr_2fr_1fr_10rem] text-xl	my-10">
      <div className="col-start-2 col-span-1">
        <NavLink
          to="/"
          className="flex flex-row  items-center gap-5 text-4xl font-bold	"
        >
          <img src={icon} className="w-20"></img>
          <h1>ElectroLite</h1>
        </NavLink>
      </div>
      <div className=" col-start-3 col-span-1 flex flex-col justify-center">
        <ul className="flex flex-row gap-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">DashBoard</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
      </div>
      <div className=" col-start-4 col-span-1 flex flex-col justify-center items-center pl-40">
        <ConnectKitButton />
      </div>
    </nav>
  );
}
