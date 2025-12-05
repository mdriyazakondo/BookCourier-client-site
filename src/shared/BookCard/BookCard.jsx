import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router";

const BookCard = ({ latest }) => {
  const { bookTitle, authorName, genre, price, status, image } = latest;

  return (
    <div className=" bg-green-50 border border-green-200 rounded-xl shadow p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={bookTitle}
        className="w-full h-56 object-cover rounded-lg border border-green-300"
      />

      <h2 className="text-lg font-bold mt-3 text-green-700">{bookTitle}</h2>
      <p className="text-green-600 text-sm">by {authorName}</p>

      <p className="mt-2 text-sm text-green-700">
        <strong>Genre:</strong> {genre}
      </p>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-bold text-green-800">${price}</span>

        <span
          className={`px-3 py-1 text-sm rounded-lg ${
            status === "Available"
              ? "bg-green-600 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {status}
        </span>
      </div>

      <Link to={`/books/${latest._id}`}>
        <button className="py-2 w-full bg-green-500 text-white mt-4 rounded-sm cursor-pointer">
          Book Details
        </button>
      </Link>
    </div>
  );
};

export default BookCard;
