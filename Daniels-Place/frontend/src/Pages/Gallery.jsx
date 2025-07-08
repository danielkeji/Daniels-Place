import BackHomeBtn from "../Components/GenericBtn";
import { images } from "../images";
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[50px]">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <p className="text-white text-lg font-semibold">
                    Image {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to={"/"}>
              <BackHomeBtn text={"Home"} style={"text-primaryColor"} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
