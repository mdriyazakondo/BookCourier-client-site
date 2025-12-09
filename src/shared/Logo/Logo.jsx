import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-center ">
        <img
          src="https://ik.imagekit.io/2o23yla4n/bookName.png"
          alt="logo"
          className="w-14 h-14 rounded-full"
        />
        <h2 className="text-2xl font-bold text-purple-500">BookCourier</h2>
      </Link>
    </div>
  );
};

export default Logo;
