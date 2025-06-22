import { links } from "../navlinks";
import image from "../images/businessLogo.svg";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-1000 w-full bg-primaryColor/60 backdrop-blur-md border-b-[1px] border-b-secondaryColor/20 backdrop-saturate-150">
      <nav className="nav-padding-x py-6 m-auto flex justify-between items-center ">
        <img
          className="h-[60px] w-[60px] md:h-[75px] md:w-[75px] lg:h-[100px] lg:w-[100px]"
          src={image}
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
        <button className=" hidden md:flex group relative text-[17px] font-bold bg-black rounded-[0.75em] border-none cursor-pointer">
          <span className="block box-border border-[2px] border-secondaryColor rounded-[0.75em] px-[1.5em] py-[0.75em] bg-primaryColor text-secondaryColor transition-transform duration-100 ease-in-out transform translate-y-[-0.2em] group-hover:translate-y-[-0.33em] group-active:translate-y-0">
            <Link to='/booking'>BOOK NOW</Link>
          </span>
        </button>

        <div className="dropdown dropdown-hover md:hidden">
          <div tabIndex={0} role="button" className="btn m-1">
            <HamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
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
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
