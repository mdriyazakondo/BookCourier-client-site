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
        <p className="text-gray-900 ">{publishedYear}</p>
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

      <td className="px-5  border text-center border-gray-200 bg-white text-sm text-nowrap">
        <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative text-nowrap">Update Book</span>
        </span>
        {/* Modal */}
      </td>
    </tr>
  );
};

export default MyBookTable;
