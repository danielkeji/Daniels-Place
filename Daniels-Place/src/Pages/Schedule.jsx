import Form from "../Components/Form";
import image1 from "../images/paymentimage.jpg";
import { Link } from "react-router";
import ThemeImage from "../Components/ThemeImage";
import imageLight from "../images/businessLogo.svg";
import imageDark from "../images/businessLogoDark.svg";
import PaymentBtn from "../Components/PaymentBtn";
import MainPaymentBtn from "../Components/MainPaymentBtn";
import { useBooking } from "../utils/BookingContext";
import { useState } from "react";

const Schedule = () => {
  const [bookingData, setBookingData] = useState(null);
  const { selectedService } = useBooking();
  const amount = selectedService.reduce((total, service) => {
    const price = parseFloat(service.price.replace(/₦/g, "").replace(/,/g, ""));
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  

  return (
    <div className="relative h-full">
      <nav className="absolute top-0 left-0 z-10 flex items-center justify-between w-full px-6 py-4 mx-auto md:px-8">
        <ThemeImage
          lightSrc={imageLight}
          darkSrc={imageDark}
          className="h-[60px] w-[60px] md:h-[75px] md:w-[75px] lg:h-[100px] lg:w-[100px]"
        />
        <div className="flex items-center justify-center gap-4 text-sm font-bold md:justify-evenly md:gap-8 md:text-base md:text-white">
          <span>
            <Link to="/" className="text-[14px]">
              Home
            </Link>
          </span>
          <span>
            <Link to="/#contact" className="text-[14px]">
              Contact Me
            </Link>
          </span>
          {bookingData && (
            <PaymentBtn email={bookingData.email} amount={amount} />
          )}
        </div>
      </nav>
      <div className="flex">
        <section className="px-3 mx-auto md:px-8 max-w-7xl md:basis-1/2">
          <header className="mt-[100px] md:mt-[50px]">
            <h2 className="text-center pt-[80px]" id="schedule">
              Schedule Your Appointment
            </h2>
          </header>
          <main className="flex items-center justify-center mt-[70px]">
            <Form onBookingSaved={setBookingData} />
          </main>
          <div className="flex items-center justify-center mt-[50px] mb-[40px]">
            {bookingData && (
              <MainPaymentBtn email={bookingData.email} amount={amount} />
            )}
          </div>
        </section>
        <div className="hidden md:flex md:basis-1/2">
          <img src={image1} className="object-cover w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
