import React from "react";
import OrderModal from "../Modal/OrderModal";
import { useState } from "react";

const OrderTable = ({ orderPayment, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const {
    image,
    name,
    authorEmail,
    authorName,
    price,
    customerName,
    customerEmail,
    status,
    paymentStatus,
    order_date,
  } = orderPayment;
  return (
    <tr className="bg-purple-50 border-b border-gray-300">
      <td className="px-5  text-center  flex items-center justify-center py-3">
        <img src={image} alt="" className="w-14 h-12 bg-purple-600" />
      </td>
      <td className="px-5  text-center ">{name}</td>
      <td className="px-5  text-center ">{authorName}</td>
      <td className="px-5  text-center ">
        {new Date(order_date).toDateString()}
      </td>
      <td className="px-5  text-center ">${price}</td>
      <td className="px-5  text-center ">{paymentStatus}</td>

      {/* Status Button */}
      <td className="px-5  text-center ">
        <span
          onClick={() => setIsOpen(true)}
          className="cursor-pointer inline-block px-3 py-1 font-semibold text-purple-900 relative"
        >
          <span className="absolute inset-0 bg-purple-200 opacity-50 rounded-full"></span>
          <span className="relative">{status}</span>
        </span>

        {/* FIX: pass bookId */}
        <OrderModal
          refetch={refetch}
          orderPayment={orderPayment}
          isOpen={isOpen}
          closeModal={closeModal}
          bookId={orderPayment._id}
        />
      </td>
    </tr>
  );
};

export default OrderTable;
