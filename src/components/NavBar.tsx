/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar({ setNav }: { setNav: any }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const elements = [
    { name: "Home", index: 0, path: "/home" },
    { name: "About", index: 1, path: "/about" },
    { name: "Docs", index: 2, path: "/docs" },
  ];

  return (
    <div className=" sm:w-64 bg-white shadow-md flex flex-col justify-between items-center py-6 h-full ">
      <nav className="w-full flex-grow">
        <ul className="w-full flex flex-col items-center space-y-3">
          {elements.map((e) => (
            <li
              key={e.index}
              onClick={() => {
                setNav(0);
                navigate(e?.path);
              }}
              className={`w-full text-lg sm:text-xl cursor-pointer py-3 px-6 transition duration-200 ease-in-out ${
                pathname === e?.path || (pathname === "/" && e.path === "/home")
                  ? "text-indigo-600 font-semibold bg-indigo-50"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              {e.name}
            </li>
          ))}
        </ul>
      </nav>
      <footer className=" py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Shaik Afrid. All rights reserved.
      </footer>
    </div>
  );
}
