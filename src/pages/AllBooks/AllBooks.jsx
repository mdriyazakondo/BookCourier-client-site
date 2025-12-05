import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../../shared/Loading/Loading";
import BookCard from "../../shared/BookCard/BookCard";
import Container from "../../shared/Container/Container";
import axios from "axios";

const AllBooks = () => {
  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
      return res.data;
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  if (isLoading) return <Loading />;

  // Pagination Logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / booksPerPage);

  return (
    <Container>
      <div>
        <h2 className="text-4xl font-bold text-green-500 text-center mb-4">
          All Books
        </h2>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentBooks.map((latest) => (
            <BookCard key={latest?._id} latest={latest} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 bg-green-600 text-white rounded disabled:bg-gray-400"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 bg-green-600 text-white rounded disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </Container>
  );
};

export default AllBooks;
