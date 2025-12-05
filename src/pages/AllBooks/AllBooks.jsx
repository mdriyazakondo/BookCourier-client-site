import { useQuery } from "@tanstack/react-query";
import Loading from "../../shared/Loading/Loading";
import BookCard from "../../shared/BookCard/BookCard";
import Container from "../../shared/Container/Container";
import axios from "axios";

const AllBooks = () => {
  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
      return res.data;
    },
  });
  if (isLoading) return <Loading />;

  return (
    <Container>
      <div>
        <h2 className="text-4xl font-bold text-green-500 text-center mb-4">All Books </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {books?.map((latest) => (
            <BookCard key={latest?._id} latest={latest} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AllBooks;
