import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Logo from "../images/Logo.jpg";

const NavBars = () => {
  return (
    <Navbar fluid rounded className="bg-white shadow-md p-4 md:px-10 lg:px-20">
      <NavbarBrand href="/" className="flex items-center space-x-3">
        <img src={Logo} className="h-28 rounded-lg" alt="Flowbite React Logo" />
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse className="w-full">
        <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center w-full">
          <NavbarLink
            href="#glatki"
            id="nav-glatki"
            className="text-lg hover:text-teal-600 transition duration-300 text-center"
          >
            Glatki
          </NavbarLink>
          <NavbarLink
            href="#kafel"
            id="nav-kafel"
            className="text-lg hover:text-teal-600 transition duration-300 text-center"
          >
            Kafel
          </NavbarLink>
          <NavbarLink
            href="#kerpich"
            id="nav-kerpich"
            className="text-lg hover:text-teal-600 transition duration-300 text-center"
          >
            Kerpich
          </NavbarLink>
          <NavbarLink
            href="#dekor"
            id="nav-dekor"
            className="text-lg hover:text-teal-600 transition duration-300 text-center"
          >
            Dekor
          </NavbarLink>
        </div>
      </NavbarCollapse>
      <NavbarCollapse className="w-full">
        <a
          href="tel:+998339666626"
          id="phone-link"
          className="mt-4 md:mt-0 bg-teal-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-teal-600 transition duration-300 text-center ml-auto"
        >
          Telefon qilish
        </a>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavBars;
