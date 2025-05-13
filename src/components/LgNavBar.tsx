import { useLocation, useNavigate } from "react-router-dom";

export default function LgNavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const elements = [
    { name: "Home", index: 0, path: "/home" },
    { name: "About", index: 1, path: "/about" },
    { name: "Docs", index: 2, path: "/docs" },
  ];

  return (
    <nav className="mr-8 lg:mr-16">
      <ul className="flex space-x-4 lg:space-x-8">
        {elements.map((e) => (
          <li
            key={e.index}
            onClick={() => navigate(e?.path)}
            className={`text-lg lg:text-xl font-medium cursor-pointer py-2 px-4 rounded-md transition duration-300 ease-in-out ${
              pathname === e?.path || (pathname === "/" && e.path === "/home")
                ? "text-white bg-indigo-600 hover:bg-indigo-700 shadow-md"
                : "text-gray-700 hover:text-indigo-600"
            }`}
          >
            {e.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
