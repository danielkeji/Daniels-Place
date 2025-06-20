import image4 from "../images/image4.png";
import image2 from "../images/image2.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";

const About = () => {
  return (
    <>
      <header className="mt-[4px]">
        <h2 className="text-center" id="about">About</h2>
      </header>
      <section className="mt-[100px] padding-x">
        <article>
          <div className="flex flex-row gap-[20px] mb-[50px]">
            <h3 className="basis-1/2 pt-10">
              With over 4 years of professional barbing experience, I’ve
              dedicated myself to more than just giving haircuts—I craft
              confidences.
            </h3>
            <div className="basis-1/2">
              <div className="w-[190px] h-[254px] flex-none bg-gradient-to-br from-[#00ff75] to-[#3700ff] rounded-[20px] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)]">
                <div className="w-[190px] h-[254px] bg-[#1a1a1a] rounded-[20px] transition-all duration-200 hover:scale-[0.98]">
                  <img
                    src={image2}
                    className="w-[190px] h-[254px] rounded-[20px] object-cover"
                    alt="barbing photo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[20px] mb-[100px]">
            <img src={image4} className="basis-1/2" alt="barbing photo" />
            <p className="basis-1/2 pt-15">
              What started as a passion has grown into a personalised grooming
              experience for every client who walks through my door. I
              specialise in clean fades, sharp line-ups, and stylish cuts
              tailored to each individual’s look and lifestyle. From classic
              styles to modern trends, I stay on top of the game with constant
              practice and attention to detail. My goal is simple: make sure
              every client leaves looking sharp and feeling great.
            </p>
          </div>
        </article>
      </section>

      <section className="padding-x">
        <div className="flex flex-row gap-[20px] mb-[50px]">
          <div className="basis-1/3">
            <p className="font-bold text-[24px]">
              Whether you’re booking a quick refresh or a complete
              transformation, you can expect: <br />
            </p>
            <ul className="list-disc pl-10">
              <li>Precision and consistency in every cut</li>
              <li>Clean tools and a professional setup</li>
              <li>A smooth, welcoming atmosphere</li>
              <li>Easy online booking to fit your schedule</li>
            </ul>
          </div>
          <img src={image6} className="" alt="" />
        </div>
        <div className="grid grid-cols-3 gap-[20px] mb-[100px]">
          <img src={image6} alt="" />
          <img src={image6} alt="" />
          <img src={image6} alt="" />
        </div>
      </section>
    </>
  );
};

export default About;
