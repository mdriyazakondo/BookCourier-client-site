import { useQuery } from "@tanstack/react-query";
import React from "react";
import Container from "../../../shared/Container/Container";
import axios from "axios";
import BookCard from "../../../shared/BookCard/BookCard";
import Loading from "../../../shared/Loading/Loading";

const Latest = () => {
  const {
    data: latests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["latest"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/latest`);
      return res.data;
    },
  });
  if (isLoading) return <Loading />;

  return (
    <Container>
      <div>
        <h2 className="text-4xl font-bold text-green-500 text-center mb-4">
          Latest And Populer Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {latests?.map((latest) => (
            <BookCard key={latest?._id} latest={latest} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Latest;
