import React from "react";

const MyBookTable = ({ book, handleDelete, handleUpdate }) => {
  const { bookTitle, authorName, language, price, status, image, create_date } =
    book;
  return (
    <tr>
      <td className="py-2  border text-center border-gray-200 bg-white text-sm text-nowrap flex items-center justify-center">
        <img src={image} alt={bookTitle} className="w-16 h-10" />
      </td>
      <td className="px-5  border text-center border-gray-200 bg-white text-sm text-nowrap">
        <p className="text-gray-900 ">{bookTitle}</p>
      </td>
      <td className="px-5  border text-center border-gray-200 bg-white text-sm text-nowrap">
        <p className="text-gray-900 ">{authorName}</p>
      </td>

      <td className="px-5  border text-center border-gray-200 bg-white text-sm text-nowrap">
        <p className="text-gray-900 ">{new Date(create_date).toDateString()}</p>
      </td>
      <td className="px-5  border text-center border-gray-200 bg-white text-sm text-nowrap">
        <p className="text-gray-900 ">{price}</p>
      </td>
      <td className="px-5  border text-center border-gray-200 bg-white text-sm text-nowrap">
        <p className="text-gray-900 ">{language}</p>
      </td>
      <td className="px-5 border text-center border-gray-200 bg-white text-sm">
        <select
          defaultValue={status}
          onClick={() => handleUpdate(book._id)}
          disabled={status === "published"}
          className={`border rounded px-2 py-1 text-sm outline-none ${
            status === "published" ? "text-green-600" : "text-red-600"
          }`}
        >
          <option value="published">Published</option>
          <option value="unpublished" disabled={status === "published"}>
            Unpublished
          </option>
        </select>
      </td>

      <td className="px-5  border text-center border-gray-200 bg-white text-sm text-nowrap ">
        <button className="bg-green-500 text-white py-1 px-4 rounded-sm cursor-pointer text-nowrap">
          Update Book
        </button>
        <button
          onClick={() => handleDelete(book._id)}
          className="bg-red-500 text-white py-1 px-4 rounded-sm cursor-pointer ml-2"
        >
          Delete Book
        </button>
      </td>
    </tr>
  );
};

export default MyBookTable;
