import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo.png";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  return (
  <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
    <div className="p-2">
      <img src={logo} alt="Logo" className="w-20"/>
    </div>
    <div>
      <ul className="flex items-center gap-10">
        {
          navLinksdata.map((navlink)=>(
            <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            key={navlink._id}>
              <Link 
              activeClass="active"
              to={navlink.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
              {navlink.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
);
}
export default Navbar;
