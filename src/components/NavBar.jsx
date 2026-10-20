
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full bg-[#442D1C] shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="group flex items-center gap-4"
        >
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-[#E8D1A7]">
              CodeCafe
            </h1>
            <p className="text-xs tracking-widest text-[#9D9167]">
              COFFEE & CODE
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-medium transition duration-300 ${isActive
                ? "bg-[#84592B] text-[#E8D1A7]"
                : "text-[#E8D1A7] hover:bg-[#84592B]/50"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-medium transition duration-300 ${isActive
                ? "bg-[#84592B] text-[#E8D1A7]"
                : "text-[#E8D1A7] hover:bg-[#84592B]/50"
              }`
            }
          >
            Produtos
          </NavLink>
        </div>

      </div>
    </nav>
  );
}
