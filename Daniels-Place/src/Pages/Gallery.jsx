import BackHomeBtn from "../Components/BackHomeBtn";
import image from "../images/image7.jpg";
import { Link } from "react-router";

const Gallery = () => {
  return (
    <div className="bg-secondaryColor">
      <header className="pt-[25px] md:pt-[50px]">
        <h2 className="text-center text-primaryColor">Gallery</h2>
      </header>
      <main>
        <section className="px-8 mx-auto max-w-7xl mt-[70px] flex flex-col">
          <h3 className="text-center text-xl lg:text-[24px] text-primaryColor">
            Every cut tells a story—and here’s where you see the difference.
            From sharp fades to detailed beard work, this gallery features real
            styles created for real clients. Whether you’re looking for
            inspiration or checking out the quality of my work, take a scroll
            and see the craft in action. Your next look might just be one scroll
            away.
          </h3>
          <div className="flex flex-col md:flex-row gap-[100px] items-center justify-center mt-[100px] md:mt-[150px]">
            <div className="">
              <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                  <img src={image} alt="" />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Hair Cut
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Get a clean, stylish haircut tailored just for you. Whether
                    you want a classic fade, modern trim, or bold new look, I’ve
                    got the skills to match your style.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-secondary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-primary shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                  <img src={image} alt="" />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Hair Cut
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Get a clean, stylish haircut tailored just for you. Whether
                    you want a classic fade, modern trim, or bold new look, I’ve
                    got the skills to match your style.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-secondary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-primary shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
          <BackHomeBtn />
        </section>
      </main>
    </div>
  );
};

export default Gallery;
