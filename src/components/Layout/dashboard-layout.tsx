import { Link, NavLink, Outlet } from "react-router-dom";
import { board } from "../../data/data";
import { FaHome } from "react-icons/fa";

export default function DashboardLayout() {
  return (
    <div>
      <nav className="flex gap-9 py-5 border-b max-w-6xl mx-auto">
        <Link to="/">
          <FaHome className="size-10" />
        </Link>
        {board.map((item) => (
          <NavLink
            to={item.link}
            className="hover:bg-gray-400 p-2 rounded-xl font-bold text-xl"
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
