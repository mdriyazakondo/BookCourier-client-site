import React from "react";

const InvoicesTable = ({ order }) => {
  const {
    bookName,
    customer_email,
    transationId,
    customer_name,
    customerEmail,
    price,
    status,
    paymentStatus,
    payment_date,
    quantity,
    image,
    description,
  } = order;
  return (
    <tr className="bg-white border-b border-gray-400 text-gray-700">
      <td className="py-2 px-4  border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {bookName}
      </td>

      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {customer_name}
      </td>

      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {customer_email}
      </td>

      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {transationId}
      </td>

      <td
        className={`py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap `}
      >
        <span
          className={`${
            status === "pending"
              ? "text-red-500 bg-red-100 "
              : "text-purple-500 bg-purple-100  "
          } py-1 px-3 rounded-full`}
        >
          {" "}
          {status}
        </span>
      </td>

      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        ${price}
      </td>

      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {new Date(payment_date).toDateString()}
      </td>
    </tr>
  );
};

export default InvoicesTable;
