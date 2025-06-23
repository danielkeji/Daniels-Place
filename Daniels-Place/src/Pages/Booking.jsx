import AmountBtn from "../Components/AmountBtn";
import BookingCard from "../Components/BookingCard";
import image from "../images/businessLogo.svg";
import { Link } from "react-router";

const Booking = () => {
  return (
    <main className="mx-auto max-w-7xl px-8 py-[50px] bg-primaryColor">
      <nav className="m-auto flex justify-between items-center">
        <img
          className="h-[60px] w-[60px] md:h-[75px] md:w-[75px] lg:h-[100px] lg:w-[100px]"
          src={image}
        />
        <div className="flex justify-evenly items-center gap-[60px] md:gap-[30px] font-bold">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/#contact">Contact Me</Link>
          </span>
          <AmountBtn />
        </div>
      </nav>
      <section className="mt-[50px]">
        <h3>Book Appointment</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          <BookingCard />
          <BookingCard />
          <BookingCard />
          <BookingCard />
        </div>
      </section>
    </main>
  );
};

export default Booking;
