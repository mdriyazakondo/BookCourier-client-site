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
    <tr>
      <td className="px-5 border text-center bg-white flex items-center justify-center">
        <img src={image} alt="" className="w-14 h-12 bg-green-600" />
      </td>
      <td className="px-5 border text-center bg-white">{name}</td>
      <td className="px-5 border text-center bg-white">{authorName}</td>
      <td className="px-5 border text-center bg-white">
        {new Date(order_date).toDateString()}
      </td>
      <td className="px-5 border text-center bg-white">${price}</td>
      <td className="px-5 border text-center bg-white">{paymentStatus}</td>

      {/* Status Button */}
      <td className="px-5 border text-center bg-white">
        <span
          onClick={() => setIsOpen(true)}
          className="cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 relative"
        >
          <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
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
