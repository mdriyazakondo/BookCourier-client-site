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
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const UpdateBook = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const { data: updateBooks = {} } = useQuery({
    queryKey: ["updateBooks", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/update-book/${id}`);
      return res.data;
    },
  });

  //  {
  //     _id: '693a91876f033d81255935e5',
  //     bookName: 'English for Academic Skills',
  //     authorName: 'MD RIYAZ AKONDO',
  //     authorEmail: 'mdriyazakondo2004@gmail.com',
  //     isbn: '978-12345678904',
  //     publisher: 'Pearson Bangladesh',
  //     publishedYear: '2022',
  //     pageNumber: '34',
  //     language: 'English',
  //     genre: 'Education',
  //     price: '666',
  //     stockQuantity: '23',
  //     edition: '2nd',
  //     format: 'Paperback',
  //     category: 'Education',
  //     status: 'published',
  //     description:
  //       'Teaches academic writing, reading and communication. Includes practice tasks for university students. Improves overall English proficiency.',
  //     image: 'https://i.ibb.co/ZpBfqWQn/9780521165266.jpg',
  //     create_date: '2025-12-11T09:40:23.018Z'
  //   }

  const handleBookAdd = async (data) => {
    const {
      bookName,
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
        bookName,
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
      await axiosSecure.put(`/books/${id}`, bookData);
      Swal.fire({
        title: `Update book ${bookName}!`,
        text: "Update book  successful",
        icon: "success",
        confirmButtonColor: "#22c55e",
      });
      reset();
    } catch (error) {}
  };
  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-600 ">
        Add a New Book
      </h1>
      <form
        onSubmit={handleSubmit(handleBookAdd)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaBook className="text-purple-500" /> Book Name
          </label>
          <input
            type="text"
            defaultValue={updateBooks.bookName}
            {...register("bookName", { required: true })}
            placeholder="Enter book Name"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaFileAlt className="text-purple-500" /> ISBN
          </label>
          <input
            {...register("isbn", { required: true })}
            type="text"
            defaultValue={updateBooks.isbn}
            placeholder="Enter ISBN number"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaUser className="text-purple-500" /> Publisher
          </label>
          <input
            defaultValue={updateBooks.publisher}
            {...register("publisher", { required: true })}
            type="text"
            placeholder="Enter publisher name"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaCalendarAlt className="text-purple-500" /> Published Year
          </label>
          <input
            defaultValue={updateBooks.publishedYear}
            {...register("publishedYear", { required: true })}
            type="number"
            placeholder="Enter published year"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaSortNumericDown className="text-purple-500" /> Number of Pages
          </label>
          <input
            defaultValue={updateBooks.pageNumber}
            {...register("pageNumber", { required: true })}
            type="number"
            placeholder="Enter total pages"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLanguage className="text-purple-500" /> Language
          </label>
          <input
            defaultValue={updateBooks.language}
            {...register("language", { required: true })}
            type="text"
            placeholder="Enter language"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-purple-500" /> Genre
          </label>
          <input
            defaultValue={updateBooks.genre}
            {...register("genre", { required: true })}
            type="text"
            placeholder="Enter genre"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaDollarSign className="text-purple-500" /> Price
          </label>
          <input
            defaultValue={updateBooks.price}
            {...register("price", { required: true })}
            type="number"
            placeholder="Enter price"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaSortNumericDown className="text-purple-500" /> Stock Quantity
          </label>
          <input
            defaultValue={updateBooks.stockQuantity}
            {...register("stockQuantity", { required: true })}
            type="number"
            placeholder="Enter stock quantity"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaFileAlt className="text-purple-500" /> Edition
          </label>
          <input
            defaultValue={updateBooks?.edition}
            {...register("edition", { required: true })}
            type="text"
            placeholder="Enter edition"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-purple-500" /> Format
          </label>
          <input
            defaultValue={updateBooks.format}
            {...register("format", { required: true })}
            type="text"
            placeholder="Hardcover / Paperback / eBook"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-purple-500" /> Category
          </label>
          <input
            defaultValue={updateBooks.category}
            {...register("category", { required: true })}
            type="text"
            placeholder="Enter category"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-purple-500" /> Status
          </label>
          <select
            {...register("status", { required: true })}
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            defaultValue={updateBooks?.status}
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
            <FaImage className="text-purple-500" /> Book Cover
          </label>
          <input
            {...register("bookCover", { required: true })}
            type="file"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Book Description (full width) */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-1">
            Book Description
          </label>
          <textarea
            defaultValue={updateBooks?.description}
            {...register("description", { required: true })}
            placeholder="Enter book description"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Submit Button (full width) */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
          >
            Update Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
