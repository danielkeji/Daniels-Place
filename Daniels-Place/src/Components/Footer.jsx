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

        
      </nav>
    </footer>
  );
};

export default Footer;
