import image from "../images/businessLogo.svg";
import { links } from "../navlinks";

const Footer = () => {
  return (
    <footer className="w-full bg-primaryColor/60 backdrop-blur-md border-t-[1px] border-t-secondaryColor/20 backdrop-saturate-150">
      <nav className="relative nav-padding-x py-6 m-auto flex justify-between items-center ">
        <img
          className="h-[60px] w-[60px] md:h-[75px] md:w-[75px] lg:h-[100px] lg:w-[100px]"
          src={image}
        />
        <ul className="hidden md:flex justify-evenly gap-[60px] md:gap-[30px] font-bold">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href}>{link.text}</a>
              </li>
            );
          })}
        </ul>

        <ul className="absolute right-6 bottom-12 flex justify-center pt-10 list-none space-x-4">
          <li className="relative group cursor-pointer w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:bg-[#25D366]">
            <span className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:-top-11 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] text-white text-sm bg-[#25D366] px-2 py-1 rounded-md shadow-md after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-[#25D366] after:rotate-45">
              WhatsApp
            </span>
            <i className="fab fa-whatsapp text-black group-hover:text-white text-lg"></i>
          </li>

          <li className="relative group cursor-pointer w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:bg-black">
            <span className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:-top-11 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] text-white text-sm bg-black px-2 py-1 rounded-md shadow-md after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-black after:rotate-45">
              TikTok
            </span>
            <i className="fab fa-tiktok text-black group-hover:text-white text-lg"></i>
          </li>

          <li className="relative group cursor-pointer w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:bg-[#e4405f]">
            <span className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:-top-11 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] text-white text-sm bg-[#e4405f] px-2 py-1 rounded-md shadow-md after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-[#e4405f] after:rotate-45">
              Instagram
            </span>
            <i className="fab fa-instagram text-black group-hover:text-white text-lg"></i>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
