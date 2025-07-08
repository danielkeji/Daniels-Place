import image from "../images/image7.jpg";
import { Link } from "react-router";
import { services } from "../servicesPage";

const Services = () => {
  return (
    <>
      <header className="mt-[100px] md:mt-[50px]">
        <h2 className="text-center" id="services">
          Services
        </h2>
      </header>
      <main>
        <section className="px-8 mx-auto max-w-7xl mt-[70px]">
          <h3 className="text-center text-xl lg:text-[24px]">
            I offer a range of grooming services tailored to keep you looking
            sharp and feeling confident. Whether you need a fresh fade, a
            detailed line-up, or a full grooming session, and more, I’ve got you
            covered.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[100px] gap-x-[20px] justify-items-center mt-[100px] md:mt-[150px]">
            {services.map((service) => {
              return (
                <div key={service.id}>
                  <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-80 rounded-xl bg-clip-border">
                    <div className="relative h-40 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                      <img src={service.image} alt="" />
                    </div>
                    <div className="p-6">
                      <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {service.service}
                      </h5>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        Get a clean, stylish haircut tailored just for you.
                        Whether you want a classic fade, modern trim, or bold
                        new look, I’ve got the skills to match your style.
                      </p>
                    </div>
                    <div className="p-6 pt-0">
                      <Link to={"/booking"}>
                        <button
                          data-ripple-light="true"
                          type="button"
                          className="select-none rounded-lg bg-secondaryColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-primaryColor shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                          Book
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
