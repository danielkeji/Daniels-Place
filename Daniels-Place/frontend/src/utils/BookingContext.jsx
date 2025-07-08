import { createContext, useContext, useState, useEffect } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(() => {
    return JSON.parse(localStorage.getItem("selectedService")) || [];
  });

  useEffect(() => {
    localStorage.setItem("selectedService", JSON.stringify(selectedService));
  }, [selectedService]);

  return (
    <BookingContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
