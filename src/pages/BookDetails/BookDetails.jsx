import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../../shared/Loading/Loading";

const BookDetails = () => {
  const { id } = useParams();

  const { data: book = {}, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/books/${id}`
      );
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

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
    <div className="pt-20">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl border border-green-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side — Details */}
          <div className="flex justify-center items-center p-6 bg-white rounded-r-xl border-l border-green-100">
            <img
              src={image}
              alt={bookTitle}
              className="w-full max-h-[550px] object-contain rounded-lg"
            />
          </div>
          {/* Right Side — Large Image */}
          <div className="p-8 space-y-4 bg-green-50 rounded-l-xl">
            <h1 className="text-3xl font-bold text-green-700">{bookTitle}</h1>
            <p className="text-lg text-green-600 mb-2">by {authorName}</p>

            <div className="grid grid-cols-2 gap-3 text-green-800 text-sm">
              <p>
                <strong>Genre:</strong> {genre}
              </p>
              <p>
                <strong>Language:</strong> {language}
              </p>
              <p>
                <strong>Pages:</strong> {pageNumber}
              </p>
              <p>
                <strong>Edition:</strong> {edition}
              </p>
              <p>
                <strong>Format:</strong> {format}
              </p>
              <p>
                <strong>Category:</strong> {category}
              </p>
              <p>
                <strong>Publisher:</strong> {publisher}
              </p>
              <p>
                <strong>Year:</strong> {new Date(create_date).getFullYear()}
              </p>
              <p>
                <strong>ISBN:</strong> {isbn}
              </p>
              <p>
                <strong>Stock Quantity:</strong> {stockQuantity}
              </p>
            </div>

            <p className="text-green-700 mt-3">
              <strong>Description:</strong> {description}
            </p>

            <div className="flex items-center justify-between mt-6">
              <span className="text-3xl font-bold text-green-700">
                ${price}
              </span>

              <span
                className={`px-4 py-2 rounded-lg text-white text-sm font-semibold ${
                  status === "Available" ? "bg-green-600" : "bg-red-500"
                }`}
              >
                {status}
              </span>
            </div>

            <button className="w-full mt-5 cursor-pointer bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
