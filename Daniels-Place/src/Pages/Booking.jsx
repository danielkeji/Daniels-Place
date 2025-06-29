import AmountBtn from "../Components/AmountBtn";
import GenericBtn from "../Components/GenericBtn";
import BackHomeButton from "../Components/BackHomeButton";
import BookingCard from "../Components/BookingCard";
import imageLight from "../images/businessLogo.svg";
import imageDark from "../images/businessLogoDark.svg";
import ThemeImage from "../Components/ThemeImage";
import { Link } from "react-router";

const Booking = () => {
  return (
    <main className="mx-auto max-w-7xl px-8 py-[50px] bg-primaryColor">
      <nav className="m-auto flex justify-between items-center">
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
            <Link to="/#contact">Contact Me</Link>
          </span>
          <Link to={"/schedule"}>
            <AmountBtn />
          </Link>
        </div>
      </nav>
      <section className="mt-[50px]">
        <h3>Pick Service</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          <BookingCard />
        </div>
      </section>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 mt-[50px]">
        <span>Haircut</span>
        <span>Haircut</span>
        <span>Haircut</span>
        <span>Haircut</span>
        <span>Haircut</span>
      </div>
      <div className="flex flex-row justify-center items-center gap-10">
        <Link to="/schedule">
          <GenericBtn text={"Next"} style={"text-secondaryColor"} />
        </Link>
        <div className="hidden md:flex">
          <Link to={"/"}>
            <GenericBtn text={"Cancel"} style={"text-secondaryColor"} />
          </Link>
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center">
        <Link to={"/"}>
          <BackHomeButton />
        </Link>
      </div>
    </main>
  );
};

export default Booking;
