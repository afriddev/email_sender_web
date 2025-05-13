import { BiMenuAltRight } from "react-icons/bi";
import LgNavBar from "./LgNavBar";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Bottom from "./Bottom";
import NavBar from "./NavBar";

function ProtectedLayout() {
  const [nav, setNav] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <div
        className=" flex w-full  justify-between bg-white items-center"
        id="heroSection"
      >
        <img
          onClick={() => {
            navigate("/");
          }}
          src="heroLogoSmall.jpg"
          className="w-3/5 
           pt-2 ml-4 lg:w-1/6"
        />
        <li className="hidden lg:block">
          <LgNavBar />
        </li>
        <li
          className="list-none text-4xl  text-center text-gray-900 pt-5 pr-5 lg:hidden"
          onClick={() => {
            if (nav === 0) {
              setNav(1);
            } else {
              setNav(0);
            }
          }}
        >
          {nav == 0 ? <BiMenuAltRight /> : <AiOutlineClose />}
        </li>
      </div>
      <div className="absolute z-10 right-0 w-3/5 ">
        {nav == 1 ? <NavBar setNav={setNav} /> : null}
      </div>

      <div>
        <Outlet />
      </div>
      <div>
        <Bottom />
      </div>
    </div>
  );
}

export default ProtectedLayout;
