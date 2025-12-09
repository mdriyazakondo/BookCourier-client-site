import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../../shared/Loading/Loading";
import BookCard from "../../shared/BookCard/BookCard";
import Container from "../../shared/Container/Container";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllBooks = () => {
  const axiosSecure = useAxiosSecure();
  const [searBook, setSearchBook] = useState("");
  const [sortBook, setSortBook] = useState("");

  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books", searBook, sortBook],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/books?sort=${sortBook}&&search=${searBook}`
      );
      return res.data;
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  // if (isLoading) return <Loading />;

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
        <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4 ">
          {/* Search Input */}
          <div className="w-full md:w-1/2">
            <input
              type="text"
              value={searBook}
              onChange={(e) => setSearchBook(e.target.value)}
              placeholder="Search Book..."
              className="w-full py-3 pl-4 pr-4 border rounded-sm shadow-sm outline-none border-green-400"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full md:w-1/10">
            <select
              onChange={(e) => setSortBook(e.target.value)}
              value={sortBook}
              className="w-full appearance-none py-3 pl-4 pr-10 border rounded-sm  outline-none border-green-400 "
            >
              <option disabled selected>
                Sort By Price
              </option>
              <option value="normal">Normal</option>
              <option value="low-high">Low → High</option>
              <option value="high-low">High → Low</option>
            </select>
          </div>
        </div>
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
