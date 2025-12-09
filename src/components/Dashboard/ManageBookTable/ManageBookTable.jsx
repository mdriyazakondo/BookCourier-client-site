import React, { useState } from "react";
import ManageBookModal from "../Modal/ManageBookTable";

const ManageBookTable = ({ book, refetch, handleDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { bookName, authorName, language, price, status, image, create_date } =
    book;

  return (
    <tr className="border-b border-gray-400">
      <td className="table-data border border-gray-300 flex items-center justify-center py-1">
        <img src={image} className="w-16 h-12 object-cover" />
      </td>

      <td className="table-data border border-gray-300 text-center">
        {bookName}
      </td>
      <td className="table-data border border-gray-300 text-center">
        {authorName}
      </td>
      <td className="table-data border border-gray-300 text-center">
        {new Date(create_date).toDateString()}
      </td>
      <td className="table-data border border-gray-300 text-center">
        ${price}
      </td>
      <td className="table-data border border-gray-300 text-center">
        {language}
      </td>

      <td className="table-data border border-gray-300 text-center">
        <span
          onClick={() => setIsOpen(true)}
          className="cursor-pointer px-3 py-1 bg-green-200 text-green-900 rounded-full"
        >
          {status}
        </span>

        <ManageBookModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          bookId={book._id}
          refetch={refetch}
        />
      </td>
    </tr>
  );
};

export default ManageBookTable;
