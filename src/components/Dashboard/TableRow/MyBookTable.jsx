import React, { useState } from "react";
import BookModal from "../Modal/BookModal";
import { Link } from "react-router";

const MyBookTable = ({ book, handleDelete, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const { bookName, authorName, language, price, status, image, create_date } =
    book;

  return (
    <tr className="border-b border-gray-300">
      <td className="py-3  text-center bg-white flex items-center justify-center ">
        <img src={image} alt={bookName} className="w-16 h-10" />
      </td>

      <td className="px-5  text-center bg-white">{bookName}</td>
      <td className="px-5  text-center bg-white">{authorName}</td>
      <td className="px-5  text-center bg-white">
        {new Date(create_date).toDateString()}
      </td>
      <td className="px-5  text-center bg-white">${price}</td>
      <td className="px-5  text-center bg-white">{language}</td>

      {/* Status Button */}
      <td className="px-5  text-center bg-white">
        <span
          onClick={() => setIsOpen(true)}
          className="cursor-pointer inline-block px-3 py-1 font-semibold text-purple-900 relative"
        >
          <span className="absolute inset-0 bg-purple-200 opacity-50 rounded-full"></span>
          <span className="relative">{status}</span>
        </span>

        {/* FIX: pass bookId */}
        <BookModal
          refetch={refetch}
          isOpen={isOpen}
          closeModal={closeModal}
          bookId={book._id}
        />
      </td>

      <td className="px-5  text-center bg-white">
        <Link
          to={`/dashboard/update-book/${book._id}`}
          className="bg-purple-500 text-white py-1 px-4 rounded-sm"
        >
          Update Book
        </Link>

        <button
          onClick={() => handleDelete(book._id)}
          className="bg-red-500 text-white py-1 px-4 rounded-sm ml-2"
        >
          Delete Book
        </button>
      </td>
    </tr>
  );
};

export default MyBookTable;
