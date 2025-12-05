import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-center ">
        <img
          src="https://ik.imagekit.io/2o23yla4n/depositphotos_208897764-stock-photo-library-icon.jpg"
          alt="logo"
          className="w-14 h-14"
        />
        <h2 className="text-2xl font-bold text-green-500">BookCourier</h2>
      </Link>
    </div>
  );
};

export default Logo;
