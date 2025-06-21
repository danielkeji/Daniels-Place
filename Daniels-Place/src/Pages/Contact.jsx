import image from "../images/contactImage.jpg";
import cloud from "../images/cloud.png";

const Contact = () => {
  return (
    <>
      <header className="mt-[100px]">
        <h2 className="text-center" id="contact">
          Contact
        </h2>
      </header>

      <section className="px-3 md:padding-x mt-[50px] mb-[50px]">
        <div className="flex flex-col-reverse md:flex-row gap-[50px] items-center justify-center">
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
              <h2 className="absolute text-[15px] md:text-[36px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Get in touch: I am here to attend to your request and Questions
              </h2>
              <img
                src={cloud}
                className="absolute bottom-0 left-[50%] h-[100px] w-[100px] md:h-[200px] md:w-[200px] z-10"
              />
            </div>
          </article>

          <div className="container px-4 mx-auto basis-1/2">
            <div className="mx-auto">
              <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Contact Us
                </h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-800 mb-1" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-800 mb-1" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-800 mb-1" htmlFor="message">
                      Your Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                      rows="4"
                      placeholder="Enter your message"
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
