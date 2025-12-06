import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      axios
        .patch(
          `${
            import.meta.env.VITE_API_URL
          }/payment-success?session_id=${sessionId}`
        )
        .then((res) => {
          console.log(res.data);
        });
    }
  }, [sessionId]);
  return (
    <div>
      <h3>Book Order Payment Success: {sessionId}</h3>
    </div>
  );
};

export default PaymentSuccess;
