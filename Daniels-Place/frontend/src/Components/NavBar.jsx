import { links } from "../navlinks";
import imageLight from "../images/businessLogo.svg";
import imageDark from "../images/businessLogoDark.svg";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";
import ThemeImage from "./ThemeImage";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-1000 w-full bg-primaryColor/60 backdrop-blur-md border-b-[1px] border-b-secondaryColor/20 backdrop-saturate-150">
      <nav className="flex items-center justify-between py-6 m-auto nav-padding-x ">
        <ThemeImage
          lightSrc={imageLight}
          darkSrc={imageDark}
          className="h-[60px] w-[60px] md:h-[75px] md:w-[75px] lg:h-[100px] lg:w-[100px]"
        />
        <ul className="hidden md:flex justify-evenly gap-[60px] md:gap-[30px] font-bold">
          {links.map((link) => {
            return (
              <li key={link.id}>
                {link.href ? (
                  <a href={link.href}>{link.text}</a>
                ) : (
                  <Link to="/gallery">{link.text}</Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className="items-center justify-center hidden gap-4 md:flex">
          <ThemeToggle />
          <Link to={"/booking"}>
            <button className="group relative text-[17px] font-bold bg-secondaryColor rounded-[0.75em] border-none cursor-pointer">
              <span className="block box-border border-[2px] border-secondaryColor rounded-[0.75em] px-[1.5em] py-[0.75em] bg-primaryColor text-secondaryColor transition-transform duration-100 ease-in-out transform translate-y-[-0.2em] group-hover:translate-y-[-0.33em] group-active:translate-y-0">
                BOOK NOW
              </span>
            </button>
          </Link>
        </div>

        <div className="dropdown dropdown-hover md:hidden">
          <div tabIndex={0} role="button" className="m-1 btn bg-primaryColor">
            <HamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow-sm dropdown-content menu bg-primaryColor rounded-box z-1 w-25"
          >
            {links.map((link) => {
              return (
                <li key={link.id}>
                  {link.href ? (
                    <a href={link.href}>{link.text}</a>
                  ) : (
                    <>
                      <Link to="/gallery">{link.text}</Link>
                    </>
                  )}
                </li>
              );
            })}
            <li>
              <Link to="/booking">Book</Link>
            </li>
            <li className="pt-4 border-t border-secondaryColor/20">
              <div className="flex items-center justify-between flex-col">
                <span>Theme</span>
                <ThemeToggle />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
