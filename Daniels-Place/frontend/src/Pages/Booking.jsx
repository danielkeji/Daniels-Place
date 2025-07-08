import AmountBtn from "../Components/AmountBtn.jsx";
import GenericBtn from "../Components/GenericBtn.jsx";
import BackHomeButton from "../Components/BackHomeButton.jsx";
import BookingCard from "../Components/BookingCard.jsx";
import imageLight from "../images/businessLogo.svg";
import imageDark from "../images/businessLogoDark.svg";
import ThemeImage from "../Components/ThemeImage.jsx";
import { Link } from "react-router";
import { services } from "../bookingservices.js";
import { useState } from "react";
import { useBooking } from "../utils/BookingContext.jsx";

const Booking = () => {
  const { selectedService, setSelectedService } = useBooking();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const clearAllSelections = () => {
    setShowConfirmModal(true);
  };

  const handlePickService = (service, isPicked) => {
    if (isPicked) {
      setSelectedService([...selectedService, service]);
    } else {
      setSelectedService(selectedService.filter((s) => s.id !== service.id));
    }
  };

  // Get initial picked states for service cards
  const getInitialPickedState = (serviceId) => {
    return selectedService.some((service) => service.id === serviceId);
  };

  const totalPrice = selectedService.reduce((total, service) => {
    const price = parseFloat(service.price.replace(/₦/g, "").replace(/,/g, ""));
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <main className="mx-auto max-w-7xl px-8 py-[50px] bg-primaryColor">
      <nav className="flex items-center justify-between m-auto">
        <ThemeImage
          lightSrc={imageLight}
          darkSrc={imageDark}
          className="h-[60px] w-[60px] md:h-[75px] md:w-[75px] lg:h-[100px] lg:w-[100px]"
        />
        <div className="flex justify-evenly items-center gap-[60px] md:gap-[30px] font-bold">
          <span className="hidden md:flex">
            <Link to="/">Home</Link>
          </span>
          <span className="hidden md:flex">
            <Link to={"/#contact"}>Contact Me</Link>
          </span>
          <Link to={"/schedule"}>
            <AmountBtn price={totalPrice} />
          </Link>
        </div>
      </nav>
      <section className="mt-[50px]">
        <h3>Pick Service</h3>
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <BookingCard
              key={service.id}
              service={service}
              isInitiallyPicked={getInitialPickedState(service.id)}
              onPickService={handlePickService}
            />
          ))}
        </div>
      </section>
      <div>
        <h2 className="mt-4 text-center">Selected Service</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 mt-[50px]">
          {selectedService.length > 0 ? (
            selectedService.map((service) => (
              <div
                key={service.id}
                className="p-4 rounded-lg shadow-md bg-secondaryColor w-[190px]"
              >
                <h4 className="text-lg font-semibold text-center text-primaryColor">
                  {service.service}
                </h4>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No services selected</p>
          )}
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={() => clearAllSelections()}
            className="px-3 py-1 text-sm text-red-600 hover:text-red-800"
          >
            Clear All
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-10">
        <Link to="/schedule">
          <GenericBtn text={"Next"} style={"text-secondaryColor"} />
        </Link>
        <div className="hidden md:flex">
          <Link to={"/"}>
            <GenericBtn text={"Cancel"} style={"text-secondaryColor"} />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <Link to={"/"}>
          <BackHomeButton />
        </Link>
      </div>
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-50 bg-primaryColor/50 backdrop-blur-md">
          <div className="w-full max-w-md p-6 rounded-lg bg-primaryColor">
            <h3 className="mb-4 text-lg font-medium">Clear all services?</h3>
            <p className="mb-6">
              This will remove all selected services from your list.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 border rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedService([]);
                  setShowConfirmModal(false);
                }}
                className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Booking;
