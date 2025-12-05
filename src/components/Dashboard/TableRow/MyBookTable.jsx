import React from "react";

const MyBookTable = ({ book }) => {
  const {
    bookTitle,
    authorName,
    isbn,
    publisher,
    publishedYear,
    pageNumber,
    language,
    genre,
    price,
    stockQuantity,
    edition,
    format,
    category,
    status,
    description,
    image,
    create_date,
  } = book;
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
      <td className="px-5  border text-center border-gray-200 bg-white text-sm text-nowrap">
        <p
          className={`${
            status === "published" ? "text-green-600" : "text-red-600"
          } uppercase`}
        >
          {status}
        </p>
      </td>

      <td className="px-5  border text-center border-gray-200 bg-white text-sm text-nowrap ">
        <button className="bg-green-500 text-white py-1 px-4 rounded-sm cursor-pointer text-nowrap">
          Update Book
        </button>
        <button className="bg-red-500 text-white py-1 px-4 rounded-sm cursor-pointer text-nowrap ml-2">
          Delete Book
        </button>
      </td>
    </tr>
  );
};

export default MyBookTable;
