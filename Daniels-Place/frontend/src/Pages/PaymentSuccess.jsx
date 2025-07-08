// pages/PaymentSuccess.jsx
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");
  const navigate = useNavigate();

  useEffect(() => {
    if (reference) {
      fetch("https://daniels-place-api.onrender.com/api/bookings/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            alert("Booking confirmed! Check your email.");
            navigate("/"); // Redirect home
          } else {
            alert("Payment failed or booking not found.");
          }
        })
        .catch(() => alert("Something went wrong"));
    }
  }, [reference]);

  return <div>Verifying your payment...</div>;
};

export default PaymentSuccess;
