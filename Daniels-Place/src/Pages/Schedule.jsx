import Form from "../Components/Form";
import image1 from "../images/paymentimage.jpg";
import { Link } from "react-router";
import image from "../images/businessLogo.svg";
import PaymentBtn from "../Components/PaymentBtn";
import MainPaymentBtn from "../Components/MainPaymentBtn";

const Schedule = () => {
  return (
    <div className="relative h-screen">
      <nav className="absolute top-0 left-0 z-10 flex items-center justify-between w-full px-6 py-4 mx-auto md:px-8">
        <img
          className="h-[60px] w-[60px] md:h-[75px] md:w-[75px] lg:h-[100px] lg:w-[100px]"
          src={image}
        />
        <div className="flex items-center justify-center gap-4 text-sm font-bold md:justify-evenly md:gap-8 md:text-base md:text-primaryColor">
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
          <PaymentBtn />
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
            <Form />
          </main>
          <div className="flex items-center justify-center mt-[50px] mb-[40px]">
            <MainPaymentBtn />
          </div>
        </section>
        <div className="hidden md:flex md:basis-1/2">
          <img src={image1} className="object-cover w-full h-screen" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
