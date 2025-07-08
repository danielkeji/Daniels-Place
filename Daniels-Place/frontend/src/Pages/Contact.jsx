import image from "../images/contactImage.jpg";
import cloud from "../images/cloud.png";
import MapContainer from "../Components/MapContainer";

const Contact = () => {
  return (
    <>
      <header className="mt-[100px]">
        <h2 className="text-center" id="contact">
          Contact
        </h2>
      </header>

      <section className="px-8 mx-auto max-w-7xl mt-[50px] mb-[50px]">
        <div className="flex flex-col-reverse md:flex-row gap-[50px] items-center justify-between">
          {/* image */}
          <article className="basis-1/2">
            <div className="relative">
              <img
                src={cloud}
                className="absolute top-0 h-[100px] w-[100px] md:h-[200px] md:w-[200px] z-10"
                alt="cloud"
              />
              <img
                src={image}
                className="h-[250px] w-[250px] md:h-[500px] md:w-[500px] blur-sm rounded-4xl "
                alt=""
              />
              <h2 className="absolute text-black text-[15px] md:text-[36px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Get in touch: I am here to attend to your request and Questions
              </h2>
              <img
                src={cloud}
                className="absolute bottom-0 left-[50%] h-[100px] w-[100px] md:h-[200px] md:w-[200px] z-10"
              />
            </div>
          </article>
          {/* form */}
          <div className="container px-4 mx-auto basis-1/2">
            <div className="mx-auto">
              <div className="max-w-md px-8 py-6 mx-auto bg-gray-100 rounded-lg shadow-lg">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  Contact Us
                </h2>
                <form>
                  <div className="mb-4">
                    <label className="block mb-1 text-gray-800" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      className="w-full px-4 py-2 transition duration-300 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-gray-800" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      className="w-full px-4 py-2 transition duration-300 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-1 text-gray-800"
                      htmlFor="message"
                    >
                      Your Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 transition duration-300 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      rows="4"
                      placeholder="Enter your message"
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                  <button
                    className="w-full px-4 py-2 text-gray-800 transition duration-300 bg-yellow-300 rounded-lg hover:bg-yellow-400"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*social media*/}
        <ul className="flex justify-center pt-10 space-x-4 list-none">
          <li className="relative group cursor-pointer w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:bg-[#25D366]">
            <span className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:-top-11 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] text-white text-sm bg-[#25D366] px-2 py-1 rounded-md shadow-md after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-[#25D366] after:rotate-45">
              WhatsApp
            </span>
            <i className="text-lg text-black fab fa-whatsapp group-hover:text-white"></i>
          </li>

          <li className="relative group cursor-pointer w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:bg-black">
            <span className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:-top-11 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] text-white text-sm bg-black px-2 py-1 rounded-md shadow-md after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-black after:rotate-45">
              TikTok
            </span>
            <i className="text-lg text-black fab fa-tiktok group-hover:text-white"></i>
          </li>

          <li className="relative group cursor-pointer w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:bg-[#e4405f]">
            <span className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:-top-11 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] text-white text-sm bg-[#e4405f] px-2 py-1 rounded-md shadow-md after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-[#e4405f] after:rotate-45">
              Instagram
            </span>
            <i className="text-lg text-black fab fa-instagram group-hover:text-white"></i>
          </li>
        </ul>
        <div className="mt-[50px] rounded-lg shadow-lg p-6 bg-primaryColor text-secondaryColor">
          <h3>Location</h3>
          <MapContainer />
        </div>
      </section>
    </>
  );
};

export default Contact;
