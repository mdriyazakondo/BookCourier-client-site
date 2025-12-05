import React from "react";
import { useForm } from "react-hook-form";
import {
  FaBook,
  FaUser,
  FaCalendarAlt,
  FaLanguage,
  FaDollarSign,
  FaFileAlt,
  FaImage,
  FaLayerGroup,
  FaSortNumericDown,
} from "react-icons/fa";
import { imageUpload } from "../../../utils";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const AddBook = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const handleBookAdd = async (data) => {
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
      bookCover,
    } = data;
    const imageFile = bookCover[0];

    try {
      const image = await imageUpload(imageFile);

      const bookData = {
        bookTitle,
        authorName,
        authorEmail: user.email,
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
      };
      await axios.post("http://localhost:3000/books", bookData);
      Swal.fire({
        title: `New Book added!`,
        text: "New Book Added successful",
        icon: "success",
        confirmButtonColor: "#22c55e",
      });
      reset();
    } catch (error) {}
  };
  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-600">
        Add a New Book
      </h1>
      <form
        onSubmit={handleSubmit(handleBookAdd)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Book Title */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaBook className="text-green-500" /> Book Title
          </label>
          <input
            type="text"
            {...register("bookTitle", { required: true })}
            placeholder="Enter book title"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Author Name */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaUser className="text-green-500" /> Author Name
          </label>
          <input
            {...register("authorName", { required: true })}
            type="text"
            defaultValue={user?.displayName}
            placeholder="Enter author name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* ISBN */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaFileAlt className="text-green-500" /> ISBN
          </label>
          <input
            {...register("isbn", { required: true })}
            type="text"
            placeholder="Enter ISBN number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Publisher */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaUser className="text-green-500" /> Publisher
          </label>
          <input
            {...register("publisher", { required: true })}
            type="text"
            placeholder="Enter publisher name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Published Year */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaCalendarAlt className="text-green-500" /> Published Year
          </label>
          <input
            {...register("publishedYear", { required: true })}
            type="number"
            placeholder="Enter published year"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Number of Pages */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaSortNumericDown className="text-green-500" /> Number of Pages
          </label>
          <input
            {...register("pageNumber", { required: true })}
            type="number"
            placeholder="Enter total pages"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Language */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLanguage className="text-green-500" /> Language
          </label>
          <input
            {...register("language", { required: true })}
            type="text"
            placeholder="Enter language"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Genre */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-green-500" /> Genre
          </label>
          <input
            {...register("genre", { required: true })}
            type="text"
            placeholder="Enter genre"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Price */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaDollarSign className="text-green-500" /> Price
          </label>
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Enter price"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Stock Quantity */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaSortNumericDown className="text-green-500" /> Stock Quantity
          </label>
          <input
            {...register("stockQuantity", { required: true })}
            type="number"
            placeholder="Enter stock quantity"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Edition */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaFileAlt className="text-green-500" /> Edition
          </label>
          <input
            {...register("edition", { required: true })}
            type="text"
            placeholder="Enter edition"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Format */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-green-500" /> Format
          </label>
          <input
            {...register("format", { required: true })}
            type="text"
            placeholder="Hardcover / Paperback / eBook"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-green-500" /> Category
          </label>
          <input
            {...register("category", { required: true })}
            type="text"
            placeholder="Enter category"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        {/* Status */}
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-green-500" /> Status
          </label>
          <select
            {...register("status", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            defaultValue=""
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="published">Published</option>
            <option value="unpublished">Unpublished</option>
          </select>
        </div>

        {/* Book Cover (full width) */}
        <div className="md:col-span-2">
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaImage className="text-green-500" /> Book Cover
          </label>
          <input
            {...register("bookCover", { required: true })}
            type="file"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Book Description (full width) */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-1">
            Book Description
          </label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Enter book description"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Submit Button (full width) */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
