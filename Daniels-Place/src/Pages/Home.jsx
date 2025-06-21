import image1 from "../images/image1.jpg";

const Home = () => {
  return (
    <>
      <article
        className="mx-auto max-w-7xl px-8 py-[50px] flex flex-col md:flex md:flex-row md:justify-center md:justify-items-center md:gap-[50px] items-center justify-between"
        id="home"
      >
        <div className="flex flex-col flex-nowrap gap-2 items-center justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-[48px]">"Because you deserve more than just a haircut"</h1>
          <p className="">
            Book your next cut online and skip the wait—because great style
            shouldn’t be hard to get.
          </p>
        </div>
        <img
          className="hidden md:block drop-shadow-md w-fit h-[600px]  rounded-md"
          src={image1}
        />
      </article>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,256L40,229.3C80,203,160,149,240,160C320,171,400,245,480,250.7C560,256,640,192,720,160C800,128,880,128,960,112C1040,96,1120,64,1200,96C1280,128,1360,224,1400,272L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,224L40,218.7C80,213,160,203,240,186.7C320,171,400,149,480,122.7C560,96,640,64,720,96C800,128,880,224,960,218.7C1040,213,1120,107,1200,69.3C1280,32,1360,64,1400,80L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Home;
