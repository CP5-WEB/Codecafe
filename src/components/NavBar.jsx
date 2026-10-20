
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="">
      <div className="">

        <Link
          to="/"
          className=""
        >
          <div className="">
            <span className="">☕</span>
          </div>

          <div>
            <h1 className="">
              CodeCafe
            </h1>
            <p className="">
              COFFEE & CODE
            </p>
          </div>
        </Link>

        <div className="">
          <NavLink
            to="/"
            end
            className={}
          >
            Home
          </NavLink>

          <NavLink
            to="/produtos"
            className={
            }
          >
            Produtos
          </NavLink>
        </div>

      </div>
    </nav>
  );
}
